const express = require("express");
const {createProductBrand, updateProductBrand, deleteProductBrand, getAProductBrand, getAllProductBrands} = require("../controllers/productBrandCtrl")
const {isAdmin, authMiddleware} = require("../middlewares/authMiddleware");
const router = express.Router();

//CREATE PRODUCT BRAND ADMIN
router.post("/createproductbrand",authMiddleware,isAdmin,createProductBrand);
//UPDATE PRODUCT BRAND ADMIN
router.put("/updateproductbrand/:id",authMiddleware,isAdmin,updateProductBrand)
//DELETE PRODUCT BRAND ADMIN
router.delete("/deleteproductbrand/:id",authMiddleware,isAdmin,deleteProductBrand)
//GET A SINGLE BRAND CATEGORY 
router.get("/getasingleproductbrand/:id",getAProductBrand);
//GET ALL PRODUCT BRANDS
router.get("/getallproductbrands",getAllProductBrands)

module.exports = router;