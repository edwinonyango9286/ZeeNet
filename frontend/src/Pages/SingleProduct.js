import React, { useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";
import watch from "../images/watch.jpg";
import ReactImageZoom from "react-image-zoom";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"product name"} />
      <BreadCrumb title="product name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-rwap gap-15">
                <div>
                  <img src={watch} className="img-fluid" alt="watch"></img>
                </div>
                <div>
                  {" "}
                  <img src={watch} className="img-fluid" alt="watch" />
                </div>
                <div>
                  <img src={watch} className="img-fluid" alt="watch" />
                </div>
                <div>
                  <img src={watch} className="img-fluid" alt="watch" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphone Bulk 10Pack Multi colored for students
                  </h3>
                </div>
                <div className="border-bottom">
                  <p className="price">
                    
                  </p>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>

              <div className="bg-white p-3">
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

      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
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
                      <a
                        className="text-dark text-decoration-underline  "
                        href=""
                      >
                        {" "}
                        Write A Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write A Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
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
                    <div className=" d-flex justify-content-end">
                      <button className="button border-0 ">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Omollo</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p>
                      {" "}
                      I recently purchased this product, and I must say, I am
                      pleasantly surprised by its performance
                    </p>
                  </div>
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
