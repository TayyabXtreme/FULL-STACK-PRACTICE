import mongoose from "mongoose";

const connectDB=async ()=>{
try{
    await mongoose.connect(process.env.MONDOURI)
    console.log('mongoDB connected')

}catch(error){
    console.log(error)
}
}

export default connectDB