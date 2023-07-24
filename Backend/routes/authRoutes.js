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
  forgotPasswordToken,
  updatePassword,
  resetPassword,
  adminLogin,
  getWishlist,
  saveUserAddress,
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
router.post("/adminlogin",adminLogin)
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
