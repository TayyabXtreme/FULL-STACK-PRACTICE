const express = require('express');
const morgan=require('morgan');
const app = express();
const db=require('./config/db');
const userModel=require('./models/user');



app.set('view engine','ejs')

app.use(morgan('dev'));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


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

app.post('/get-form-data',(req,res)=>{
    console.log(req.body)
    res.send('data recived')
})

app.get('/register',(req,res)=>{
    res.render('register.ejs');

})

app.get('/get-users',(req,res)=>{
    userModel.find().then((data)=>{
        console.log(data)
        res.send(data)
    })
})

app.get('/update-user',async(req,res)=>{
    await userModel.findOneAndUpdate({
        username:'Shafaque'
    },{
        username:'Evening Twillight'
    }
)
res.send('User updated')

})


app.get('/delete-user',async(req,res)=>{
    await userModel.findOneAndDelete({
        username:'Tayyab'
    })
    res.send('User deleted')
})


app.post('/register',async (req,res)=>{
    console.log(req.body)
    const {username,email,password}=req.body;
    
   const newUser=await userModel.create(
   {
         username:username,
         email:email,
         password:password
   }
   )

    res.send(newUser)
})

app.listen(3000,()=>{});