const express = require('express');
const mongoose = require('mongoose');
//cách kết nối phổ biến


mongoose.connect('mongodb://127.0.0.1:27017/list_database_academy')
        .then(() => console.log('Connected!'))
        .catch(err => console.log(err))      


    //dev
if(1 === 1){
    mongoose.set('debug',true)
    mongoose.set('debug',{color:true})
}



module.exports = mongoose