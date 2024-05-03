import React from "react";
import watchImage from "../images/watch.jpg";
import ReactStars from "react-rating-stars-component";
import watchImage1 from "../images/watch-1.avif";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addCart from "../images/add-cart.svg";
import wishlistIcon from "../images/wish.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/sigleproduct/:id"
              : location.pathname === "/sigleproduct/:id"
              ? "/sigleproduct/:id"
              : "/sigleproduct/:id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wishlistIcon} alt="watch" />
            </button>
          </div>
          <div className="product-image">
            <img src={watchImage} className="img-fluid" alt="product" />
            <img src={watchImage1} className="img-fluid" alt="watch" />
          </div>

          <div className="product-details">
            <h6 className="brand">Vandrose</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi-colored for students
            </h5>
            <ReactStars
              count={5}
              size={20}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block": "d-none"}`}>
              Introducing the HP ProBook X360, a versatile and powerful laptop
              designed to elevate your productivity and creativity to new
              heights
            </p>
            <p className="price">Ksh 1000/-</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="prodcompare" />
              </button>

              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addCart} alt="addtocart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
