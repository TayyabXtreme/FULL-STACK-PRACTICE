import express from 'express'
import { getUSerProfile, loginUser, logout, registerUser } from '../controllers/user.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const router=express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)
router.route('/profile').get(isAuthenticated,getUSerProfile)


export default router