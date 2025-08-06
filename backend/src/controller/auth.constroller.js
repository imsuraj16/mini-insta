const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    try {

        const { username, password } = req.body

        const existingUser = await userModel.findOne({
            username
        })

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const newUser = await userModel.create({
            username, password: await bcrypt.hash(password, 10)

        })

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
        res.cookie("token", token)

        res.status(201).json({
            message: "User created successfully",
            newUser
        })

    } catch (error) {
        console.error("Error creating user", error)

        if (error.code === 11000) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

    }


}


const loginUser = async (req, res) => {

    try {

        const { username, password } = req.body

        const user = await userModel.findOne({
            username
        })

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Invalid password"
            })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.cookie("token", token)

        res.status(201).json({
            msg: 'user logged in successfully',
            user
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }


}



module.exports = {
    registerUser, loginUser
}