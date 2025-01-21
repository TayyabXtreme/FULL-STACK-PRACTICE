import express from 'express'

import isAuthenticated from '../middlewares/isAuthenticated.js'
import { createCorse, createLecture, deleteCourse, editCourse, editLecture, getCourseById, getCourseLecture, getCreatorCourses, getLectureById, getPublishedCourse, removeLecture, togglePublishCourse } from '../controllers/course.controller.js'
import upload from '../utils/multer.js'

const router=express.Router()

router.route('/').post(isAuthenticated,createCorse)
router.route('/').get(isAuthenticated,getCreatorCourses)
router.route('/published-courses').get(isAuthenticated,getPublishedCourse)
router.route('/:courseId').get(isAuthenticated,getCourseById)
router.route('/:courseId').delete(isAuthenticated,deleteCourse)
router.route('/:courseId').put(isAuthenticated,upload.single('courseThumbnail'),editCourse)
router.route('/:courseId/lecture').post(isAuthenticated,createLecture)
router.route('/:courseId/lecture').get(isAuthenticated,getCourseLecture)
router.route('/:courseId/lecture/:lectureId').put(isAuthenticated,editLecture)
router.route('/lecture/:lectureId').delete(isAuthenticated,removeLecture)
router.route('/lecture/:lectureId').get(isAuthenticated,getLectureById)
router.route('/:courseId').patch(isAuthenticated,togglePublishCourse)

export default router