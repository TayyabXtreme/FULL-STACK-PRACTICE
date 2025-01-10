const express=require('express')

const router=express.Router();
const userModel=require('../model/user.model')


router.get('/register',(req,res)=>{
    userModel.create({username:'tayyab',password:'123'}).then((e)=>{
        console.log("user created successfully",e)
    }).catch((e)=>{
        console.log('error',e)
    })
    // userModel.find().then((e)=>{
    //     console.log('all user ',e)
    // }).catch((e)=>{
    //     console.log('error',e)
    // })


    res.send('user regsiter')
})


module.exports=router