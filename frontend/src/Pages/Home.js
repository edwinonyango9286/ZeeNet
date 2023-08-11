import React from "react";
import mainBanner from "../images/main-banner-1.jpg";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import catBanner1 from "../images/catbanner-01.jpg";
import catBanner2 from "../images/catbanner-02.jpg";
import catBanner3 from "../images/catbanner-03.jpg";
import catBanner4 from "../images/catbanner-04.jpg";
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
import Container from "../Components/Container";
import services from "../utils/Data"
import spaeker from "../images/speaker.jpg"
import smartwatch from "../images/smartwatch.avif"
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-3">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src={mainBanner}
                className="img-fluid rounded-3"
                alt="main banner"
              ></img>
              <div className="main-banner-content position-absolute">
                <h5> SUPPERCHARGED FOR PROS</h5>
                <h6>iPad S13+ Pro.</h6>
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
                  <h4> SUPPERCHARGED PROS</h4>
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
                  <h4> SUPPERCHARGED PROS</h4>
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
      </Container>



      <Container class1="home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i,j)=>{
                return( 
                  <div className="d-flex align-items-center gap-15" key={j}>
                <img src={i.image} alt="Services"></img>
                <div>
                  <h6>{i.title}</h6>
                  <p className="mb-0">{i.tagline}</p>
                </div>
              </div>
                )
              })}
              
            </div> 
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex   justify-content-between flex-wrap align-items-center">
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={spaeker} alt="camera"></img>
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
                <img src={smartwatch} alt="camera"></img>
              </div>

              <div className="d-flex  align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={spaeker} alt="camera"></img>
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
                <img src={smartwatch} alt="smartwatch"></img>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper  home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </Container>

      <Container class1="famous-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous1} className="img-fluid" alt="famous1" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch series 7</h6>
                <p>From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous2} className="img-fluid" alt="famous2" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch series 7</h6>
                <p className="text-dark">From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous3} className="img-fluid" alt="famous1" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch series 7</h6>
                <p className="text-dark">From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous4} className="img-fluid" alt="famous1" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch series 7</h6>
                <p className="text-dark">From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper  home-wrapper-2">
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

      <Container class1="marquee-wrapper ">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-1 w-20%">
                  <img src={brand1} className="img-fluid" alt="brand1"></img>
                </div>
                <div className="mx-1 w-20%">
                  <img src={brand2} className="img-fluid" alt="brand2"></img>
                </div>
                <div className="mx-1 w-20%">
                  <img src={brand3} className="img-fluid" alt="brand3"></img>
                </div>
                <div className="mx-1 w-20%">
                  <img src={brand4} className="img-fluid" alt="brand4"></img>
                </div>
                <div className="mx-1 ww-20%">
                  <img src={brand5} className="img-fluid" alt="brand5"></img>
                </div>
                <div className="mx-1 w-20%">
                  <img src={brand6} className="img-fluid" alt="brand6"></img>
                </div>
                <div className="mx-1 w-20%">
                  <img src={brand7} className="img-fluid" alt="brand7"></img>
                </div>
                <div className="mx-1 w-20% ">
                  <img src={brand8} className="img-fluid" alt="brand8"></img>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard></BlogCard>
          </div>
          <div className="col-3">
            <BlogCard></BlogCard>
          </div>
          <div className="col-3">
            <BlogCard></BlogCard>
          </div>
          <div className="col-3">
            <BlogCard></BlogCard>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
