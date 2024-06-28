import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getABrand, getBrands } from "../features/brands/brandSlice";
import {
  getACategory,
  getCategories,
} from "../features/category/categorySlice";
import { getAColor, getColors } from "../features/color/colorSlice";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import {
  createProduct,
  getAProduct,
  resetState,
  updateAProduct,
} from "../features/product/productSlice";
import { Select } from "antd";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  title: Yup.string().required("Add product name."),
  description: Yup.string().required(" Add product description."),
  price: Yup.number().required("Add product price."),
  brand: Yup.string().required("Add product brand."),
  category: Yup.string().required("Add product category"),
  tags: Yup.string().required("Select product tag"),
  quantity: Yup.number().required("Add product quantity"),
  color: Yup.array()
    .min(1, "Select at least one color")
    .required("Color are required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getProductId = location.pathname.split("/")[3];
  const [color, setColor] = useState([]);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
  }, []);

  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector((state) => state.pCategory.categories);
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);
  const {
    isSuccess,
    isError,
    isLoading,
    createdProduct,
    productName,
    productDescription,
    productPrice,
    productCategory,
    productBrand,
    productQuantity,
    productImages,
    productColor,
    productTag,
    updatedProduct,
  } = newProduct;

  useEffect(() => {
    if (getProductId !== undefined) {
      dispatch(getAProduct(getProductId));
      img.push(productImages);
    } else {
      dispatch(resetState());
    }
  }, [getProductId]);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getACategory());
    dispatch(getABrand());
    dispatch(getAColor());
  }, []);

  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product added successfully.");
    }

    if (isSuccess && updatedProduct) {
      toast.success("Product updated successfully.");
      navigate("/admin/product-list");
    }
    if (
      isError &&
      productName &&
      productDescription &&
      productPrice &&
      productCategory &&
      productBrand &&
      productQuantity &&
      productImages &&
      productColor &&
      productTag
    ) {
      toast.error("Something went wrong. Please try again later.");
    }
  }, [isSuccess, isError, isLoading]);

  const coloropt = [];
  colorState.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });

  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  useEffect(() => {
    formik.values.color = color ? color : "";
    formik.values.images = img;
  }, [color, img]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: productName || "",
      description: productDescription || "",
      price: productPrice || "",
      brand: productBrand || "",
      category: productCategory || "",
      quantity: productQuantity || "",
      color: productColor || "",
      images: "",
      tags: productTag || "",
    },

    validationSchema: schema,
    onSubmit: (values) => {
      if (getProductId !== undefined) {
        const data = { id: getProductId, productData: values };
        dispatch(updateAProduct(data));
        dispatch(resetState());
      } else {
        dispatch(createProduct(values));
        formik.resetForm();
        setColor(null);
        setTimeout(() => {
          dispatch(resetState());
        }, 500);
      }
    },
  });

  const handleColors = (e) => {
    setColor(e);
  };

  return (
    <>
      <div>
        <h5 className="mb-4 title">
          {" "}
          {getProductId !== undefined ? "Update" : "Add"} Product
        </h5>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter product name."
            name="title"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <div>
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
          </div>
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <CustomInput
            type="number"
            label="Enter product price."
            name="price"
            min={1}
            onChng={formik.handleChange("price")}
            onBlr={formik.handleBlur("price")}
            val={formik.values.price}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
          <select
            name="brand"
            className="form-control py-3 mb-3"
            id="brand"
            onChange={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
            value={formik.values.brand}
          >
            <option>Select Brand</option>
            {brandState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.brand && formik.errors.brand}
          </div>
          <select
            name="category"
            className="form-control py-3 mb-3"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
          >
            <option>Select Category</option>
            {categoryState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>

          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <select
            name="tags"
            className="form-control py-3 mb-3"
            onChange={formik.handleChange("tags")}
            onBlur={formik.handleBlur("tags")}
            value={formik.values.tags}
          >
            <option value="" disabled>
              Select Tag
            </option>
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="special">Special</option>
            <option value="featured">Featured</option>
            <option value="popular">Popular</option>
            <option value="special">Special</option>
            <option value="new">New</option>
            <option value="sale">Sale</option>
            <option value="clearance">Clearance</option>
            <option value="gaming">Gaming</option>
            <option value="business">Business</option>
            <option value="student">Student</option>
            <option value="ultrabook">Ultrabook</option>
            <option value="2-in-1">2-in-1</option>
            <option value="touchscreen">Touchscreen</option>
            <option value="amd">AMD</option>
            <option value="intel">Intel</option>
            <option value="nvidia">NVIDIA</option>
            <option value="dell">Dell</option>
            <option value="hp">HP</option>
            <option value="lenovo">Lenovo</option>
            <option value="asus">ASUS</option>
            <option value="acer">Acer</option>
            <option value="microsoft">Microsoft</option>
            <option value="apple">Apple</option>
          </select>

          <div className="error">
            {formik.touched.tags && formik.errors.tags}
          </div>
          <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select Colors"
            defaultValue={color}
            onChange={(i) => handleColors(i)}
            options={coloropt}
          />

          <div className="error">
            {formik.touched.color && formik.errors.color}
          </div>

          <CustomInput
            type="number"
            label="Enter product quantity."
            name="quantity"
            min={1}
            onChng={formik.handleChange("quantity")}
            onBlr={formik.handleBlur("quantity")}
            val={formik.values.quantity}
          />
          <div className="error">
            {formik.touched.quantity && formik.errors.quantity}
          </div>

          <div className="bg-white text-center boder-1 p-5  ">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag and Drop some files here, or Click to select files.
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>

          <div className="showImages d-flex flex-wrap gap-3">
            {imgState.map((i, j) => {
              return (
                <div className="position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img
                    src={i.url}
                    alt="productImage"
                    width={200}
                    height={200}
                  />
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            {getProductId !== undefined ? "Update" : "Add"} Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
