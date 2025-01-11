import express from 'express'
const router=express.Router()
import { register } from '../controllers/user.js'

router.route('/create').post(register)
export default router;
