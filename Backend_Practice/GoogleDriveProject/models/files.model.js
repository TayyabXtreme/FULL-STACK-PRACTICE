const mongoose=require('mongoose');

const fileSchema=new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    originalName:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true});


const file=mongoose.model('File',fileSchema);
module.exports=file;