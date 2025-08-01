const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')


const authMiddleware = async (req, res, next) => {

    const { token } = req.cookies

    if (!token) {
        return res.status(401).json({
            msg: "unauthorized access please login again"
        })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = userModel.findOne({
            _id: decoded.id
        })

        req.user = user  //login user ka data req.user m set krenge
        next()

    } catch (error) {
        res.status(401).json({
            msg: 'invalid access please login again'
        })
    }
}


module.exports = authMiddleware