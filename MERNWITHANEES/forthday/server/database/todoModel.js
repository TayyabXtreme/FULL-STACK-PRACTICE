
const mongosse =require('mongoose')

const userSchema=mongosse.Schema({
    titlemd:{
        type:String,
        required:[true,'pls give title']

    },
    descriptionmd:{
        type:String,
        required:[true,'pls give title']
        
    },
    isCompletedmd:{
        type:Boolean,
        default:false
    }
})



const UserModel=mongosse.model('todo',userSchema)


module.exports={UserModel}