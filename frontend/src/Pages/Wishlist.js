import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import cross from "../images/cross.svg";
import watch from "../images/watch-1.avif";
import Container from "../Components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"wishlist"} />
      <BreadCrumb title="wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src={cross}
                  className=" position-absolute img-fluid cross "
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img src={watch} className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    The Eternal Ticker: A Timepiece for Your Journey
                  </h5>
                  <h6 className="price">Ksh 1000/-</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src={cross}
                  className=" position-absolute img-fluid cross "
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img src={watch} className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    The Eternal Ticker: A Timepiece for Your Journey
                  </h5>
                  <h6 className="price">Ksh 1000/-</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src={cross}
                  className=" position-absolute img-fluid cross "
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img src={watch} className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    The Eternal Ticker: A Timepiece for Your Journey
                  </h5>
                  <h6 className="price">Ksh 1000/-</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src={cross}
                  className=" position-absolute img-fluid cross "
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img src={watch} className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    The Eternal Ticker: A Timepiece for Your Journey
                  </h5>
                  <h6 className="price">Ksh 1000/-</h6>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Wishlist;
