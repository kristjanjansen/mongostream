var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fallback = require('express-history-api-fallback')
var MongoOplog = require('mongo-oplog')
const oplog = MongoOplog('mongodb://127.0.0.1:27017/local', { ns: 'test.documents' })

app.use(express.static(__dirname))
app.use(fallback('index.html', { root: __dirname }))

oplog.tail();

io.on('connection', function (socket) {
    oplog.on('insert', doc => socket.emit('insert', doc));
    oplog.on('update', doc => socket.emit('update', doc));
});

server.listen(8080);
