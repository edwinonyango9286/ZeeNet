const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const validateMongodbId = require("../utils/validateMongodbId");
const { findByIdAndDelete } = require("../models/blogModel");

// CREATE A BLOG
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json({
      status: "success",
      newBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// UPDATE A BLOG
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      updateBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getBlog = await Blog.findById(id);
    const updateViews = await Blog.findByIdAndUpdate(
      id,
      { $inc: { numViews: 1 } },
      { new: true }
    );
    res.json(updateViews);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getAllBlogs = await Blog.find();
    res.json(getAllBlogs);
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
  // Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);
  // find the login user
  const loginUserId = req?.user?._id;
  // find if the user has liked the blog
  const isLiked = blog?.isLiked;
  // find if the user has disliked the blog
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
//FIND THE BLOG TO BE DISLIKED 
const blog = await Blog.findById(blogId);
//FIND THE LOGIN USER
const loginUserId = req?.user?._id;
//FIND IF THE  USER HAS DISLIKED THE BLOG
 const isDisliked = blog?.isDisliked;
 //FIND IF THE USER HAS LIKED THE BLOG
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

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  dislikeTheBlog,
};
