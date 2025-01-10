const mongoose=require('mongoose')

const connectedToDB=()=>{
    mongoose.connect(process.env.MONODBURI).then((e)=>{
        console.log('connected to db')
    }).catch((e)=>{
        console.log('not connected to db',e)
    })
}

module.exports=connectedToDB