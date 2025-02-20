const express=require('express')
const router=express.Router()
const mapController=require('../controllers/maps.controller')
const authMiddleware=require('../middlewares/auth.middleware')
const {query}=require('express-validator')

router.get('/get-coordinates',
    query('address').isString().notEmpty(),
    authMiddleware.authUser,mapController.getCoordinates)



module.exports=router


