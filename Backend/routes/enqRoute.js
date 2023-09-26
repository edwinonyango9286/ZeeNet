const express = require("express");
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getanEnquiry,
  getAllEquiries,
} = require("../controllers/enqCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/createenquiry", createEnquiry);
router.put("/updateanenquiry/:id", authMiddleware, isAdmin, updateEnquiry);
router.delete("/deleteanenquiry/:id", authMiddleware, isAdmin, deleteEnquiry);
router.get("/getanenquiry/:id", getanEnquiry);
router.get("/getallenquiries", getAllEquiries);

module.exports = router;
