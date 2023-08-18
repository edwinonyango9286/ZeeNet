const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/productRoutes");
const morgan = require("morgan");
const blogRoute = require("./routes/blogRoute");
const productCategoryRoute = require("./routes/productCategoryRoute");
const blogCategoryRoute = require("./routes/blogCategoryRoute");
const productBrandRoute = require("./routes/productBrandRoute");
const couponRoute = require("./routes/couponRoute");
const colorRoute = require("./routes/colorRoute");
const enquiryRoute = require("./routes/enquiryRoute")
dbConnect();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//USER API
app.use("/api/user", authRoutes);
//PRODUCT API
app.use("/api/products", productRoutes);
//COLOR API
app.use("/api/color", colorRoute);
//BLOGS API
app.use("/api/blog", blogRoute);
// PRODUCT CATEGORY API
app.use("/api/productcategory", productCategoryRoute);
//BLOG CATEGORY API
app.use("/api/blogcategory", blogCategoryRoute);
//PRODUCT BRAND API
app.use("/api/productbrand", productBrandRoute);
//COUPON BRAND API
app.use("/api/coupon", couponRoute);
//ENQUIRIES API 
app.use("/api/enquiry",enquiryRoute);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
