const config = require('../config');
const redis = require('redis');

redis.createClient(config.redis_port,config.redis_url,{});

var client = redis.connection;

client.once('ready',function(){
    console.log('redis working');
});


client.on('error',function () {
    console.log('redis error')
});


module.exports = redis;