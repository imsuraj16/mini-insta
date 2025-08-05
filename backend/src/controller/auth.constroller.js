const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async(req, res) => {

    const {username,password } = req.body

    const existingUser = await userModel.findOne({
        username
    })

    if(existingUser){
        res.status(400).json({
            message: "User already exists"
        })
    }

    const newUser = await userModel.create({
        username,password:await bcrypt.hash(password,10)

    })

    const token = jwt.sign({id : newUser._id},process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(201).json({
        message: "User created successfully",
        newUser
    })
}


module.exports = {
    registerUser
}