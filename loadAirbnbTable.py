import json
import pymongo
from pymongo import MongoClient


with open('../Data/airTableYelp2399.json','r') as jFile:
    inLine = jFile.read()
    jOb = json.loads(inLine, 'utf8')

newJ = {}
for ele in jOb:
    ori = jOb[ele]
    ori['loc'] = {'type':'Point', 'coordinates': jOb[ele][u'coordinates']}
    newJ[ele] = ori


client = MongoClient('localhost', 27017)
db = client.mydb

posts = db.airTable2399
for ele in newJ:
    posts.insert(newJ[ele])

posts.create_index([('loc', pymongo.GEOSPHERE)])