import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  createColor,
  getAColor,
  resetState,
  updateAColor,
} from "../features/color/colorSlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Select color  is required"),
});

const AddColor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getColorId = location.pathname.split("/")[3];
  const newColor = useSelector((state) => state.color);
  const { isSuccess, isError, isLoading, createdColor, colorName,updatedColor } =
    newColor;
  useEffect(() => {
    if (getColorId !== undefined) {
      dispatch(getAColor(getColorId));
    } else {
      dispatch(resetState());
    }
  }, [getColorId]);

  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfully!!");
    }
    if (isSuccess && updatedColor) {
      toast.success("Color Updated Successfully!!");
      navigate("/admin/color-list")
    }
    if (isError) {
      toast.error("Something went Wrong Please Try Again!!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getColorId !== undefined) {
        const data = { id: getColorId, colorData: values };
        dispatch(updateAColor(data));
        dispatch(resetState());
      } else {
        dispatch(createColor(values));
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });

  return (
    <>
      <div>
        <h5 className="mb-4 title ">
          {getColorId !== undefined ? "Edit" : "Add"} Color
        </h5>
        <div>
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="color"
              label="Select Color"
              name="title"
              onChng={formik.handleChange("title")}
              onBlr={formik.handleBlur("title")}
              val={formik.values.title}
              id="color"
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>
            <button
              type="submit"
              className="btn btn-success border-0 rounded-3 mt-3">
              {getColorId !== undefined ? "Edit" : "Add"} Color
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddColor;
