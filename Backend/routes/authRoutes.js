const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUsers,
  deleteAUsers,
  updateAUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logout,
  forgotPasswordToken,
  updatePassword,
  resetPassword,
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
//ADMIN VIEWS ALL USERS
router.get("/allUsers", authMiddleware,isAdmin,getAllUsers);
//HANDLE REFRESH TOKEN
router.get("/refresh", handleRefreshToken);
//USER LOGS OUT
router.get("/logout", logout);
//GET A SINGLE USER
router.get("/:id", authMiddleware,getAUsers);
//DELETE
router.delete("/delete/:id", authMiddleware, deleteAUsers);
//UPDATE USER
router.put("/update/:id", authMiddleware, updateAUser);
//ADMIN BLOCK USER
router.put("/block/:id", authMiddleware, isAdmin, blockUser);
//ADMIN UNBLOCK USER
router.put("/unBlock/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
