import mongoose from "mongoose";


const ConnectDB=async()=>{
    try {
          await mongoose.connect(process.env.MONODBURI)
          console.log('mongoDB connected Successfully')  
    } catch (error) {
        console.log(error)
    }
}

export {ConnectDB}