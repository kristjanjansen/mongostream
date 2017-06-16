
var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/test';

var key = process.argv[2]
var value = process.argv[3]
var newValue = process.argv[4]

if (!key && !value && !newValue) {
    console.log('Usage: node update <key> <value> <newvalue>')
}

mongo.connect(url, (err, db) => {
    var docs = db.collection('documents')
    docs.updateMany({[key]: value}, {$set: {[key]: newValue}}, (err, r) => {
        console.log(r.result)
    })
    db.close()
});

