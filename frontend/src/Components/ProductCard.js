import React from "react";
import watchImage from "../images/watch.jpg";
import ReactStars from "react-rating-stars-component";
import watchImage1 from "../images/watch-1.avif";
import { Link } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addCart from "../images/add-cart.svg";
import wishlistIcon from "../images/wish.svg";
import { useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <><div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
  <Card className="product-card">
    <Link to={`${location.pathname === "/" ? "/sigleproduct/:id" : location.pathname === "/sigleproduct/:id" ? "/sigleproduct/:id" : "/sigleproduct/:id"}`} className="position-relative">
      <div className="wishlist-icon position-absolute">
        <button className="border-0 bg-transparent">
          <img src={wishlistIcon} alt="watch" />
        </button>
      </div>
      <div className="product-image">
        <img src={watchImage} className="img-fluid" alt="product image" />
        <img src={watchImage1} className="img-fluid" alt="watch" />
      </div>

      <div className="product-details">
        <Card.Title className="brand">Vandrose</Card.Title>
        <Card.Title className="product-title">
          Kids headphone bulk 10 pack multi colored for students
        </Card.Title>
        <ReactStars count={5} size={20} value={3} edit={false} activeColor="#ffd700" />
        <Card.Text className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
          Introducing the HP ProBook X360, a versatile and powerful laptop designed to elevate your productivity and creativity to new heights
        </Card.Text>
        <Card.Text className="price">Ksh 1000/-</Card.Text>
      </div>

      <div className="action-bar position-absolute">
        <div className="d-flex flex-column gap-10">
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
  </Card>
</div>
    </>
  );
};

export default ProductCard;
