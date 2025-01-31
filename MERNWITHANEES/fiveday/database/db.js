const mongoose =require('mongoose')

const mongooseDB=async()=>{
    try {
        await mongoose.connect(process.env.MONODB_URI)
    console.log('database ic oneec')
        
    } catch (error) {
        console.log(error)
    }
    

}

module.exports=mongooseDB