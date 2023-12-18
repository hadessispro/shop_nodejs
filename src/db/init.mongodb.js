const express = require('express');
const mongoose = require('mongoose');
const {countConnect} = require('../helpers/check.connect');
 // cách kết nối khuyên dùng


class Database{

    constructor(){
        this.connect()
    }

    connect(type = "mongodb"){
            if(1 === 1){
                mongoose.set('debug',true)
                mongoose.set('debug',{color:true})  
            }
        mongoose.connect('mongodb://127.0.0.1:27017/list_database_academy')
                .then(() => console.log('Connected!',countConnect()))
                .catch(err => console.log(err))    
    }

    static getInstance(){
        if(!Database.instance){
            Database.instancence =  new Database();
        }
        return Database.instance
    }
}

