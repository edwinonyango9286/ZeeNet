const express = require("express");
const {createBlogCategory,updateBlogCategory,deleteBlogCategory,getABlogCategory,getAllBlogCartegories} = require("../controllers/blogCategorytCtrl")
const {isAdmin, authMiddleware} = require("../middlewares/authMiddleware");
const router = express.Router();

//CREATE BLOG CATEGORY ADMIN
router.post("/createblogcategory",authMiddleware,isAdmin,createBlogCategory);
//UPDATE BLOG CATEGORY ADMIN
router.put("/updateblogcategory/:id",authMiddleware,isAdmin,updateBlogCategory)
//DELETE PRODUCT CATEGORY ADMIN
router.delete("/deleteblogcategory/:id",authMiddleware,isAdmin,deleteBlogCategory)
//GET A SINGLE BLOG CATEGORY 
router.get("/singleblogcategory/:id",getABlogCategory);
//GET ALL BLOG CATEGORIES
router.get("/getallblogcategories",getAllBlogCartegories)

module.exports = router;