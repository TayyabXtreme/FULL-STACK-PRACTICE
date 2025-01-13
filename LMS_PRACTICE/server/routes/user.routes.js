import express from 'express'
import { login, register } from '../controller/user.controller.js'

const router=express.Router()

router.route('/register').post(register)
router.route('/login').post(login)



export default router