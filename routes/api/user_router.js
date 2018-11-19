let router = require('koa-router')();
let user_controller = require('../../app/controllers/user_controller');
let ApiError = require('../../app/error/ApiError');
let redis = require('../../config/redis');
router.use(async(ctx,next)=>{
    await next();
    if (typeof ctx.error === 'string'){
        throw new ApiError(ctx.error);
    }
});

const cache = async function (ctx,next) {
    try{
        const result = await redis.get('user');
        if (result === null){
            await next();
        }else{
            ctx.body = JSON.parse(result);
        }
    }catch (e){
        ctx.error = e;
    }
}
//用户登录
router.post('/login',user_controller.login);

//获取用户
router.get('/getUser', user_controller.getUser);

//用户注册
router.post('/registerUser', user_controller.registerUser);

//修改用户信息
router.patch('/updateUser',user_controller.updateUser);

//修改用户信息
router.delete('/deleteUser',user_controller.deleteUser);


module.exports = router;