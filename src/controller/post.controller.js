const postModel = require('../models/post.model')
const generateCaption = require('../service/ai.service')
const uploadFile = require('../service/storage.service')



const createPostController = async (req, res) => {

    const { file } = req
    const base64ImageFile = file.buffer.toString('base64')
    const caption = await generateCaption(base64ImageFile)

    if (!base64ImageFile) {
        return res.status(400).json({
            message: "Please upload an image"
        })
    }

    const image = await uploadFile(file)

    const post = await postModel.create({
        image: image.url,
        caption: caption,
        user: req.user._id
    })

    res.status(200).json({
        post
    })

}

const getAllPostsController = async (req, res) => {

    const posts = await postModel.find()
    res.json(posts)
}

module.exports = {
    createPostController,
    getAllPostsController
}