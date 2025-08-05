const mongoose = require('mongoose')



const connectDB = ()=>{

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('db connected');
        
    }).catch(()=>{
        console.log('db not connected');
        
    })
}

module.exports = connectDB