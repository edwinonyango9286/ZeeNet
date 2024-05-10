import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createColor, resetState } from "../features/color/colorSlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Select color  is required"),
});

const AddColor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newColor = useSelector((state) => state.color);
  const { isSuccess, isError, isLoading, createdColor } = newColor;
  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfully!!");
    }
    if (isError) {
      toast.error("Something went Wrong Please Try Again!!");
    }
   
  }, [isSuccess, isError, isLoading, createdColor]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createColor(values));
      setTimeout(() => {
        dispatch(resetState())
      }, 3000);
    },
  });

  return (
    <>
      <div>
        <h5 className="mb-2 title ">Add Color</h5>
        <div>
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="color"
              label="Select Color"
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
              className="btn
                     btn-success border-0 rounded-3 mt-3 "
            >
              Add Color
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddColor;
