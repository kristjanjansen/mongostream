
var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/test';

var key = process.argv[2]
var value = process.argv[3]

if (!key && !value) {
    console.log('Usage: node insert <key> <value>')
}

mongo.connect(url, (err, db) => {
    var docs = db.collection('documents')
    docs.insert({[key]: value}, (err, r) => {
        console.log(r)
    })
    db.close()
});

