const express = require('express');
const mongoose = require('mongoose');
const {countConnect} = require('../helpers/check.connect');
 // cách kết nối khuyên dùng
const {db:{host,name,port}}=require('../configs/config.mongodb')

class Database{

    constructor(){
        this.connect()
    }

    connect(type = "mongodb"){
        //dev
            if(1 === 1){
                mongoose.set('debug',true)
                mongoose.set('debug',{color:true})  
            }
        mongoose.connect(`mongodb://${host}:${port}/${name}`,{
            maxPoolSize:10//tối đa hóa kích thước truy cập
            //nếu có lượng poolsize quá lớn thì từ max những truy cập còn lại sẽ phải hàng đợi max
        })
                .then(() => console.log('Connected!'))
                .then(()=>console.log(`mongodb://${host}:${port}/${name}`))
                .catch(err => console.log("connect error !",err))    
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance =  new Database();
        }
        return Database.instance
    }
}


const instanceMongodb   = Database.getInstance()
module.exports = instanceMongodb;
