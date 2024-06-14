import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import blogImage from "../images/blog-1.jpg"

const BlogCard = (props) => {
  const { data } = props;

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="blog-card">
            <div className="card-image">
              <img
                src={item.images[0]?.url ? item.images[0]?.url : blogImage }
                alt="Blog Image"
                className="img-fluid w-100%"
              ></img>
            </div>
            <div className="blog-content">
              <p className="date">
                {moment(item?.createdAt).format("MMMM DO YY, h:mm a")}
              </p>
              <h5 className="title text-uppercase">{item?.title}</h5>
              <p
                className="desc text-capitalize"
                dangerouslySetInnerHTML={{
                  __html: item?.description.substr(0, 70) + "...",
                }}
              ></p>
              <Link to={`/blogs/singleblog/${item?._id}`} className="button">
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
