import express from 'express'
import { getUSerProfile, loginUser, logout, registerUser, updateProfile } from '../controllers/user.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'
import upload from '../utils/multer.js'

const router=express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)
router.route('/profile').get(isAuthenticated,getUSerProfile)
router.route('/update-profile').post(isAuthenticated, upload.single('profilePhoto'), updateProfile)


export default router