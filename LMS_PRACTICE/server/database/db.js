import mongoose from 'mongoose';
const monoDBConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONODBURI)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
    
    }

export default monoDBConnect