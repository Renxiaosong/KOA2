/**
 * 测试环境的配置内容
 */

module.exports = {
    env: 'test',        //环境名称
    port: 3002,         //服务端口号
    mongodb_url: 'mongodb:127.0.0.1:27017/hxtest',    //数据库地址
    redis_url:'localhost',       //redis地址
    redis_port: 6379      //redis端口号
}