const express = require("express");
const {createColor, deleteColor, getAColor, getAllColors, updateColor} = require("../controllers/colorCtrl");


const {isAdmin,authMiddleware}= require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/createcolor",authMiddleware,isAdmin,createColor);
router.put("/updateacolor/:id",authMiddleware,isAdmin,updateColor);
router.delete("/deletecolor/:id",authMiddleware,isAdmin,deleteColor);
router.get("/getacolor/:id",getAColor);
router.get("/getallcolors",getAllColors);


module.exports =router;



