/**
 * 开发环境的配置内容
 */

module.exports = {
    env: 'development', //环境名称
    port: 3001,         //服务端口号
    mongodb_url: 'mongodb://hx:12345678@127.0.0.1/hx',    //数据库地址
    mongodb_db: 'hx',
    redis_url:'localhost',       //redis地址
    redis_port: 6379      //redis端口号
}