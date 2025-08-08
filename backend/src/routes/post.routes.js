const express = require('express');
const router = express.Router()
const authMiddleware = require('../middleware/auth.middleware')
const multer = require('multer')
const { createPost, createCaption,getPosts, getUserPosts } = require('../controller/post.controller')

const upload = multer({ storage: multer.memoryStorage() })


router.post('/caption', authMiddleware, upload.single('image'), createCaption)
router.post('/', authMiddleware, upload.single('image'), createPost)
router.get('/posts',authMiddleware,getPosts)
router.get('/me',authMiddleware,getUserPosts)



module.exports = router