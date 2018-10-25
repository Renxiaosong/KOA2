const config = require('../config');
let Redis = require('ioredis');

let redis = new Redis(config.redis_port,config.redis_url);


redis.once('ready',function(){
    console.log('redis working');
});


redis.on('error',function (err) {
    console.log('redis error');
});


module.exports = redis;