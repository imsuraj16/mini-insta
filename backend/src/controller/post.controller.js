const postModel = require('../models/post.model');
const generateCaption = require('../service/ai.service');
const uploadFile = require('../service/storage.service');





const createCaption = async (req, res) => {

    try {
        const { file } = req

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const base64ImageFile = file.buffer.toString('base64')
        const caption = await generateCaption(base64ImageFile)

        res.status(201).json({
            msg: "caption created successfully",
            caption,

        })
    } catch (error) {
        res.status(400).json({
            msg: "something went wrong"
        })
    }
}



const createPost = async (req, res) => {

    try {
        const { file } = req
        const { caption } = req.body

        if (!file) {
           return res.status(400).json({ error: 'No file uploaded' })
        }

           if (!caption) {
            return res.status(400).json({ error: 'Caption is required' });
        }

        const img = await uploadFile(file)
        const post = await postModel.create({
            image: img.url, caption: caption, user: req.user._id
        })

        res.status(201).json({
            msg: "post created successfully",
            post
        })
    } catch (error) {
        res.status(400).json({
            msg: "something went wrong"
        })
    }

}


const getPosts = async(req,res)=>{

    try {
        const posts = await postModel.find()
        res.status(200).json({
            msg: "posts fetched successfully",
            posts
        })
    } catch (error) {
        res.status(400).json({
            msg: "something went wrong"
        })
    }
   
}


const getUserPosts = async(req,res)=>{

    try {
        const posts = await postModel.find({user: req.user._id})
        res.status(200).json({
            msg: "posts fetched successfully",
            posts
        })
    } catch (error) {
        res.status(400).json({
            msg: "something went wrong"
        })
    }
    
}


module.exports = {
    createPost,
    createCaption,
    getPosts,
    getUserPosts
}