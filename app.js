const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const convert = require('koa-convert');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-session2');
const Store = require('./utils/store');
var ApiError = require('./app/error/ApiError');

const users = require('./routes/api/user_router');

//log工具
const logUtil = require('./utils/log_util');

//中间件
const response_formatter = require('./middlewares/response_formatter');
// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));
app.use(json());
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));

//app.use(views(__dirname + '/views', {
//  extension: 'ejs'
//}));

app.use(session({
    store: new Store()
}));


// app.use(async (ctx,next) => {
//     const route = ctx.path;
//     const list = route.split('/');
//     const path = list[list.length-1];
//     console.log(ctx.session)
//     if(path === 'login'){
//         await next();
//     }else{
//         let user = ctx.session.user;
//         if(user){
//             await next();
//         }else{
//             ctx.body = new ApiError("sessionError")
//         }
//     }
// });


// logger
app.use(async (ctx, next) => {
    //响应开始时间
    const start = new Date();
    //响应间隔时间
    var ms;
    try {
        //开始进入到下一个中间件
        await next();
        ms = new Date() - start;
        //记录响应日志
        logUtil.logResponse(ctx, ms);
    } catch (error) {
        ms = new Date() - start;
        //记录异常日志
        logUtil.logError(ctx, error, ms);
    }
});

//添加格式化处理响应结果的中间件，在添加路由之前调用
//仅对/api开头的url进行格式化处理
app.use(response_formatter('/'));

// routes
router.use('/users',users.routes(),users.allowedMethods());

app.use(router.routes(), router.allowedMethods());

//用户认证
app.on('error',function (err,ctx) {
    console.log(err);
    logger.error('server error',err,ctx);
});

module.exports = app;