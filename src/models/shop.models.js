const mongoose = require('mongoose'); // Erase if already required
const {Types,Schema,model} =  require('mongoose')


const DOCUMENT_NAME = 'shop_product';
const COLLECTION_NAME = "users"

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    password:{
        type:String,
        required:true,
    },
    verfity:{
        type:Schema.Types.Boolean,
        default:false,
    },
    roles:{
        type:Array,
        default:[],
    },
},{timeseriess:true,collection:COLLECTION_NAME});

//Export the model
module.exports = mongoose.model('User', userSchema);