var path = require('path');

//日志根目录
var baseLogPath = path.resolve(__dirname, '../logs')

//错误日志目录
var errorPath = "/error";
//错误日志文件名
var errorFileName = "error";
//错误日志输出完整路径
var errorLogPath = baseLogPath + errorPath + "/" + errorFileName;


//响应日志目录
var responsePath = "/response";
//响应日志文件名
var responseFileName = "response";
//响应日志输出完整路径
var responseLogPath = baseLogPath + responsePath + "/" + responseFileName;

module.exports = {
    "appenders":
        {
            errorLogger:{
                "category":"errorLogger",             //logger名称
                "type": "dateFile",                   //日志类型
                "filename": errorLogPath,             //日志输出位置
                "alwaysIncludePattern":true,          //是否总是有后缀名
                "pattern": "-yyyy-MM-dd-hh.log",      //后缀，每小时创建一个新的日志文件
                "path": errorPath                     //自定义属性，错误日志的根目录
            },
            resLogger:{
                "category":"resLogger",
                "type": "dateFile",
                "filename": responseLogPath,
                "alwaysIncludePattern":true,
                "pattern": "-yyyy-MM-dd-hh.log",
                "path": responsePath
            }
        },
    categories: {
        cheese: { appenders: ['errorLogger'], level: 'error' },
        default: { appenders: ['resLogger'], level: 'all' }
    },
    "baseLogPath": baseLogPath                  //logs根目录
}