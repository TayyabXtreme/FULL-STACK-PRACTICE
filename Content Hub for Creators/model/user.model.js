const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            trim:true
        }
    }

)


const user=mongoose.model('user',userSchema)

module.exports=user