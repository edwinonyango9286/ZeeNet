import React, { useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Single Product"} />
      <BreadCrumb title="Single Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>

      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p>
                  The watch is an exquisite timepiece that seamlessly blends
                  classic elegance with modern sophistication. Crafted with
                  meticulous attention to detail, its stainless steel case
                  features a polished silver finish, creating a radiant gleam
                  that catches the light from any angle. The round dial,
                  protected by a scratch-resistant sapphire crystal, displays a
                  rich midnight blue background, reminiscent of a starlit sky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-bewtween align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>

                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>

                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>

                </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
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
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
