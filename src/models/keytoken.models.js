const mongoose = require('mongoose'); // Erase if already required
const {Schema,model} =  require('mongoose')


const DOCUMENT_NAME = 'Key';
const COLLECTION_NAME = "Keys"

// Declare the Schema of the Mongo model
var keytokenSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'shop'
    },
    publickey:{
        type:String,
        required:true,
  
    },
    refeshtoken:{
        type:Array,
        default:[]
    }
},{timestamps:true,collection:COLLECTION_NAME});

//Export the model
module.exports = model(DOCUMENT_NAME, keytokenSchema);