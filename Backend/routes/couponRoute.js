const express = require("express");
const router = express.Router();
const {isAdmin ,authMiddleware}= require("../middlewares/authMiddleware");
const { createCoupon,updateCoupon,getAllCoupons,deleteCoupon,getACoupon} = require("../controllers/couponCtrl");

//CREATE A COUPON 
router.post("/createcoupon",authMiddleware,isAdmin,createCoupon)
//UPDATE A COUPON 
router.put("/updatecoupon/:id",authMiddleware,isAdmin,updateCoupon)
//DELETE A COUPON 
router.delete("/deleteacoupon/:id",authMiddleware,isAdmin,deleteCoupon)
//GET A SINGLE COUPON 
router.get("/getasinglecoupon/:id",authMiddleware,isAdmin,getACoupon);
//GET ALL COUPONS
router.get("/getallcoupons", authMiddleware,isAdmin,getAllCoupons);



module.exports = router;
