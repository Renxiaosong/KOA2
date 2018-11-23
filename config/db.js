/**
 * 数据库操作
 */
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const config = require('./index');
const redis = require('redis');

// 连接字符串格式为mongodb://主机/数据库名
// mongoose.connect(config.mongodb_url);

//mongodb数据连接 mongodbClient
function connectDB(){
    return MongoClient.connect(config.mongodb_url).then((db)=>{
        console.log('Connect Success!');
        return db;
    }).catch((err)=>{
        console.log('Connect Failed');
        return '';
    })
}
/*var client = redis.createClient(config.redis_port,config.redis_url,{});


client.once('ready',function(){
    console.log('redis ready');
});

client.on('error',function () {
    console.log('redis error')
});*/


/*const db = mongoose.connection;

db.on('error', function callback () {
    console.log("Connection error");
});

db.once('open', function callback () {
    console.log("Mongo working!");
});

module.exports = mongoose;*/
// module.exports = redis;



exports.findOne = (collectionname,condition,columns) =>{
    return connectDB().then((db)=>{
        const DB = db.db(config.mongodb_db);
        const collections = DB.collection(collectionname);
        const result = collections.findOne(condition,columns);
        db.close();
        return result;
    });
};

exports.find = (collectionname,condition,columns)=> {
    return connectDB().then((db)=>{
        const DB = db.db(config.mongodb_db);
        const collections = DB.collection(collectionname);
        const result = collections.find(condition,columns).toArray();
        db.close();
        return result;
    });
};

exports.insertOne = function(collectionname,json){
    return connectDB().then((db)=>{
        const DB = db.db(config.mongodb_db);
        const collection = DB.collection(collectionname);
        const result = collection.insertOne(json);
        db.close();
        return result;
    })
};