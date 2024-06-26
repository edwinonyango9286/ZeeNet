import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brands/brandSlice";
import categoryReducer from "../features/category/categorySlice";
import colorReducer from "../features/color/colorSlice";
import blogReducer from "../features/blogs/blogSlice";
import blogCategoryReducer from "../features/blogcategory/blogCategorySlice";
import enquiryReducer from "../features/enquiry/enquirySlice"
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupon/couponSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    pCategory: categoryReducer,
    color: colorReducer,
    blog:blogReducer,
    bCategory:blogCategoryReducer,
    enquiry:enquiryReducer,
    upload:uploadReducer,
    coupon:couponReducer,
  },
});
