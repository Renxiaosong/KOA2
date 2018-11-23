const mongoose = require('../config/db');
const DB = require('../config/db');
const ObjectID = require('mongodb').ObjectID;
let colelctionName = 'users'


/**
 * 查找一个
 * @param params
 * @returns {Promise|Promise.<T>}
 */
exports.findOne = (params) =>{
    const s ={};
    if(params.id){
        s._id=ObjectID(params.id)
    }
    if(params.name){
        s.name = params.name;
    }
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

