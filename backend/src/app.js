const express = require('express')
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.route')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const postRoutes = require('./routes/post.routes')




const app = express()
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials : true
}))
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/user',userRoutes)
app.use('/api/post',postRoutes)





module.exports = app