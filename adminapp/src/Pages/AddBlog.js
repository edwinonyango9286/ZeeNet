import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createBlog,
  getABlog,
  resetState,
  updateABlog,
} from "../features/blogs/blogSlice";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import ReactQuill from "react-quill";
import { getBlogCategory } from "../features/blogcategory/blogCategorySlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Blog Name is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
});

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[3];
  useEffect(() => {
    dispatch(getBlogCategory());
  }, []);
  const blogCatState = useSelector((state) => state.bCategory.bCategories);
  const imgState = useSelector((state) => state.upload.images);
  const newBlog = useSelector((state) => state.blog);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBlog,
    blogName,
    blogDescription,
    blogCategory,
    blogImages,
    updatedBlog,
  } = newBlog;

  useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(getABlog(getBlogId));
      img.push(blogImages);
    } else {
      dispatch(resetState());
    }
  }, [getBlogId]);
  useEffect(() => {
    dispatch(resetState);
    dispatch(getBlogCategory());
  },[]);

  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog added successfully.");
    }
    if (isSuccess && updatedBlog) {
      toast.success("Blog updated successfully.");
      navigate("/admin/blog-list");
    }
    if (isError && blogName && blogDescription && blogCategory && blogImages) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [isSuccess, isError, isLoading]);

  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  useEffect(() => {
    formik.values.images = img;
  }, [img]);
  

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogName || "",
      description: blogDescription || "",
      category: blogCategory || "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBlogId !== undefined) {
        const data = { id: getBlogId, blogData: values };
        dispatch(updateABlog(data));
        dispatch(resetState());
      } else {
        dispatch(createBlog(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 500);
      }
    },
  });

  return (
    <>
      <d iv>
        <h5 className="mb-4 title">
          {getBlogId !== undefined ? "Update" : "Add"} Blog
        </h5>
        <div className="">
          <form
            onSubmit={formik.handleSubmit}
            className="d-flex gap-3 flex-column"
          >
            <CustomInput
              type="text"
              label="Enter Blog Title"
              name="title"
              onChng={formik.handleChange("title")}
              onBlr={formik.handleBlur("title")}
              val={formik.values.title}
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>
            <select
              name="category"
              className="form-control py-3 mt-3"
              onChange={formik.handleChange("category")}
              onBlur={formik.handleBlur("category")}
              value={formik.values.category}
            >
              <option>Select blog Category</option>
              {blogCatState.map((i, j) => {
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

            <div className="bg-white text-center boder-1 p-5  ">
              <Dropzone
                onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag and Drop some files here, or Click to select files
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
              className="btn btn-success border-0 rounded-3 mt-3 my-2"
            >
              {getBlogId !== undefined ? "Update" : "Add"} Blog
            </button>
          </form>
        </div>
      </d>
    </>
  );
};

export default AddBlog;
