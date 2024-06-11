import React, { useEffect } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import BlogCard from "../Components/BlogCard";
import Container from "../Components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container clas1="blog-wrapper  home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <BlogCard data={blogState ? blogState : []} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;
