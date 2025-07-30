const mongoose = require('mongoose');




function connectDB() {

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('db connected');
        
    })
}


module.exports = connectDB;