const express = require("express");
const {createColor, deleteColor, getAColor, getAllColors, updateColor} = require("../controllers/colorCtrl");


const {isAdmin,authMiddleware}= require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/create",authMiddleware,isAdmin,createColor);
router.put("/update/:id",authMiddleware,isAdmin,updateColor);
router.delete("/delete/:id",authMiddleware,isAdmin,deleteColor);
router.get("/get/:id",getAColor);
router.get("/getall",getAllColors);


module.exports =router;



