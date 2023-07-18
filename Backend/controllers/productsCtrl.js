
const { query } = require("express");
const Product = require("../models/productsModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

//CREATE A NEW PRODUCT ADMIN
const createProduct = asyncHandler(async (req, res) => {

 
     try {
          if (req.body.title) {
               req.body.slug = slugify(req.body.title)
          }
          const newProduct = await Product.create(req.body);
          res.json(newProduct)
    
     } catch (error) {
    
          throw new Error(error);
     }

});
//UPDATE PRODUCT DETAILS ADMIN
const updateProduct = asyncHandler(async (req,res) => {
     const { id } = req.params;
     try {
          if (req.body.title) {
               req.body.slug = slugify(req.body.title);
          }

          const updateProduct = await Product.findByIdAndUpdate( id , req.body, { new: true })
          res.json(updateProduct)
          
     } catch (error) {
          throw new Error(error)
     }

})

//DELETE A PRODUCT ADMIN
const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProduct = await Product.findOneAndDelete(id);
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//GET A PRODUCT
const getaProduct = asyncHandler(async (req, res) => {
     const { id } = req.params
     try {
          const findProduct = await Product.findById(id);
          res.json(findProduct)    
     } catch (error) {
          throw new Error(error)
     }  
});

//GET ALL PRODUCTS

const getAllProduct = asyncHandler(async (req, res) => {
     try {
          //FILTERING
          const queryObj = { ...req.query };
          const excludeFields = ["page", "sort", "limit", "fields"];
          excludeFields.forEach((el) => delete queryObj[el]);
          let queryStr = JSON.stringify(queryObj);
           queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

          let query = Product.find(JSON.parse(queryStr)) 

          //SORTING
          if (req.query.sort) {
               const sortBy = req.query.sort.split("").join("");
               query = query.sort(sortBy)
               
          } else {
               query = query.sort("-createdAt");
          }

     //LIMITING FIELDS
          
          if (req.query.fields) {
               const fields = req.query.fields.split(",").join(" ");
               query =query.select(fields) 
          } else {
               query =query.select("-__V")
          }

          //PAGINATION
         const page = req.query.page;
         const limit = req.query.limit;
         const skip = (page - 1) * limit;
         query = query.skip(skip).limit(limit);
         if (req.query.page) {
           const productCount = await Product.countDocuments();
           if (skip >= productCount)
             throw new Error("This Page does not exists");
         }
          

          const product = await query;
          res.json(product);
          
     } catch (error) {
         throw new Error(error)
     }
})

module.exports = { createProduct, getAllProduct, getaProduct,updateProduct,deleteProduct};