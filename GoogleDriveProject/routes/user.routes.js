const express=require('express');
const router=express.Router();
const { body, validationResult } = require('express-validator');
router.get('/test',(req,res)=>{
    res.send('User test route');
})

router.get('/register',(req,res)=>{
    res.render('register');
})

router.post('/register',
body('email').trim().isEmail().isLength({min:5}),
body('password').trim().isLength({min:5}),
body('username').trim().isLength({min:5})
,(req,res)=>{
    const errors=validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
      return  res.status(400).json({errors:errors.array(),message:'Validation failed'});
    }
    res.send(errors);
})

module.exports=router;