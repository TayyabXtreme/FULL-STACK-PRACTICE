import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app=express()

import monoDBConnect from './database/db.js';







monoDBConnect()







app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})