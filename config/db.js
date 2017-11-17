/**
 * 数据库操作
 */
const mongoose = require('mongoose');
const config = require('../config');

// 连接字符串格式为mongodb://主机/数据库名
mongoose.connect(config.mongodb_url);

var db = mongoose.connection;

db.on('error', function callback () {
    console.log("Connection error");
});

db.once('open', function callback () {
    console.log("Mongo working!");
});

module.exports = mongoose;