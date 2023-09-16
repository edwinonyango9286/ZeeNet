import React, { useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";
import watch from "../images/watch.jpg";
import ReactImageZoom from "react-image-zoom";
import Colors from "../Components/Colors";
import { VscGitCompare } from 'react-icons/vsc';
import {AiOutlineHeart} from "react-icons/ai"
import Container from "../Components/Container";
import "../custom-css/singleproductpage.css";
const SingleProduct = () => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isReviewFormVisible, setReviewFormVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  const toggleReviewForm = () => {
    setReviewFormVisible(!isReviewFormVisible);
  };

  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const [orderedProduct, setorderedProduct] = useState(true);

  const copyToClipboard = (text)=>{
    console.log("text",text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  return (
    <>
      <Meta title={"product name"} />
      <BreadCrumb title="product name" />
      {/* Almost responsive */}
      <Container className="main-product-wrapper py-3 home-wrapper-2">
        <div className="row">
        
        <div className="col-md-6 col-lg-4">
          <div className="main-product-image">
            <div>
              <ReactImageZoom {...props} />
            </div>
          </div>
          <div className="other-product-images d-flex flex-row gap-2 d-none d-md-flex">
            <div className="col-3">
              <img src={watch} className="img-fluid square-image" alt="watch" />
            </div>
            <div className="col-3">
              <img src={watch} className="img-fluid square-image" alt="watch" />
            </div>
            <div className="col-3">
              <img src={watch} className="img-fluid square-image" alt="watch" />
            </div>
            <div className="col-3">
              <img src={watch} className="img-fluid square-image" alt="watch" />
            </div>
          </div>
        </div>
          <div className="col-lg-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids Headphone Bulk 10Pack Multi colored for students
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">Ksh 1000</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={20}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write A Review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Watch</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">Havells</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data">watch</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data">watch</p>
                </div>

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability:</h3>
                  <p className="product-data">In Stock </p>
                </div>

                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-2 gap-md-15">
                    <span className="badge border border-1 bg-white text-dark  border-secondary ">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark  border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>

                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color:</h3>
                  <Colors />
                </div>

                <div className="d-flex  flex-row align-items-center gap-10 gap-md-15 mt-2 mb-3">
                  <h3 className="product-heading">Quantity:</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-start gap-3 mt-3">
                <div className="mb-3 mb-md-0">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
                <div>
                  <button className="btn btn-success">Buy it Now</button>
                </div>
              </div>
                </div>
                <div className=" d-flex  align-items-center gap-10 gap-md-15">
                  <div>
                    <a href=""><VscGitCompare className="fs-5 me-2"/>Add To Compare</a>
                  </div>
                  <div>
                    <a href=""><AiOutlineHeart className="fs-5 me-2"/>Add To Wishlist</a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Returns:</h3>
                  <p className="product-data">
                    Free Shipping and Returns available on all orders<br />
                    We ship all products domestic orders within
                    <b> 5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading"> Product Link :</h3>
                  <a
                    href="javasrcript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      );
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
      
{/* almost */}
      <Container className="description-wrapper py-2 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <h4>Description</h4>

          <div className="bg-white p-2 description-body">
            {isDescriptionVisible ? (
              <p>
                The watch is an exquisite timepiece that seamlessly blends
                classic elegance with modern sophistication. Crafted with
                meticulous attention to detail, its stainless steel case
                features a polished silver finish, creating a radiant gleam that
                catches the light from any angle. The round dial, protected by a
                scratch-resistant sapphire crystal, displays a rich midnight
                blue background, reminiscent of a starlit sky.
              </p>
            ) : null}
          </div>
          <button onClick={toggleDescription} className="btn btn-link">
            {isDescriptionVisible ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </Container>
{/* done responsie and toggles */}
      <Container class1="reviews-wrapper py-3 home-wrapper-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
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
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                <div>
                  <button
                    className="text-dark text-decoration-underline btn btn-link"
                    onClick={toggleReviewForm}
                  >
                    Write A Review
                  </button>
                </div>
              </div>
              {isReviewFormVisible && (
                <div className="review-form py-4">
                  <h4>Write A Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols={30}
                        rows={4}
                        placeholder="Comments"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
              )}
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex flex-column flex-md-row align-items-md-center align-items-start gap-10">
                    <h6 className="mb-0">Omollo</h6>
                    <ReactStars
                      count={5}
                      size={20}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p>
                    I recently purchased this product, and I must say, I am
                    pleasantly surprised by its performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>

      <Container class1="popular-wrapper home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products </h3>
            </div>
          </div>
          <div className="row">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
      </Container>
    </>
  );
};

export default SingleProduct;
