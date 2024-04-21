const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUser,
  deleteAUser,
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
router.put("/reset-password/:token", resetPassword);
router.put("/update-password", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", adminLogin);
router.post("/addtocart", authMiddleware, addToCart);
router.get("/getusercart", authMiddleware, getUserCart);
router.post("/addtocart/applycoupon", authMiddleware, applyCoupon);
router.post("/createorder", authMiddleware, createOrder);
router.get("/getuserorders", authMiddleware, getOrders);
router.put("/updateorderstatus", authMiddleware, isAdmin, updateOrderStatus);
router.get("/getorderbyuserid/:id", authMiddleware, isAdmin, getOrderByUserId);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.delete("/emptycart", authMiddleware, emptyCart);
router.get("/getallUsers", authMiddleware,isAdmin,getAllUsers);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/:id", authMiddleware, getAUser);
router.delete("/delete/:id", authMiddleware, deleteAUser);
router.put("/update-user/:id", authMiddleware, updateAUser);
router.put("/save-address", authMiddleware, saveUserAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;











