const multer = require("multer");
const sharp = require("sharp");
const path = require("path");


const multerStorage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../public/images/"));
    },
    filename:function(req,file,cb){
        const uniquesuffix = Date.now() +"-"+Math.round(Math.random()*1e9);
        cb(null,file.fieldname + "-"+uniquesuffix+".jpeg");  
    },
});


const multerFilter = (req,file,cb)=>{
    if(file.mimetype.startsWith("image")){
        cb(null,true);
    }else{
        cb({
            message:"Unsupported file format"
        },false)
    };
};


const uploadPhoto = multer({
    storage:multerStorage,
    filter:multerFilter,
    limits:{fileSize:2000000},
});


const productImageResize = async(req,res,next)=>{
    if(!req.files) return next();
    await Promise.all(
        req.files.map(async(file)=>{
            await sharp(file.path)
            .resize(300,300)
            .toFormat("jpeg")
            .jpeg({quality:90})
            .toFile(`public/images/products/${filename}`);
            fstat.unlinkSync(`public/images/products/${filename}`);
        })
    );
    next();
};


const blogImageResize = async(req,res,next)=>{
    if(!req.files) return next();
    await Promise.all(
        req,files.map(async(file)=>{
            await sharp(file.path)
            .resize(300.300)
            toFormat("jpeg")
            .toFile(`public/images/blogs/${file.filename}`);
            fs.unlikesync(`public/images/blogs/${file.filename}`)
        })
    )
}


module.exports = {uploadPhoto,productImageResize,blogImageResize};