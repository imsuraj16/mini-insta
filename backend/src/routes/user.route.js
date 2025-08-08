const express = require('express');
const userModel = require('../models/user.model')
const authMiddleware = require('../middleware/auth.middleware')

const router = express.Router()


router.get('/me',authMiddleware, async (req, res) => {

    const user = await userModel.findOne({
        _id: req.user._id,
        username: req.user.username
    }).select('-password -__v')

    res.json(user)
})

router.get('/logout',async(req,res)=>{
    res.clearCookie('token')
    res.json({
        message: 'logged out successfully'
    })
})

module.exports = router