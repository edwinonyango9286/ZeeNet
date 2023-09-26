const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const productRouter = require("./routes/productRoutes");
const morgan = require("morgan");
const blogRouter = require("./routes/blogRoute");
const productCategoryRouter = require("./routes/productCategoryRoute");
const blogCatRouter = require("./routes/blogCatRoute")
const BrandRouter = require("./routes/blogRoute");
const couponRouter = require("./routes/couponRoute");
const colorRouter = require("./routes/colorRoute");
const enquiryRouter = require("./routes/enqRoute")
const cors = require("cors")


dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//USER API
app.use("/api/user",authRouter);
//PRODUCT API
app.use("/api/products", productRouter);
//COLOR API
app.use("/api/color", colorRouter);
//BLOGS API
app.use("/api/blog", blogRouter);
// PRODUCT CATEGORY API
app.use("/api/productcategory", productCategoryRouter);
//BLOG CATEGORY API
app.use("/api/blogcategory", blogCatRouter);
//PRODUCT BRAND API
app.use("/api/productbrand",BrandRouter);
//COUPON BRAND API
app.use("/api/coupon", couponRouter);
//ENQUIRIES API 
app.use("/api/enquiry",enquiryRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
