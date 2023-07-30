import React from "react";
import mainBanner from "../images/main-banner-1.jpg";
import { Link } from "react-router-dom";
import catBanner from "../images/catbanner-01.jpg";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src={mainBanner}
                  className="img-fluid rounded-3"
                  alt="main banner"
                ></img>
                <div className="main-banner-content position-absolute">
                  <h4> SUPPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p> From Ksh : 56,000 To 98,000</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src={catBanner}
                    className="img-fluid rounded-3"
                    alt="small banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4> SUPPERCHARGED FOR PROS</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p> From Ksh : 56,000 To 98,000</p>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src={catBanner}
                    className="img-fluid rounded-3"
                    alt="small banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4> SUPPERCHARGED FOR PROS</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p> From Ksh : 56,000 To 98,000</p>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src={catBanner}
                    className="img-fluid rounded-3"
                    alt="small banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4> SUPPERCHARGED FOR PROS</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p> From Ksh : 56,000 To 98,000</p>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src={catBanner}
                    className="img-fluid rounded-3"
                    alt="small banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4> SUPPERCHARGED FOR PROS</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p> From Ksh : 56,000 To 98,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
