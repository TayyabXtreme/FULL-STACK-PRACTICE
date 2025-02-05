const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'Firstname should be atleast 3 characters long'],
            maxlength:[20,'Firstname should not exceed 20 characters']
        },
        lastname:{
            type:String,
            minlength:[3,'Lastname should be atleast 3 characters long'],
            maxlength:[20,'Lastname should not exceed 20 characters']
        }

    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(v){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
            },
            message:'Please enter a valid email'
        }
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    }
});


userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token
}

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hasedPassword=async function(password){
    return await bcrypt.hash(password,10)
}


const userModel=mongoose.model('user',userSchema)

module.exports=userModel