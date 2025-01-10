const express=require('express');
const dotenv=require('dotenv');

dotenv.config();
const app=express();
const userRouter=require('./routes/user.routes');

const connectToDB=require('./config/db');
const cookieParser=require('cookie-parser');
const indexRouter=require('./routes/index.routes');


connectToDB();
const { supabaseConnection } = require('./config/supabaseconfig');
const isSupabaseConnected = supabaseConnection();
if (!isSupabaseConnected) {
    console.error('Supabase connection failed. Exiting...');
    process.exit(1);
  }


app.use(cookieParser()); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');


app.use('/user',userRouter);
app.use('/',indexRouter);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})