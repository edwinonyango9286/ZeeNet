import React, { useEffect, useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Colors from "../Components/Colors";
import { VscGitCompare } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../Components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductRating,
  getAllProducts,
  getAproduct,
} from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProductToCart, getUserCart } from "../features/users/userSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const productState = useSelector((state) => state?.product?.singleProduct);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const productsState = useSelector((state) => state?.product?.products);
  const [popularProducts, setPopularProducts] = useState([]);
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    dispatch(getAproduct(getProductId));
    dispatch(getUserCart());
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  const uploadCart = async () => {
    if (color === null) {
      toast.error("Choose product color.");
      return false;
    } else {
      await dispatch(
        addProductToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://m.media-amazon.com/images/I/41jJtitW+KL._SY300_SX300_.jpg",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState.length; index++) {
      const element = productsState[index];
      if (element.tags === "popular") {
        data.push(element);
      }
      setPopularProducts(data);
    }
  }, [productsState]);

  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Add star rating?");
      return false;
    } else if (comment === null) {
      toast.error("Please write a review about the product?");
      return false;
    } else {
      dispatch(
        addProductRating({ star: star, comment: comment, prodId: getProductId })
      );
      dispatch(getAproduct(getProductId));
      return false;
    }
  };

  return (
    <>
      <Meta title={productState?.title} />
      <BreadCrumb title={productState?.title} />
      <Container class1="main-product-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src={productState?.images[0]?.url}
                  className="img-fluid square-image object-fit"
                  alt="Product Image"
                />
              </div>
              <div>
                <img
                  src={productState?.images[0]?.url}
                  className="img-fluid square-image object-fit"
                  alt="Product Image"

                />
              </div>
              <div>
                <img
                  src={productState?.images[0]?.url}
                  className="img-fluid square-image object-fit"
                  alt="Product Image"
                />
              </div>
              <div>
                <img
                  src={productState?.images[0]?.url}
                  className="img-fluid square-image object-fit"
                  alt="Product Image"
                />
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">Ksh {productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={20}
                    value={productState?.totalrating?.toString()}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability:</h3>
                  <p className="product-data">In Stock</p>
                </div>

                <div className="d-flex gap-10 flex-column flex-wrap mt-2 mb-2">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-2 gap-md-15">
                    <span className="bg-white text-dark border px-3">11.6"</span>
                    <span className=" bg-white text-dark border px-3">12"</span>
                    <span className="  bg-white text-dark border px-3">13.3"</span>
                    <span className="bg-white text-dark border px-2">14"</span>
                    <span className=" bg-white text-dark border px-1">15.6"</span>
                  </div>
                </div>

                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                      <h3 className="product-heading">Select laptop color:</h3>
                      <Colors
                        setColor={setColor}
                        colorData={productState?.color}
                      />
                    </div>
                  </>
                )}

                <div className="d-flex align-items-center  gap-15  flex-row mt-2 mb-2">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantity:</h3>
                      <div className="">
                        <input
                          type="number"
                          name="quantity"
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "70px" }}
                          id="quantity"
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}

                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "ms-5" + "d-flex  align-items-center gap-30 ms-5"
                    }
                  >
                    <button
                      className="button border-0"
                      // data-bs-toggle="modal"
                      // data-bs-target="#staticBackdrop"
                      type="button"
                      onClick={() => {
                        alreadyAdded ? navigate("/cart") : uploadCart();
                      }}
                    >
                      {alreadyAdded ? "Proceed To Cart" : "Add to Cart"}
                    </button>

                    {/* <button className="button signup">Buy It Now</button> */}
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-15">
                  <div>
                    <a href="">
                      <VscGitCompare className="fs-5 me-2" />
                      Add To Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add To Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Returns:</h3>
                  <p className="product-data">
                    Free Shipping and Returns available on all orders
                    <br />
                    We ship all products domestic orders within
                    <b> 5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading"> Product Link :</h3>
                  <a
                    href="javasrcript:void(0);"
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-2 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>

            <div className="bg-white p-3">
              <p
                dangerouslySetInnerHTML={{ __html: productState?.description }}
                className="text-capitalize"
              ></p>
            </div>
            <button className="btn btn-link"></button>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper  home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex  justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={20}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">Based on 2 Reviews</p>
                  </div>
                </div>
                <div>
                  <button className="text-dark text-decoration-underline btn btn-link">
                    Write a review
                  </button>
                </div>
              </div>
              <div className="review-form py-4">
                <h4>Write a review</h4>

                <div action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={20}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                      onChange={(e) => {
                        setStar(e);
                      }}
                    />
                  </div>
                  <div>
                    <textarea
                      name="review"
                      id="review"
                      className="w-100 form-control"
                      cols={20}
                      rows={4}
                      placeholder="Comment..."
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-end mt-2">
                    <button
                      type="button"
                      onClick={addRatingToProduct}
                      className="button border-0"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>

              <div className="reviews mt-4">
                {productState &&
                  productState.ratings?.map((item, index) => {
                    return (
                      <div key={index} className="review">
                        <div className="d-flex align-items-center gap-10">
                          <ReactStars
                            count={5}
                            size={20}
                            value={item?.star}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>
                        <p>{item?.comment}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper home-wrapper-2 py-2">
        <div className="row">
          <div className="col-12">
            <h6 className="section-heading">Popular Products.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex gap-10 flex-wrap">
            <ProductCard data={popularProducts} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
