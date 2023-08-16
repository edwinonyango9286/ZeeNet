const  BlogCategory = require("../models/blogCategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId")


 const createBlogCategory = asyncHandler( async(req,res)=>{
 try {
    const newBlogCategory = await BlogCategory.create(req.body);
    res.json(newBlogCategory )
 } catch (error) {
    
 }
 });

const updateBlogCategory = asyncHandler(async(req,res)=>{
   const {id} = req.params;
   validateMongodbId(id)
   try {
      const updatedBlogCategory = await BlogCategory.findByIdAndUpdate(id,req.body,{new:true});
      res.json(updatedBlogCategory )
   } catch (error) {
      throw new Error(error)
   }
});

const deleteBlogCategory = asyncHandler(async(req,res)=>{
      const {id} = req.params;
      validateMongodbId(id);
try {
   const deletedBlogCategory  = await BlogCategory.findByIdAndDelete(id);
   res.json(deletedBlogCategory);
} catch (error) {
   throw new Error(error)
}
});

 const getABlogCategory = asyncHandler(async(req,res)=>{
   const {id} = req.params;
   validateMongodbId(id);
   try {
      const getTheBlogCategory = await BlogCategory.findById(id);
      res.json(getTheBlogCategory)
   } catch (error) {
      throw new Error(error)
   }
 });

 const getAllBlogCartegories = asyncHandler(async(req,res)=>{

   try {
      const allBlogCategories = await BlogCategory.find();
      res.json(allBlogCategories)
   } catch (error) {
      throw new Error(error)
   }
 });


 module.exports = {createBlogCategory,updateBlogCategory,deleteBlogCategory,getABlogCategory,getAllBlogCartegories};