const dotenv=require('dotenv')
dotenv.config();
const express=require('express')
const cors=require('cors')
const app=express()

const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes')
const connectToDb=require('./db/dbconnect')
const cookieParser=require('cookie-parser')
 connectToDb()
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/users',userRoutes)
app.use('/captains',captainRoutes)
app.get('/',(req,res)=>{
    res.send('HEllo World')
});

module.exports=app;