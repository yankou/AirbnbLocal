from flask import Flask
from crossdomain import crossdomain
import queryAirTable
from flask import request
import pymongo
from pymongo import MongoClient
import json
import flask


app = Flask(__name__)


@app.route('/')
@crossdomain(origin='*')
def hello():
	return '<h1>This is a test!</h1>'


@app.route('/location', methods=['GET','POST'])
@crossdomain(origin='*')
def findNeighborhood():
	## parse request param
	inputLat = request.args.get('lat')
	inputLng = request.args.get('lng')
	inputPrice = request.args.get('price')

	airTableRes = queryAirTable.queryAirbnb(inputLat, inputLng, inputPrice)
	outputJson = json.dumps(airTableRes).encode('utf8')
	return flask.jsonify(airTableRes)
#	return outputJson

if __name__ == '__main__':
	app.run(host = '0.0.0.0', port=80)

