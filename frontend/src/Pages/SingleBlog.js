import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import blogImage from "../images/blog-1.jpg";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Container from "../Components/Container";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"single blog"} />
      <BreadCrumb title="single blog" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <AiOutlineArrowLeft className="fs-4" />
                  Go Back To blogs
                </Link>

                <h3> A Beautiful Sunday Morning Renaissance</h3>
                <img
                  src={blogImage}
                  alt="blog image"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  You’re only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury –
                  it’s not something people need, but it’s what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;
