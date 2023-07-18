const express = require("express");
const { createProdcut, getAllProduct, getaProduct, updateProduct, deleteProduct, createProduct } = require("../controllers/productsCtrl");
const {isAdmin,authMiddleware} = require("../middlewares/authMiddleware")

const router = express.Router();
//CREATE A NEW PRODUCT ADMIN
router.post("/create",authMiddleware, isAdmin,createProduct);
//UPDATE PRODUCT DETAILS ADMIN
router.put("/update/:id",authMiddleware,isAdmin,updateProduct);
//DELETE A PRODUCT ADMIN
router.delete("/delete/:id",authMiddleware,isAdmin,deleteProduct);
//GET A PRODUCT ALL USERS
router.get("/singleProduct/:id", getaProduct);
//GET ALL PRODUCTS ALL USERS
router.get("/allproducts", getAllProduct)


module.exports = router;


