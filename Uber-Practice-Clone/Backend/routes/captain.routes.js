const express=require('express')
const router=express.Router()
const {body}=require('express-validator')
const captianController=require('../controllers/captain.controller')
const authMiddleware=require('../middlewares/auth.middleware')
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be 3 character '),
    body('password').isLength({min:6}).withMessage('password must be 6 character '),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be 3 character '),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be 3 character '),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be at least 1 '),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('first name must be 3 character '),
],

captianController.registerCaptain
)


router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be 6 character ')
],
captianController.loginCaptain
)


router.get('/profile',authMiddleware.authCaptain,captianController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain,captianController.logoutCaptain)

module.exports=router


