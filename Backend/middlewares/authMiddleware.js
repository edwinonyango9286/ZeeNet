const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

//AUTHENTICATION MIDDLEWARE FUNCTIONALITY
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorised Token Expired,login in again");
    }
  } else {
    throw new Error("There is no token attached to the header");
  }
});

//ADMIN MIDDLEWARE FUNCTIONALITY
const isAdmin = asyncHandler(async (req, res, next) => {
    const { email } = req.user;
    const adminUser = await User.findOne({ email });
    if (adminUser.role !== "admin") {
        throw new Error("Not an Admin ")
    } else {
        next();
    }
    
})

module.exports = {authMiddleware,isAdmin};
