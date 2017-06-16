## About

Demostration of pushing MongoDB realtime changes to browser and reactively rendering them.

### Installation

```sh
git clone kristjanjansen/mongostream
cd mongostream
npm i # or yarn
npm run build
```

### Set up local Mongodb

You will need to configure Mongo to use replicasets / oplog in order to get the realtime changefeed.

Assuming you are installed MongoDB on OSX using `brew install`: 

```sh
mongod --config /usr/local/etc/mongod.conf --replSet rs
```

> Note: You can likely skip `--config` setting when in other platforms

Then log into Mongo shell

```sh
mongo localhost:27017/test
```

and run

```
rs.initiate({ _id: "rs", members: [ {_id: 0, host: "localhost:27017"} ] })
```

### Set up cloud Mongo instance

For mLab you will need a paid plan http://docs.mlab.com/oplog/

MongoDb Atlas information: https://docs.atlas.mongodb.com/faq/#does-mongodb-service-expose-the-oplog

### Run server

```
node index
```

and point the browser to `http://localhost:8080`

### Insert and update data

Insert

```
node insert mykey value
```

Update

```
node update mykey value newvalue
```
