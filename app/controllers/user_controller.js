const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorName');
const usersModule = require('../../system_modules/user');


//用户登录
exports.login = async(ctx,next) =>{
    try{
        const params = ctx.query;
        //还没想好怎么做
    }catch (error){

    }
};

//根据id获取用户
exports.getUser = async (ctx, next) => {
    try {
        const params = ctx.query;
        if (!params.id) {
            ctx.error = ApiErrorNames.PARAMS_ERROR;
            return;
        }
        const query = {
            _id: params.id
        };
        ctx.body = await usersModule.findOne(query);
    } catch (err) {
        ctx.error = err;
    }

};

//用户注册
exports.registerUser = async (ctx, next) => {
    try {
        const body = ctx.request.body;
        if (!body.name || !body.age) {
            ctx.error = ApiErrorNames.PARAMS_ERROR;
            return;
        }
        const user = {
            name: body.name,
            age: body.age
        };
        ctx.body = await usersModule.saveUser(user);
    } catch (err) {
        ctx.error = err;
    }

};

//用户修改
exports.updateUser = async (ctx, next) => {
    try {
        const body = ctx.request.body;
        if (!body) {
            ctx.error = ApiErrorNames.PARAMS_ERROR;
        }
        const query = {
            _id: body.id
        };
        const params = {
            $set: {name: body.name}
        };
        const result = await usersModule.updateUser(query, params);
        if (result.n === 0) {
            ctx.error = ApiErrorNames.NO_PATCH;
            return;
        }
        ctx.body = "ok";
    } catch (err) {
        ctx.error = err;
    }
};


/**
 * 用户删除
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
exports.deleteUser = async (ctx, next) => {
    try {
        const params = ctx.request.body;
        if (!params.id) {
            ctx.error = ApiErrorNames.PARAMS_ERROR;
            return;
        }
        const delPam = {
            _id: params.id
        };
        const result = await usersModule.deleteUser(delPam);
        if (JSON.parse(result).n === 0) {
            ctx.error = ApiErrorNames.NO_PATCH;
            return;
        }
        ctx.body = 'ok';
    } catch (err) {
        ctx.error = err;
    }
};