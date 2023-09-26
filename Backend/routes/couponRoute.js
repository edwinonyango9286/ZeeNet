const express = require("express");
const router = express.Router();
const {isAdmin ,authMiddleware}= require("../middlewares/authMiddleware");
const { createCoupon,updateCoupon,getAllCoupons,deleteCoupon,getACoupon} = require("../controllers/couponCtrl");

router.post("/createcoupon",authMiddleware,isAdmin,createCoupon)
router.put("/updatecoupon/:id",authMiddleware,isAdmin,updateCoupon)
router.delete("/deleteacoupon/:id",authMiddleware,isAdmin,deleteCoupon)
router.get("/getasinglecoupon/:id",authMiddleware,isAdmin,getACoupon);
router.get("/getallcoupons", authMiddleware,isAdmin,getAllCoupons);



module.exports = router;
