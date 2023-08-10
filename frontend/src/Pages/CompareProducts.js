import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import watch1 from "../images/watch-1.avif";
import cross from "../images/cross.svg";
import Colors from "../Components/Colors";
import Container from "../Components/Container";
const CompareProducts = () => {
  return (
    <>
      <Meta title={"compare products"} />
      <BreadCrumb title="compare products" />
      <Container clas1="compare-products-wrapper py-5 home-wrapper-2 ">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="product-card-image">
                  <img src={watch1} alt="watch" className="img-fluid" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    The Eternal Ticker: A Timepiece for Your Journey
                  </h5>
                  <h6 className="price">Ksh 1000</h6>
                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>

                  <div className="product-details">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>

                  <div className="product-details">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-details">
                    <h5>Colors:</h5>
                    <Colors />
                  </div>
                  <div className="product-details">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="product-card-image">
                  <img src={watch1} alt="watch" className="img-fluid" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    The Eternal Ticker: A Timepiece for Your Journey
                  </h5>
                  <h6 className="price">Ksh 1000</h6>
                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>

                  <div className="product-details">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>

                  <div className="product-details">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-details">
                    <h5>Colors:</h5>
                    <Colors />
                  </div>
                  <div className="product-details">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="product-card-image">
                  <img src={watch1} alt="watch" className="img-fluid" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    The Eternal Ticker: A Timepiece for Your Journey
                  </h5>
                  <h6 className="price">Ksh 1000</h6>
                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>

                  <div className="product-details">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>

                  <div className="product-details">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-details">
                    <h5>Colors:</h5>
                    <Colors />
                  </div>
                  <div className="product-details">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="product-card-image">
                  <img src={watch1} alt="watch" className="img-fluid" />
                </div>

                <div className="compare-product-details">
                  <h5 className="title">
                    The Eternal Ticker: A Timepiece for Your Journey
                  </h5>
                  <h6 className="price">Ksh 1000</h6>
                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>

                  <div className="product-details">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>

                  <div className="product-details">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-details">
                    <h5>Colors:</h5>
                    <Colors />
                  </div>
                  <div className="product-details">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default CompareProducts;
