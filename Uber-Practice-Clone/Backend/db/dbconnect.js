const mongoose=require('mongoose')

async function connectToDb(){
     mongoose.connect(process.env.MONGO_URI).then((obj)=>{
        console.log('mongodb coneected')
     }).catch((e)=>{
        console.log('mongodb connection error')
     })
    

}

module.exports=connectToDb;