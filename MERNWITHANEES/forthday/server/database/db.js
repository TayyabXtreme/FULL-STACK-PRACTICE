const mongoose=require('mongoose')


const MonoDBConnect=async()=>{
    try {

        await mongoose.connect(process.env.MONODB_URI)
        console.log('MongoDB is connected')

        
    } catch (error) {
        console.log(error)
        
    }
}


module.exports= {MonoDBConnect}