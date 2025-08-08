const ImageKit = require("imagekit");
const mongoose = require("mongoose");

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLICKEY,
    privateKey : process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});


const uploadFile = (file)=>{

    return new Promise((resolve,reject)=>{
        imagekit.upload({
            file : file.buffer,
            fileName : new mongoose.Types.ObjectId().toString(),
            folder : "images"
        },(err,res)=>{
            if(res){
                resolve(res)
            }else{
                reject(err)
            }
        })
    })
}


module.exports = uploadFile