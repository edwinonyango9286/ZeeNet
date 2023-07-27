const express = require("express");
 const {createEnquiry, updateEnquiry, deleteEnquiry, getanEnquiry, getAllEquiries} = require("../controllers/enquiryCtrl");

 const {authMiddleware,isAdmin} = require("../middlewares/authMiddleware")

 const router = express.Router();




 //CREATE AN ENQUIRY
 router.post("/createenquiry",createEnquiry);
//UPDATE AN ENQUIRY
router.put("/updateanenquiry/:id",authMiddleware,isAdmin,updateEnquiry);
//DELETE AN ENQUIRY
router.delete("/deleteanenquiry/:id",authMiddleware,isAdmin,deleteEnquiry);
//GET AN ENQUIRY 
router.get("/getanenquiry/:id",getanEnquiry);
//GET ALL ENQUIRIES
router.get("/getallenquiries",getAllEquiries);


 module.exports = router;