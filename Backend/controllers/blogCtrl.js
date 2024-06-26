const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const validateMongodbId = require("../utils/validateMongodbId");
const cloudinaryUploadingImg = require("../utils/cloudinary");
const fs = require("fs")

const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(
      updatedBlog,
    );
  } catch (error) {
    throw new Error(error);
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getBlog = await Blog.findById(id)
    .populate("likes")
    .populate("dislikes")

    const updateViews = await Blog.findByIdAndUpdate(
      id,
      { $inc: { numViews: 1 },
     },
      { new: true }
    );
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await Blog.find();
    res.json(getBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json(deletedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

const liketheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongodbId(blogId);
  const blog = await Blog.findById(blogId);
  const loginUserId = req?.user?._id;
  const isLiked = blog?.isLiked;
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

const dislikeTheBlog = asyncHandler(async(req,res)=>{
const {blogId} = req.body;
validateMongodbId(blogId);
const blog = await Blog.findById(blogId);
const loginUserId = req?.user?._id;
 const isDisliked = blog?.isDisliked;
 const alreadyLiked = blog?.likes?.find(
  (userId)=> userId?.toString() === loginUserId?.toString()
 );
 if(alreadyLiked){
  const blog = await blog.findByIdAndUpdate(
    blogId,{

      $pull:{likes:loginUserId},
      isLiked:false,
    },
    {new:true}
  );
  res.json(blog);
 }
 if(isDisliked){
  const blog = await Blog.findByIdAndUpdate(
    blogId,{
      $pull:{dislikes:loginUserId},
      isDisliked:false
    },
    {new:true}
  );
  res.json(blog)
 }else{
  const blog = await Blog.findByIdAndUpdate(
    blogId,{
      $push:{dislikes:loginUserId},
      isDisliked:true,
    },
    {new:true}
  );
  res.json(blog);
 }
});

const uploadBlogImages = asyncHandler(async(req,res)=>{
  const {id} = req.params;
  validateMongodbId(id);
  try {
    const uploader = (path)=>cloudinaryUploadingImg(path,"images");
    const urls=[];
    const files =req.files;
    for(const file of files ){
      const {path} =file;
      const newPath = await uploader(path);
      urls.push(newPath);  
      fs.unlinkSync("path")
    }
    const findBlog = await Blog.findByIdAndUpdate(id,{
      images:urls.map((file)=>{
        return file;
      })
    },{
      new:true,
    })
    res.json(findBlog)
  } catch (error) {
    throw new Error(error)
  }
});

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  dislikeTheBlog,
  uploadBlogImages
};
