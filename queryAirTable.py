
def queryAirbnb(lat, lng, price):

	import pymongo
	from pymongo import MongoClient

	Quantile25 = 9.07


	client = MongoClient('localhost', 27017)
	db = client.mydb
	collection = db.airTable2399


	def queryAveScore(lat, lng, maxDis):

		query = {'loc': {'$nearSphere': \
		{'$geometry': {'type' : "Point",'coordinates' : [ lng, lat ]},\
		'$minDistance': 0, '$maxDistance': maxDis}}} 

		return collection.find(query)


	def getAveScore(lat, lng):

		aveScore = []
		startMaxDis = 500

		## first try query listings within 0.3mi
		listingFound = queryAveScore(lat, lng, startMaxDis)
		while listingFound.count() < 10:
			print startMaxDis
			startMaxDis += 300
			listingFound = queryAveScore(lat, lng, startMaxDis)
			print listingFound.count()

		for item in listingFound:
			aveScore.append(item['BayeAve'])

		return sum(aveScore)/float(len(aveScore))


	def mainAction(lat, lng, price):
		# lat, lng, price = parseURL(locURL)
		aveScore = getAveScore(lat, lng)
		print aveScore
		returnJson = {}
		returnJson['score'] = aveScore

		if aveScore >= Quantile25:
			describe = 'Nice choice! This apartment ranks in the top 25'+'%'+' of all Airbnb listings in NYC.'
			suggestion = 'Here are some similar apartments with less cost:'
			returnJson['choice'] = getCheaper(lat, lng, price)
			returnJson['describe'] = describe
			returnJson['suggestion'] = suggestion


		if aveScore < Quantile25:
			describe = 'Hmm, you can find a better neighborhood with this budget!'
			suggestion = 'Check out these apartments: '
			returnJson['choice'] = getBetter(lat, lng, aveScore, price)
			returnJson['describe'] = describe
			returnJson['suggestion'] = suggestion

		if returnJson:
			return returnJson
		else:
			print 'No suitable results found for this apartment.'
			return returnJson


	def getCheaper(lat, lng, price):

		## query criteria for cheaper: search radius = 0.5mi AND price < current_price
		cheaper = {}

		query = {'loc': {'$nearSphere': \
		{'$geometry': {'type' : "Point",'coordinates' : [ lng, lat ]},\
		'$minDistance': 0, '$maxDistance': 600}},\
		'price': {'$lt': price}} 

		for item in collection.find(query).limit(15):
		    info = {}
		    info['hostID'] = item['hostID']
		    info['price'] = item['price']
		    info['disToSub'] = item['disToSub']
		    info['roomType'] = item['roomType']
		    info['inc'] = item['inc']
		    info['dinner'] = item['dinner']
		    info['bars'] = item['bars']
		    info['nightlife'] = item['nightlife']
		    info['grocery'] = item['grocery']
		    # info['img'] = item['img']
		    info['coord'] = item['coordinates']
		    info['BayeAve'] = item['BayeAve']
		    info['neighborhood'] = item['neighborhood']
		    info['url'] = 'http://www.airbnb.com/rooms/'+str(item['hostID'])
		    cheaper[info['hostID']] = info
		    # print item['price']

		if len(cheaper) == 0:
			print "No cheaper apartments found."

		return cheaper


	def getBetter(lat, lng, aveScore, price):

		## query criteria for better: search radius = 1mi AND BayeAve > current_aveScore AND price < current_price+10
		better = {}

		query = {'loc': {'$nearSphere': \
		{'$geometry': {'type' : "Point",'coordinates' : [ lng, lat ]},\
		'$minDistance': 0, '$maxDistance': 1600}},\
		'BayeAve': {'$gt': aveScore},\
		'price': {'$lt': price+20 }}

		for item in collection.find(query).sort([('BayeAve', pymongo.DESCENDING)]).limit(15):
		    info = {}
		    info['hostID'] = item['hostID']
		    info['price'] = item['price']
		    info['disToSub'] = item['disToSub']
		    info['roomType'] = item['roomType']
		    info['coord'] = item['coordinates']
		    info['BayeAve'] = item['BayeAve']
		    info['url'] = 'http://www.airbnb.com/rooms/'+item['hostID']
		    cheaper[info['hostID']] = info

		if len(better) == 0:
			print "No better neighborhoods found."

		return better

	return mainAction(float(lat), float(lng), float(price))
# print mainAction(40.78, -73.9667, 120)
