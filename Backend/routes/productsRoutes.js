const express = require("express");
const {
  createProdcut,
  getAllProduct,
  getaProduct,
  updateProduct,
  deleteProduct,
  createProduct,
  addToWishlist,
  rating,
  uploadImages,
} = require("../controllers/productsCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const uploadPhoto = require("../middlewares/uploadImages");
const router = express.Router();

//CREATE A NEW PRODUCT ADMIN
router.post("/create", authMiddleware, isAdmin, createProduct);
//UPLOAD PRODUCT IMAGE
router.put(
  "/uploadproductimage/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImageResize,
 uploadImages
);
//UPDATE PRODUCT DETAILS ADMIN
router.put("/update/:id", authMiddleware, isAdmin, updateProduct);
//ADD TO WISHLIST
router.put("/addtowishlist", authMiddleware, addToWishlist);
//PRODUCT RATING
router.put("/productrating", authMiddleware, rating);
//DELETE A PRODUCT ADMIN
router.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);
//GET A PRODUCT ALL USERS
router.get("/singleProduct/:id", getaProduct);
//GET ALL PRODUCTS ALL USERS
router.get("/allproducts", getAllProduct);

module.exports = router;
