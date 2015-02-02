from flask import Flask
from crossdomain import crossdomain
import queryAirTable
from flask import request

app = Flask(__name__)


@app.route('/')
@crossdomain(origin='*')
def hello():
	return '<h1>This is a test!</h1>'


@app.route('/location', methods=['GET'])
@crossdomain(origin='*')
def findNeighborhood():

	## parse request param
	inputLat = request.form['lat']
	inputLng = request.form['lng']
	inputPrice = request.form['price']

	airTableRes = queryAirTable(inputLat, inputLng, inputPrice)
	outputJson = json.dumps(airTableRes).encode('utf8')
	return outputJson

if __name__ == '__main__':
	app.run(host = '0.0.0.0', port=80)

