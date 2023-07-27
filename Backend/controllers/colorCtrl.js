const  Color = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../utils/validateMongodbId");

const createColor = asyncHandler(async(req,res)=>{
    try {
        const newColor = await Color.create(req.body);
        res.json(newColor);
    } catch (error) {
        throw new Error(error);
    }
});

const updateColor = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongodbId(id);

    try {
        const updatedcolor = await Color.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updatedcolor);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteColor = asyncHandler(async(req,res)=>{
    const{id} = req.params;
    validateMongodbId(id);

    try {
        const deletedColor = await Color.findByIdAndDelete(id);
        res.json(deletedColor);
    } catch (error) {
        throw new Error(error)
    }
});

const getAColor = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const getacolor = await Color.findById(id)
        res.json(getacolor);
    } catch (error) {
        throw new Error(error)
    };
});


const getAllColors= asyncHandler(async(req,res)=>{
    try {
        const getallcolor = await Color.find();
        res.json(getallcolor)
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = {createColor,updateColor,deleteColor,getAColor,getAllColors};

