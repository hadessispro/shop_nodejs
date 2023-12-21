// require('dotenv').config()
const express=  require("express");

const app = express();
const { default:helmet } = require("helmet");
const compression  = require('compression');
const morgan = require("morgan");
//init middlewave

app.use((morgan("combined")));//thông báo tới người dev về request người dùng
app.use(helmet());//bảo vệ cookie tránh lỗi bảo mật
app.use(compression());//giảm thiểu tối đa dữ liệu tới người dùng

//init db
require('./db/init.mongodb');

const {checkoverload}  = require("./helpers/check.connect");
checkoverload();


//start app
app.use('',require('./routers'));
// console.log("process",process.env)

module.exports = app;