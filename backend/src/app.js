const express = require('express')
const authRoutes = require('./routes/auth.routes')
const cors = require('cors')


const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials : true
}))
app.use(express.json())
app.use('/api/auth', authRoutes)





module.exports = app