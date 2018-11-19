const mongoose = require('../config/db');
const DB = require('../config/db');
const ObjectID = require('mongodb').ObjectID;
const Schema = mongoose.Schema;

const ApiError = require('../app/error/ApiError');
const ApiErrorName = require('../app/error/ApiErrorName');

/*const userSchema = new Schema({
    name : String,
    age : Number
});

const userManager = mongoose.model('users', userSchema);

/!**
 * 按条件获取用户获取用户
 *!/
exports.findOne = (params) =>{
    return userManager.findOne(params);
};

/!**
 * 保存
 * @param params
 * @returns {Promise.<{}>}
 *!/

exports.saveUser = (data) => {
    const user = new userManager(data);
    return user.save(data);
};

/!**
 * 用户修改
 * @param query
 * @param params
 * @returns {Promise.<{}>}
 *!/
exports.updateUser = (query,params) =>{
    return userManager.update(query,params);
};

/!**
 * 用户删除
 * @param params
 * @returns {boolean}
 *!/
exports.deleteUser = (params) =>{
    return userManager.remove(params);
};*/

exports.findOne = (params) =>{
    return DB.findOne('users',{_id:ObjectID(params._id)},{username:1}).then((result)=>{
        return result;
    }).catch((err)=>{
        return err;
    })
};

