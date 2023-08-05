import React from "react";
import blogImage from "../images/blog-1.jpg";
import {Link} from "react-router-dom"

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src={blogImage} alt="blog" className="img-fluid w-100"></img>
        </div>
        <div className="blog-content">
            <p className="date"> 12 June 2023</p>
            <h5 className="title">The World of Virtual...</h5>
            <p className="desc"> 
            Virtual Reality has emerged as one of the most exciting and transformative technologies of our time. 
            </p>
            <Link  to="/blogs/singleblog/:id" className="button">Read More</Link>
        </div>
      </div>
  );
};

export default BlogCard;
