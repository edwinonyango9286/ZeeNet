import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createBlogCategory } from "../features/blogcategory/blogCategorySlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Blog Category Name is required"),
});

const AddBlogCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newBlogCategory = useSelector((state) => state.bCategory);
  const { isSuccess, isError, isLoading, createdBlogCategory } =
    newBlogCategory;
  useEffect(() => {
    if (isSuccess && createdBlogCategory) {
      toast.success("Blog Category Added Successfully!!");
    }
    if (isError) {
      toast.error("Something went Wrong Please Try Again!!");
    }
    if (isLoading) {
      toast.info("Please wait!!");
    }
  }, [isSuccess, isError, isLoading, createdBlogCategory]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBlogCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/blog-category-list");
      }, 3000);
    },
  });

  return (
    <>
      <div>
        <h5 className="mb-2 title">Add Blog Category</h5>
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


            <button className="btn btn-success border-0 mt-3 rounded-3 ">
              Add Blog Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlogCategory;
