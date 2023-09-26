const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUser,
  deleteAUsers,
  updateAUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  adminLogin,
  getWishlist,
  saveUserAddress,
  addToCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getOrderByUserId,
  getAllOrders,
} = require("../controllers/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token",resetPassword);
router.put("/update-password", authMiddleware,updatePassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login",adminLogin);
router.post("/addtocart",authMiddleware,addToCart);
router.get("/getusercart",authMiddleware,getUserCart);
router.post("/applycoupon",authMiddleware,applyCoupon);
router.post("/createorder",authMiddleware,createOrder);
router.get("/getuserorders",authMiddleware,getOrders);
router.put("/updateorderstatus",authMiddleware,isAdmin,updateOrderStatus)
router.get("/getorderbyuserid/:id",authMiddleware,isAdmin,getOrderByUserId);
router.get("/getallorders",authMiddleware,isAdmin,getAllOrders);
router.delete("/emptycart",authMiddleware,emptyCart);
router.get("/allUsers",getAllUsers);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/getuserwishlist",authMiddleware,getWishlist);
router.get("/:id", authMiddleware,getAUser);
router.delete("/delete/:id", authMiddleware,deleteAUsers);
router.put("/update/:id",authMiddleware, updateAUser);
router.put("/saveuseraddress",authMiddleware,saveUserAddress)
router.put("/block/:id", authMiddleware, isAdmin, blockUser);
router.put("/unBlock/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
