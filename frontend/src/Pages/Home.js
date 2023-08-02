import React from "react";
import mainBanner from "../images/main-banner-1.jpg";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import catBanner1 from "../images/catbanner-01.jpg";
import catBanner2 from "../images/catbanner-02.jpg";
import catBanner3 from "../images/catbanner-03.jpg";
import catBanner4 from "../images/catbanner-04.jpg";
import service1 from "../images/service.png";
import service2 from "../images/service-02.png";
import service3 from "../images/service-03.png";
import service4 from "../images/service-04.png";
import service5 from "../images/service-05.png";
import cameraImage from "../images/camera.jpg";
import tvImage from "../images/tv.jpg";
import headphoneImage from "../images/headphone.jpg";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";

import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import SpecialProducts from "../Components/SpecialProducts";
import famous1 from "../images/famous-01.png";
import famous2 from "../images/famous-02.webp";
import famous3 from "../images/famous-03.webp";
import famous4 from "../images/famous-04.webp";


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
                <div className="small-banner  position-relative p-2">
                  <img
                    src={catBanner1}
                    className="img-fluid rounded-3"
                    alt="small banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4> SUPPERCHARGED FOR PROS</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From Ksh : 56,000 <br />
                      To 98,000
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src={catBanner2}
                    className="img-fluid rounded-3"
                    alt="small banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sales</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From Ksh : 56,000 <br />
                      To 98,000
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative p-2">
                  <img
                    src={catBanner3}
                    className="img-fluid rounded-3"
                    alt="small banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrivals</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From Ksh : 56,000 <br /> To 98,000
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src={catBanner4}
                    className="img-fluid rounded-3"
                    alt="small banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4> SUPPERCHARGED FOR PROS</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From Ksh : 56,000 <br />
                      To 98,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src={service1} alt="Services"></img>
                  <div>
                    <h6>Free Delivery </h6>
                    <p className="mb-0"> For Orders Above 1000/-</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service2} alt="Services"></img>
                  <div>
                    <h6>Daily Offers</h6>
                    <p className="mb-0">Save Upto 25% Off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service3} alt="Services"></img>
                  <div>
                    <h6>24/7 Customer Support</h6>
                    <p className="mb-0"> Shop With an Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service4} alt="Services"></img>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Wholesale Prices</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src={service5} alt="Services"></img>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0"> 100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex   justify-content-between flex-wrap align-items-center">
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={cameraImage} alt="camera"></img>
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={cameraImage} alt="camera"></img>
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tvImage} alt="camera"></img>
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphoneImage} alt="camera"></img>
                </div>

                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={cameraImage} alt="camera"></img>
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={cameraImage} alt="camera"></img>
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tvImage} alt="camera"></img>
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphoneImage} alt="camera"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous1} className="img-fluid" alt="famous1"/>
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch series 7</h6>
                  <p>From $399 or $16.62/mo</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous2} className="img-fluid" alt="famous2"/>
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch series 7</h6>
                  <p className="text-dark">From $399 or $16.62/mo</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous3} className="img-fluid" alt="famous1"/>
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch series 7</h6>
                  <p className="text-dark">From $399 or $16.62/mo</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous4} className="img-fluid" alt="famous1"/>
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch series 7</h6>
                  <p className="text-dark">From $399 or $16.62/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
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

      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25%">
                    <img src={brand1} alt="brand1"></img>
                  </div>
                  <div className="mx-4 w-25%">
                    <img src={brand2} alt="brand2"></img>
                  </div>
                  <div className="mx-4 w-25%">
                    <img src={brand3} alt="brand3"></img>
                  </div>
                  <div className="mx-4 w-25%">
                    <img src={brand4} alt="brand4"></img>
                  </div>
                  <div className="mx-4 ww-25%">
                    <img src={brand5} alt="brand5"></img>
                  </div>
                  <div className="mx-4 w-25%">
                    <img src={brand6} alt="brand6"></img>
                  </div>
                  <div className="mx-4 w-25%">
                    <img src={brand7} alt="brand7"></img>
                  </div>
                  <div className="mx-4 w-25%">
                    <img src={brand8} alt="brand8"></img>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>

            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
