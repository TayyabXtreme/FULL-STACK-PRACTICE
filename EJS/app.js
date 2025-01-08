const express = require('express');
const morgan=require('morgan');
const app = express();
app.set('view engine','ejs')

app.use(morgan('dev'));



app.get('/',(req,res,next)=>{
    const a=5
    const b=10
    console.log(a+b)
    next()
},(req,res)=>{
    res.render('index.ejs',{name:'Tayyab',age:20});
})
app.get('/about',(req,res)=>{
    res.send('About Us');
})

app.get('/contact',(req,res)=>{
    res.send('Contact Us');
})

app.listen(3000,()=>{});