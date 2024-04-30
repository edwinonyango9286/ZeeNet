import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brands/brandSlice";
import { getCategories } from "../features/category/categorySlice";
import { getColors } from "../features/color/colorSlice";
import "react-widgets/styles.css";
import Multiselect from "react-widgets/Multiselect";


const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, []);

  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector((state) => state.category.categories);
  const colorState = useSelector((state) => state.color.colors);
  const colors = [];
  colorState.forEach((i)=>{
    colors.push({
        _id:i._id,
        color:i.title
    })
  })

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };

  return (
    <>
      <div>
        <h5 className="mb-4 title"> Add Product</h5>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            value={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <div>
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              value={formik.values.description}
            />
          </div>
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <CustomInput
            type="number"
            label="Enter Product price"
            name="price"
            onChng={formik.handleChange("price")}
            onBlr={formik.handleBlur("price")}
            value={formik.values.price}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
          <select name="" className="form-control py-3 mb-3" id="">
            <option>Select Brand</option>
            {brandState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {" "}
                  {i.title}
                </option>
              );
            })}
          </select>
          <select name="" className="form-control py-3 mb-3">
            <option>Select Category</option>
            {categoryState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {" "}
                  {i.title}
                </option>
              );
            })}
          </select>
          <Multiselect
            dataKey="id"
            textField="color"
            data={colors}
          />
          ;
          <button className="btn btn-success border-0 rounded-3 my-5">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
