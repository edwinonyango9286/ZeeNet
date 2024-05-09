import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createBlog } from "../features/blogs/blogSlice";
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
  const [images, setImages] = useState([]);
  useEffect(() => {
    dispatch(getBlogCategory());
  }, []);

  const blogCatState = useSelector((state) => state.bCategory.bCategories);
  const imgState = useSelector((state) => state.upload.images);
  const newBlog = useSelector((state) => state.blog);
  const { isSuccess, isError, isLoading, createdBlog } = newBlog;
  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog Added Successfully!!");
    }
    if (isError) {
      toast.error("Something went Wrong Please Try Again!!");
    }
    if (isLoading) {
      toast.info("Please wait!!");
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
    initialValues: {
      title: "",
      description: "",
      category: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBlog(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/blog-list");
      }, 3000);
    },
  });

  return (
    <>
      <div>
        <h5 className="mb-4 title"> Add Blog</h5>
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
                        Drag 'n' drop some files here, or click to select files
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
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
