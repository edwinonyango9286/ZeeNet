import React from "react";
import watchImage from "../images/watch.jpg";
import headphones from "../images/headphone.jpg";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addCart from "../images/add-cart.svg";
import wishlistIcon from "../images/wish.svg"

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
         <Link>
         <img src={wishlistIcon} alt="watch"></img>
         </Link>
        </div>
        <div className="product-image">
          <img src={watchImage} className="img-fluid" alt="product image" />
          <img src={headphones} className="img-fluid" alt="watch"></img>

        </div>

        <div className="product-details">
          <h6 className="brand">Vandrose</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">Ksh 1000/-</p>
        </div>

        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-10">
            <Link>
              <img src={prodcompare} alt="prodcompare"></img>
            </Link>

            <Link>
              <img src={view} alt="view"></img>
            </Link>

            <Link>
              <img src={addCart} alt="addtocart"></img>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
