import express from 'express'
import { createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todo.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
const router=express.Router()


router.route('/createTodo').post(isAuthenticated,createTodo)
router.route('/getTodo').get(getTodo)
router.route('/:todoId').put(isAuthenticated,updateTodo).delete(isAuthenticated,deleteTodo)



export default router;
