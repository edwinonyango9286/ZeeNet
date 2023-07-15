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
} = require("../controllers/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

//user register
router.post("/register", createUser);
//user login
router.post("/login", loginUserCtrl);
//get all users
router.get("/allUsers", getAllUsers);
//handle refresh token
router.get("/refresh", handleRefreshToken);
//user log out
router.get("/logout", logout);
//get a single user
router.get("/:id", authMiddleware, isAdmin, getAUsers);
//delete a user by id
router.delete("/delete/:id", deleteAUsers);
//update a user
router.put("/update/:id", authMiddleware, updateAUser);
//admin block a user
router.put("/block/:id", authMiddleware, isAdmin, blockUser);
//admin unblock a user
router.put("/unBlock/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
