const config = require('../config');
var Redis = require('ioredis');

var redis = new Redis(config.redis_port,config.redis_url);


redis.once('ready',function(){
    console.log('redis working');
});


redis.on('error',function () {
    console.log('redis error')
});


module.exports = redis;