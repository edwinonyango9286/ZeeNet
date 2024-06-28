import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addCart from "../images/add-cart.svg";
import wishlistIcon from "../images/wish.svg";
import { useDispatch} from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();
  const addProductToWishlist = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/store" ? `gr-${grid}` : "col-3"
            }`}
          >
            <div
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent"
                  onClick={(e) => {addProductToWishlist(item?._id)}}
                >
                  <img src={wishlistIcon} alt="Wishlist Image" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0]?.url}
                  className="img-fluid mx-auto border rounded object-fit "
                  alt="Product Image"
                  width={160}
                  height={160}
                />
                <img onClick={()=>{}}
                  src={item?.images[0]?.url}
                  className="img-fluid mx-auto  border rounded object-fit"
                  alt="Product Image"
                  width={160}
                  height={160}
                />
              </div>

              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={20}
                  value={item?.totalrating.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">Ksh {item?.price}</p>
              </div>

              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="Compare Product Image" />
                  </button>

                  <Link to={"/product/"+ item?._id} className="border-0 bg-transparent">
                    <img src={view} alt="View Product Image" />
                  </Link>
                  <button className="border-0 bg-transparent">
                    <img src={addCart} alt="Add to cart Image" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
