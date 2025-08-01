const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')
const multer = require('multer')
const { createPostController, getAllPostsController } = require('../controller/post.controller')

const upload = multer({storage:multer.memoryStorage()})

//this route iis protetced we used custom middleware==>authMiddleware =>in this we verify the token and take actions and this is route level middleware 
// yaha p image file denge 
router.post('/',upload.single("image") ,authMiddleware,createPostController)

router.get('/posts',authMiddleware,getAllPostsController)



module.exports = router