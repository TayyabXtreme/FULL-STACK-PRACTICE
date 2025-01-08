const express=require('express');

const app=express();
const userRouter=require('./routes/user.routes');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use('/user',userRouter);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})