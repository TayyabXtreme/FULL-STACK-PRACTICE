const express=require('express')
const router=express.Router()
const {getUser,updateUser}=require('../controller/user.controller')

router.get('/:id',async(req,res)=>{
    const userId = req.params.id;   
    const result=await getUser(userId)
    res.status(result.status).json({success:result.success,message:result.message,user: result.user || null,  })
})


router.put('/:id', async (req, res) => {
    const userId = req.params.id;
  
    // Call the async updateUser function and await its result
    const result = await updateUser(userId, { profilePic: 'https://th.bing.com/th/id/OIP.JYoPhyoNvlcjMtnc9_QHjgHaHa?rs=1&pid=ImgDetMain' });
  
    // Return the response based on the result of the updateUser function
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      user: result.user || null,
    });
  });
  


module.exports=router