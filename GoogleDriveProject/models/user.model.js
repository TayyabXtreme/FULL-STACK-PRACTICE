const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        minlength:[3,'Username must be atleast 3 characters long'],
        maxlength:[20,'Username must be atmost 20 characters long'],
        unique:[true,'Username already exists'],
        lowercase:true,

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:[true,'Email already exists'],
        minlength:[6,'Email must be atleast 6 characters long'],
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:[6,'Password must be atleast 6 characters long'],
    }

});

const user=mongoose.model('User',userSchema);

module.exports=user;