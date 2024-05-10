import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createBrand, resetState } from "../features/brands/brandSlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Brand Name is required"),
});

const AddBrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newBrand = useSelector((state) => state.brand);
  const { isSuccess, isError, isLoading, createdBrand } = newBrand;
  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfully!!");
    }
    if (isError) {
      toast.error("Something went Wrong Please Try Again!!");
    }
  
  }, [isSuccess, isError, isLoading, createdBrand]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBrand(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState())
      }, 3000);
    },
  });

  return (
    <>
      <div>
        <h5 className="mb-2 title"> Add Brand</h5>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              label="Enter Brand"
              name="title"
              onChng={formik.handleChange("title")}
              onBlr={formik.handleBlur("title")}
              val={formik.values.title}
              id="brand"
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>
            <button
              type="submit"
              className="btn btn-success border-0 mt-3 rounded-3 "
            >
              Add Brand
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBrand;
