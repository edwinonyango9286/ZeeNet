import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  getACategory,
  resetState,
  updateACategory,
} from "../features/category/categorySlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Product Category Name is Required"),
});

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getCategoryId = location.pathname.split("/")[3];
  const newCategory = useSelector((state) => state.pCategory);
  const {
    isSuccess,
    isError,
    isLoading,
    createdCategory,
    categoryName,
    updatedCategory,
  } = newCategory;

  useEffect(() => {
    if (getCategoryId !== undefined) {
      dispatch(getACategory(getCategoryId));
    } else {
      dispatch(resetState());
    }
  }, [getCategoryId]);

  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Product Category Added Successfully!!");
    }
    if (isSuccess && updatedCategory) {
      toast.success("Category Updated Successfully!!");
      navigate("/admin/category-list");
    }
    if (isError) {
      toast.error("Something went Wrong Please Try Again!!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getCategoryId !== undefined) {
        const data = { id: getCategoryId, categoryData: values };
        dispatch(updateACategory(data));
        dispatch(resetState());
      } else { 
        dispatch(createCategory(values));
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
        <h5 className="mb-4 title">
          {getCategoryId !== undefined ? "Edit" : "Add"} Category
        </h5>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              label="Enter Product Category"
              name="title"
              onChng={formik.handleChange("title")}
              onBlr={formik.handleBlur("title")}
              val={formik.values.title}
              id="category"
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>

            <button
              type="submit"
              className="btn btn-success border-0 rounded-3 mt-3 "
            >
              {getCategoryId !== undefined ? "Edit" : "Add"} Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
