import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createBlogCategory,
  getABlogCat,
  resetState,
  updateABLogCat,
} from "../features/blogcategory/blogCategorySlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Blog Category Name is required"),
});

const AddBlogCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getBlogCatId = location.pathname.split("/")[3];
  const newBlogCategory = useSelector((state) => state.bCategory);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBlogCategory,
    updatedBlogCat,
    blogCatName,
  } = newBlogCategory;

  useEffect(() => {
    if (getBlogCatId !== undefined) {
      dispatch(getABlogCat(getBlogCatId));
    } else {
      dispatch(resetState());
    }
  }, [getBlogCatId]);


  useEffect(() => {
    if (isSuccess && createdBlogCategory) {
      toast.success("Blog Category Added Successfully!!");
    }
    if (isSuccess && updatedBlogCat) {
      toast.success("Blog Category updated Successfully!!");
      navigate("/admin/blog-category-list");
    }
    if (isError) {
      toast.error("Something went Wrong Please Try Again!!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogCatName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBlogCatId !== undefined) {
        const data = { id: getBlogCatId, blogCatData: values };
        dispatch(updateABLogCat(data));
        dispatch(resetState());
      } else {
        dispatch(createBlogCategory(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <>
      <div>
        <h5 className="mb-2 title">
          {getBlogCatId !== undefined ? "Edit" : "Add"} Blog Category
        </h5>
        <div>
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              label="Enter Blog Category"
              name="title"
              onChng={formik.handleChange("title")}
              onBlr={formik.handleBlur("title")}
              val={formik.values.title}
              id="blogcat"
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>

            <button
              type="submit"
              className="btn btn-success border-0 mt-3 rounded-3 my-2 "
            >
              {getBlogCatId !== undefined ? "Edit" : "Add"} Blog Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlogCategory;
