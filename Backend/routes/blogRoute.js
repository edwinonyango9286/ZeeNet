const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  dislikeTheBlog,
  uploadBlogImages,
} = require("../controllers/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImage");


//CREATE BLOG ADMIN
router.post("/create", authMiddleware, isAdmin, createBlog);
//UPLOAD BLOG IMAGE
router.put("/uploadblogimage/:id",authMiddleware,isAdmin,uploadPhoto.array("images",10),
blogImgResize,
uploadBlogImages)
//LIKE  A BLOG
router.put("/likeblog",authMiddleware,liketheBlog)
//DISLIKE BLOG
router.put("/dislikeblog",authMiddleware,dislikeTheBlog)
//UPDATE A BLOG ADMIN
router.put("/update/:id", authMiddleware, isAdmin, updateBlog);
//GET A SINGLE BLOG ALL USERS
router.get("/getBlog/:id", getBlog);
//GET ALL BLOGS ALL USERS
router.get("/getallblogs", getAllBlogs);
//DELETE A BLOG
router.delete("/deleteblog/:id", authMiddleware, isAdmin, deleteBlog);


module.exports = router;
