const mongoose = require('../config/db');
const DB = require('../config/db');
const ObjectID = require('mongodb').ObjectID;
let colelctionName = 'users';


/**
 * 查找一个
 * @param params
 * @returns {Promise|Promise.<T>}
 */
exports.findOne = (params) =>{
    console.log(params)
    const s ={};
    if(params.id){
        s._id=ObjectID(params.id)
    }
    if(params.username){
        s.username = params.username;
    }
    if(params.password){
        s.password = params.password;
    }
    console.log(s)
    return DB.findOne(colelctionName,s).then((result)=>{
        return result;
    }).catch((err)=>{
        return err;
    })
};

exports.insertOne = (data) =>{
    return DB.insertOne(colelctionName,data).then((result) =>{
        return result;
    }).catch((err) =>{
        return err.message;
    })
}

