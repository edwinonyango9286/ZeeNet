const express = require("express");
const {createColor, deleteColor, getAColor, getAllColors, updateColor} = require("../controllers/colorCtrl");


const {isAdmin,authMiddleware}= require("../middlewares/authMiddleware");
const router = express.Router();
//CREATE COLOR
router.post("/createcolor",authMiddleware,isAdmin,createColor);
//UPDATE COLOR
router.put("/updateacolor/:id",authMiddleware,isAdmin,updateColor);
//DELETE COLOR
router.delete("/deletecolor/:id",authMiddleware,isAdmin,deleteColor);
//GET A COLOR 
router.get("/getacolor/:id",getAColor);

//GET ALL COLOS
router.get("/getallcolors",getAllColors);


module.exports =router;



