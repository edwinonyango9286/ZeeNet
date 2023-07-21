const ProductBrand = require("../models/productBrandModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId")


 const createProductBrand = asyncHandler( async(req,res)=>{
 try {
    const newProductBrand= await ProductBrand.create(req.body);
    res.json(newProductBrand)
 } catch (error) {
    
 }
 });

const updateProductBrand = asyncHandler(async(req,res)=>{
   const {id} = req.params;
   validateMongodbId(id)
   try {
      const updatedProductBrand = await ProductBrand.findByIdAndUpdate(id,req.body,{new:true});
      res.json(updatedProductBrand)
   } catch (error) {
      throw new Error(error)
   }
});

const deleteProductBrand= asyncHandler(async(req,res)=>{
      const {id} = req.params;
      validateMongodbId(id);
try {
   const deletedProductBrand  = await ProductBrand.findByIdAndDelete(id);
   res.json(deletedProductBrand);
} catch (error) {
   throw new Error(error)
}
});

 const getAProductBrand= asyncHandler(async(req,res)=>{
   const {id} = req.params;
   validateMongodbId(id);
   try {
      const getTheProductBrand = await ProductBrand.findById(id);
      res.json(getTheProductBrand)
   } catch (error) {
      throw new Error(error)
   }
 });

 const getAllProductBrands = asyncHandler(async(req,res)=>{

   try {
      const allProductBrands = await ProductBrand.find();
      res.json(allProductBrands)
   } catch (error) {
      throw new Error(error)
   }
 });


 module.exports = { createProductBrand,updateProductBrand,deleteProductBrand,getAProductBrand,getAllProductBrands};