const mongoose = require('mongoose'); // Erase if already required



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
        type:Schema.Types.Boolean,
        default:false,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);