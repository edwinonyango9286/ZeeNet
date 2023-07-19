 const express = require("express");
 const router = express.Router();
const {createBlog,updateBlog, getBlog }= require("../controllers/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

 router.post("/create",authMiddleware, isAdmin,createBlog);
 router.put("/update/:id",authMiddleware,isAdmin,updateBlog);
 router.get("/getBlog/:id",getBlog)



module.exports = router;

