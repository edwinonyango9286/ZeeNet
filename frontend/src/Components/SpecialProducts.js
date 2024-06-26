import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProducts = (props) => {
  const { brand, title, totalrating, price, sold, quantity, image, id } = props;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3  mb-2">
        <div className="special-product-card">
          <div className="d-flex justify-content-between gap-10">
            <div>
              <img src={image} className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{brand}</h5>
              <h6 className="title">{title}</h6>
              <ReactStars
                count={5}
                size={24}
                value={totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-price">Ksh {price}</span>&nbsp;
                <strike>30,000/-</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5</b> days
                </p>
                <div className="d-flex gap-10 align-items-center ">
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products: {quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: quantity / quantity + sold * 100 + "%" }}
                    aria-valuenow={quantity / quantity + sold * 100}
                    aria-valuemin={quantity}
                    aria-valuemax={sold + quantity}
                  ></div>
                </div>
              </div>
              <Link to={"/product/" + id} className="button">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProducts;
