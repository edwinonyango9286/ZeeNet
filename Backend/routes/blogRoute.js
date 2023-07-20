 const { Router } = require("express");
const express = require("express");
 const router = express.Router();
const {createBlog,updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog }= require("../controllers/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
//CREATE BLOG ADMIN
 router.post("/create",authMiddleware, isAdmin,createBlog);
 //UPDATE A BLOG ADMIN
 router.put("/update/:id",authMiddleware,isAdmin,updateBlog);
 //GET A SINGLE BLOG ALL USERS
 router.get("/getBlog/:id",getBlog)
//GET ALL BLOGS ALL USERS
 router.get("/getallblogs",getAllBlogs)
 //DELETE A BLOG
 router.delete("/deleteblog/:id",authMiddleware,isAdmin, deleteBlog)
 //LIKE BLOG
 router.post("/likeblog",authMiddleware,likeBlog)



module.exports = router;

