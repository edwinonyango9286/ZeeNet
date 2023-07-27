const User = require("../models/userModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const Coupon = require("../models/couponModel");
const Order = require("../models/orderModel");
const uniqid = require("uniqid");


const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateMongodbId = require("../utils/validateMongodbId");
const generateRefreshToken = require("../config/refreshToken");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendEmail = require("../controllers/emailCtrl");


// CHECK IF USER EXIST AND IF NOT CREATES A NEW USER
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});


// USER LOGS IN WITH AN EMAIL AND  A PASSWORD AND A TOKEN GENERATED FOR THE USER
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //CHECKS IF A USER EXISTS IN THE DB
  const findUser = await User.findOne({ email });

  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateuser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid credentials");
  }
});

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findAdmin = await User.findOne({ email });
  if (findAdmin.role !== "admin") throw new Error("Not Authorised");
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findAdmin?._id);
    const updateuser = await User.findByIdAndUpdate(
      findAdmin.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin?._id,
      firstname: findAdmin?.firstname,
      lastname: findAdmin?.lastname,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateToken(findAdmin?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

//HANDLE THE REFRESH TOKEN

const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error(" No Refresh token present in db or not matched");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});

//LOGOUT FUNCTIONALITY

const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // FORBIDDEN REQUEST
  }
  await User.findOneAndUpdate(
    { refreshToken },
    {
      refreshToken: "",
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204); // FORBIDDEN REQUEST
});

//UPDATE USER ADMIN AND USERS

const updateAUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongodbId(id);
  try {
    const updateAUser = await User.findByIdAndUpdate(
      id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json({
      updateAUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const saveUserAddress = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongodbId(_id);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { address: req?.body?.address },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

//GET ALL USERS
const getAllUsers = asyncHandler(async (req, res) => 

{
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

//GET A SINGLE USER

const getAUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const getAUsers = await User.findById(id);
    res.json({
      getAUsers,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//DELETE A USER
const deleteAUsers = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const deleteAUsers = await User.findByIdAndDelete(id);
    res.json({
      deleteAUsers,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//ADMIN BLOCK A USER FUNCTIONALITY
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const block = User.findByIdAndUpdate(
      { id },
      {
        isBlocked: true,
      },
      { new: true }
    );
    res.json({
      message: "User Blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

//ADMIN UNBLOCKS A USER FUNCTIONALITY
const unBlockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const unblock = User.findByIdAndUpdate(
      { id },
      {
        isBlocked: false,
      },
      { new: true }
    );
    res.json({
      message: "User Unblocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongodbId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User With This Email Not Found ");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:8000/api/user/reset-password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      htm: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  console.log();
  if (!user) throw new Error(" Token Expired, Please try again later");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});

const getWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  try {
    const findUser = await User.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});



const addToCart = asyncHandler(async (req, res) => {

  const { cart } = req.body;
  const { _id } = req.user;
  validateMongodbId(_id);

  try {
    let products = [];
    const user = await User.findById(_id);

    // check if user already have product in cart
    const alreadyExistCart = await Cart.findOne({ orderby: user._id });
    if (alreadyExistCart) {
      alreadyExistCart.remove();
    }
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
      object.count = cart[i].count;
      object.color = cart[i].color;

      //NOT ABLE TO GET THE PRICE FROM THE DB WITH REFERENCE TO THE PRODUCT ID AND ADD IT TO CART
      let getPrice = await Product.findById(cart[i]._id).select('price').exec();
      object.price = getPrice.price;
      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    let newCart = await new Cart({
      products,
      cartTotal,
      orderby: user?._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
 });

 const getUserCart = asyncHandler(async(req,res)=>{
  const {_id} = req.user;
  validateMongodbId(_id);
  try {
    const cart = await Cart.findOne({orderby:_id}).populate("products.product");
    res.json(cart);
  } catch (error) {
    throw new Error(error) 
  }
 });

 const emptyCart = asyncHandler(async(req,res)=>{
  const {_id} = req.user;
  validateMongodbId(_id);
  try {
    const user = await User.findOne({_id});
    const cart = await Cart.findOneAndRemove({orderby:user._id});
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
 });

 const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  validateMongodbId(_id);
  const validCoupon = await Coupon.findOne({ name: coupon });
  if (validCoupon === null) {
    throw new Error("Invalid Coupon");
  }
  const user = await User.findOne({ _id });
  let { cartTotal } = await Cart.findOne({
    orderby: user._id,
  }).populate("products.product");
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validCoupon.discount) / 100
  ).toFixed(2);
  await Cart.findOneAndUpdate(
    { orderby: user._id },
    { totalAfterDiscount },
    { new: true }
  );
  res.json(totalAfterDiscount);
});

//CREATE CASH ORDER
const createOrder = asyncHandler(async(req,res)=>{
  const {COD,couponApplied} = req.body;
  const {_id} = req.user;
  validateMongodbId(_id);
  try {
    if(!COD) throw new Error("create Cash order failed");
    const user= await  Cart.find(_id);
    let userCart =await Cart.findOne({orderby:user._id});
    let finalAmount = 0;
    if(couponApplied && userCart.totalAfterDiscount){
      finalAmount= userCart.totalAfterDiscount;
    }else{
      finalAmount= userCart.cartTotal;
    }

    let newOrder = await new order({
      products:userCart.products,
      paymentItent:{
        id:uniqid(),
        method:"COD",
        amount:finalAmount,
        status:"Cash on Delivery",
        created:Date.now(),
        currency:"ksh",
      },
      orderby:user.Id,
      orderStatus:"Cash On Delivery",
    }).save();

    let update =userCart.products.map((item)=>{
      return{
        updateOne:{
          filter:{_id:item.product._id},
          update:{sinc:{quality:-item.count,sold:+item.count}},
        }
      }
    });
    const updated = await Product.bulkWrite(update,{});
    res.json({message:"success"});
  } catch (error) {   
  }
});

const getOrders = asyncHandler(async(req,res)=>{
  const {_id} = req.user;
  validateMongodbId(_id);
  try {
    const userorders = await Order.findOne({orderby:_id}).populate("product.product").populate("orderby").exec();
    res.json (userorders)
  } catch (error) {
     throw new Error(error)
  }
});

const getAllOrders = asyncHandler(async(req,res)=>{

  try {
    const alluserorders = await User.find().populate("products:product").populate("orderby").exec();
    res.json(alluserorders);
  } catch (error) {
    throw new Error(error);
  }

});


const getOrderByUserId = asyncHandler(async(req,res)=>{
  const {id} = req.params;
  validateMongodbId(Id);
  try {
    const userorders = await Order.findOne({order:id}).populate("product.product").populate("orderby").exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});


const updateOrderStatus = asyncHandler(async(req,res)=>{
const {status} = req.body;
const {_id} = req.params;
validateMongodbId(_id); 
try {
  const updateorderstatus  = await Order.findById(id,{
    orderStatus:status,
    paymentIntent:{
      status:status,
    }
  },{new:true});
  res.json(updateorderstatus);
} catch (error) {
  throw new Error(error);
}
});

module.exports = {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUser,
  deleteAUsers,
  updateAUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  adminLogin,
  getWishlist,
  saveUserAddress,
  addToCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getOrderByUserId,
  getAllOrders,

};
