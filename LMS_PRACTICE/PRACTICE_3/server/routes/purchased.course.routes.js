import express from 'express'
import isAuthenticated from '../middlewares/isAuthenticated.js'
import { creatCheckoutSession, getAllPurchasedCourse, getCourseDetailWithPurchasedStatus, stripeWebhook } from '../controllers/coursePurchased.controller.js'
const router=express.Router()

router.route('/checkout/create-checkout-session').post(isAuthenticated,creatCheckoutSession)
router.route('/webhook').post(express.raw({type:'application/json'}),stripeWebhook)
router.route('/course/:courseId/details-with-status').get(isAuthenticated,getCourseDetailWithPurchasedStatus);
router.route('/').get(isAuthenticated,getAllPurchasedCourse)

export default router;