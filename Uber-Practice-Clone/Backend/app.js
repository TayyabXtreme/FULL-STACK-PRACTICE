const dotenv=require('dotenv')
dotenv.config();
const express=require('express')
const cors=require('cors')
const app=express()

const userRoutes=require('./routes/user.routes')
const connectToDb=require('./db/dbconnect')
 connectToDb()

 app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/users',userRoutes)
app.get('/',(req,res)=>{
    res.send('HEllo World')
});

module.exports=app;