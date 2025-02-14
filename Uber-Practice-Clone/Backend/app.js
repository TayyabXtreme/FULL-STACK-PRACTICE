const dotenv=require('dotenv')
dotenv.config();
const express=require('express')
const cors=require('cors')
const app=express()
const connectToDb=require('./db/dbconnect')
 connectToDb()

app.use(cors())
app.get('/',(req,res)=>{
    res.send('HEllo World')
});

module.exports=app;