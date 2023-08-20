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

//USER REGISTER
router.post("/register", createUser);
//USER REGISTER
router.post("/forgot-password-token", forgotPasswordToken);
//USER REGISTER
router.put("/reset-password/:token",resetPassword);
//USER REGISTER
router.put("/update-password", authMiddleware,updatePassword);
//USER LOGSIN 
router.post("/login", loginUserCtrl);
// LOGIN ADMIN
router.post("/admin-login",adminLogin);
//USER CART
router.post("/addtocart",authMiddleware,addToCart);
//GET USER CART
router.get("/getusercart",authMiddleware,getUserCart);
//APPLY COUPON
router.post("/applycoupon",authMiddleware,applyCoupon);
//CREATE ORDER
router.post("/createorder",authMiddleware,createOrder);
//GET USER ORDERS 
router.get("/getuserorders",authMiddleware,getOrders);
//UPDATE ORDER STATUS
router.put("/updateorderstatus",authMiddleware,isAdmin,updateOrderStatus)
//GET ORDER BY USER ID
router.get("/getorderbyuserid/:id",authMiddleware,isAdmin,getOrderByUserId);
router.get("/getallorders",authMiddleware,isAdmin,getAllOrders);
//EMPTY CART
router.delete("/emptycart",authMiddleware,emptyCart);
//ADMIN VIEWS ALL USERS
router.get("/allUsers", authMiddleware,isAdmin,getAllUsers);
//HANDLE REFRESH TOKEN
router.get("/refresh", handleRefreshToken);
//USER LOGS OUT
router.get("/logout", logout);
//GET USER WISHLIST
router.get("/getuserwishlist",authMiddleware,getWishlist);
//GET A SINGLE USER
router.get("/:id", authMiddleware,getAUser);
//DELETE
router.delete("/delete/:id", authMiddleware, deleteAUsers);
//UPDATE USER
router.put("/update/:id",authMiddleware, updateAUser);
//SAVE USER ADRESS 
router.put("/saveuseraddress",authMiddleware,saveUserAddress)
//ADMIN BLOCK USER
router.put("/block/:id", authMiddleware, isAdmin, blockUser);
//ADMIN UNBLOCK USER
router.put("/unBlock/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
