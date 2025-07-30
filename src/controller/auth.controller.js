const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');



const registerUser = async (req, res) => {

    const { username, password } = req.body;

    const user = await userModel.findOne({
        username
    })

    if (user) {
        return res.status(400).json({
            msg: 'User already exists'
        })
    }

    const newUser = await userModel.create({
        username, password: await bcrypt.hash(password, 10)
    })

    const token = jwt.sign({ id: newUser._id, }, process.env.JWT_SECRET)
    res.cookie("token", token)

    res.status(201).json({
        msg: 'User created successfully',
        newUser
    })

}


const loginUser = async (req, res) => {

    const { username, password } = req.body

    const user = await userModel.findOne({
        username
    })

    if (!user) {
        return res.status(402).json({
            msg: "username not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(400).json({
            msg: "invalid password"
        })
    }

    const token = jwt.sign({id : user._id},process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(201).json({
        msg : "user logged in successfully"
    })
}

module.exports = {
    registerUser,
    loginUser
}