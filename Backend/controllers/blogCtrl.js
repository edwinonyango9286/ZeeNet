const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const validateMongodbId = require("../utils/validateMongodbId");

// CREATE A BLOG
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json({
      status: "success",
      newBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// UPDATE A BLOG
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    res.json({
      updateBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});


const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const getBlog = await Blog.findById(id);
      const updateViews =  await Blog.findByIdAndUpdate(id,
        {$inc:{numViews:1}  },
      {new:true}
      );
      res.json(updateViews);
    } catch (error) {
      throw new Error(error);
    }
  });


module.exports = { createBlog, updateBlog,getBlog };
