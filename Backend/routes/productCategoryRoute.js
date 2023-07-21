const express = require("express");
const {createProductCategory, updateProductCategory, deleteProductCategory, getAProductCategory, getAllProductCartegories} = require("../controllers/productCategoryCtrl")
const {isAdmin, authMiddleware} = require("../middlewares/authMiddleware");
const router = express.Router();

//CREATE PRODUCT CATEGORY  ADMIN
router.post("/createproductcategory",authMiddleware,isAdmin,createProductCategory);
//UPDATE PRODUCT CATEGORY ADMIN
router.put("/updateproductcategory/:id",authMiddleware,isAdmin,updateProductCategory)
//DELETE PRODUCT CATEGORY ADMIN
router.delete("/deleteproductcategory/:id",authMiddleware,isAdmin,deleteProductCategory)
//GET A SINGLE PRODUCT CATEGORY 
router.get("/singleproductcategory/:id",getAProductCategory);
//GET ALL PRODUCT CATEGORIES
router.get("/getallproductcategories",getAllProductCartegories)

module.exports = router;