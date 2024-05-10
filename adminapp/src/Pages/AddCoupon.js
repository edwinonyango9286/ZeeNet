import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createCoupon, resetState } from "../features/coupon/couponSlice";

const schema = Yup.object().shape({
  name: Yup.string().required("Coupon Name is required"),
  expiry: Yup.date().required("Select an expiry date required"),
  discount: Yup.number().required("Discount Percentage required"),
});

const AddCoupon = () => {
  const dispatch = useDispatch();
  const newCoupon = useSelector((state) => state.coupon);
  const { isSuccess, isError, isLoading, createdCoupon } = newCoupon;
  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon added Successfully!!");
    }
    if (isError) {
      toast.error("Something went Wrong Please Try Again!!");
    }
  }, [isSuccess, isError, isLoading,createdCoupon]);

  const formik = useFormik({
    initialValues: {
      name: "",
      expiry: "",
      discount: "", 
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCoupon(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });

  return (
    <>
      <div>
        <h5 className="mb-4 title"> Add Coupon</h5>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Coupon Name"
            name="name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
            id="name"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>

          <CustomInput
            type="date"
            label="Select expiry date  price"
            name="expiry"
            onChng={formik.handleChange("expiry")}
            onBlr={formik.handleBlur("expiry")}
            val={formik.values.price}
            id="expiry"
          />
          <div className="error">
            {formik.touched.expiry && formik.errors.expiry}
          </div>

          <CustomInput
            type="number"
            label="Enter discount "
            name="discount"
            onChng={formik.handleChange("discount")}
            onBlr={formik.handleBlur("discount")}
            val={formik.values.discount}
            id="discount"
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>
          <button className="btn btn-success border-0 rounded-3 my-5">
            Add Coupon
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCoupon;
