var mongoose = require('../config/db');
var Schema = mongoose.Schema;
var ApiError = require('../app/error/ApiError');
var ApiErrorName = require('../app/error/ApiErrorName');

var userSchema = new Schema({
    name : String,
    age : Number
});

var userManager = mongoose.model('users', userSchema);

/**
 * 按条件获取用户获取用户
 */
exports.findOne = (params) =>{
    return userManager.findOne(params);
};

/**
 * 保存
 * @param params
 * @returns {Promise.<{}>}
 */

exports.saveUser = (data) => {
    const user = new userManager(data);
    return user.save(data);
};

/**
 * 用户修改
 * @param query
 * @param params
 * @returns {Promise.<{}>}
 */
exports.updateUser = (query,params) =>{
    return userManager.update(query,params);
};

/**
 * 用户删除
 * @param params
 * @returns {boolean}
 */
exports.deleteUser = (params) =>{
    return userManager.remove(params);
};
