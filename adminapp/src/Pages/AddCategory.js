import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, resetState } from "../features/category/categorySlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Product Category Name is Required"),
});
 
const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newCategory = useSelector((state) => state.category);
  const { isSuccess, isError, isLoading, createdCategory } = newCategory;
  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Product Category Added Successfully!!");
    }
    if (isError) {
      toast.error("Something went Wrong Please Try Again!!");
    }
   
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCategory(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState())
      }, 3000);
    },
  });
  return (
    <>
      <div>
        <h5 className="mb-4 title"> Add Category</h5>
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
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
