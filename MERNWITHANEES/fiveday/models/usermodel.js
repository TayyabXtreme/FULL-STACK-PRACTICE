const mongoose=require('mongoose')

const userSchema = mongoose.Schema({
    usernamemd: String,
    emailmd: String,
    passwordmd: String,
    userId: String
})

const userModel=mongoose.model('user',userSchema)

module.exports=userModel