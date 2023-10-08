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
<Container className="home-wrapper-1 py-3">
  <div className="row">
    <div className="col-md-6">
      <div className="main-banner position-relative p-3">
        <img
          src={mainBanner}
          className="img-fluid rounded-3"
          alt="main banner"
        ></img>
        <div className="main-banner-content position-absolute">
          <h5 className="">SUPPERCHARGED FOR PROS</h5>
          <h6 className="">iPad S13+ Pro.</h6>
          <p className="">From Ksh: 56,000 to 98,000</p>
          <Link className="btn btn-primary">BUY NOW</Link>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="d-flex flex-wrap justify-content-between align-items-start">
        <div className="small-banner position-relative p-2">
          <img
            src={catBanner1}
            className="img-fluid rounded-3"
            alt="small banner"
          ></img>
          <div className="small-banner-content position-absolute">
            <h4 className="">SUPPERCHARGED PROS</h4>
            <h5 className="">iPad S13+ Pro.</h5>
            <p className="">From Ksh: 56,000 to 98,000</p>
          </div>
        </div>
        <div className="small-banner position-relative p-2">
          <img
            src={catBanner2}
            className="img-fluid rounded-3"
            alt="small banner"
          ></img>
          <div className="small-banner-content position-absolute">
            <h4 className="">Best Sales</h4>
            <h5 className="">iPad S13+ Pro.</h5>
            <p className="">From Ksh: 56,000 to 98,000</p>
          </div>
        </div>

        <div className="small-banner position-relative p-2">
          <img
            src={catBanner3}
            className="img-fluid rounded-3"
            alt="small banner"
          ></img>
          <div className="small-banner-content position-absolute">
            <h4 className="">New Arrivals</h4>
            <h5 className="">Buy iPad Air</h5>
            <p className="">From Ksh: 56,000 to 98,000</p>
          </div>
        </div>
        <div className="small-banner position-relative p-2">
          <img
            src={catBanner4}
            className="img-fluid rounded-3"
            alt="small banner"
          ></img>
          <div className="small-banner-content position-absolute">
            <h4 className="">SUPPERCHARGED PROS</h4>
            <h5 className="">iPad S13+ Pro.</h5>
            <p className="">From Ksh: 56,000 to 98,000</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>



<Container className="home-wrapper-2 py-3">
  <div className="row">
    {services?.map((service, index) => (
      <div className="col-md-4 col-sm-6 col-12 mb-3" key={index}>
        <div className="d-flex align-items-center gap-15">
          <img src={service.image} alt="Services"></img>
          <div>
            <h6>{service.title}</h6>
            <p className="mb-0">{service.tagline}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</Container>

<Container className="home-wrapper-2 py-3">
  <div className="row">
    <div className="col-12 col-md-6 col-lg-3">
      <div className="d-flex align-items-center mb-3">
        <img src={spaeker} alt="speaker" />
        <div className="ms-2">
          <h6 className="mb-0">Music & Gaming</h6>
          <p className="mb-0">10 Items</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-3">
      <div className="d-flex align-items-center mb-3">
        <img src={cameraImage} alt="camera" />
        <div className="ms-2">
          <h6 className="mb-0">Cameras</h6>
          <p className="mb-0">10 Items</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-3">
      <div className="d-flex align-items-center mb-3">
        <img src={tvImage} alt="TV" />
        <div className="ms-2">
          <h6 className="mb-0">Smart TV</h6>
          <p className="mb-0">10 Items</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-3">
      <div className="d-flex align-items-center mb-3">
        <img src={smartwatch} alt="smartwatch" />
        <div className="ms-2">
          <h6 className="mb-0">Smart Watch</h6>
          <p className="mb-0">10 Items</p>
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
{/* responsive */}
<Container className="famous-wrapper py-3 home-wrapper-2">
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="famous-card position-relative">
        <img src={famous1} className="img-fluid" alt="famous1" />
        <div className="famous-content position-absolute">
          <h5 className="text-dark text-sm">Big Screen</h5>
          <h6 className="text-dark text-sm">Smart Watch series 7</h6>
          <p className="text-dark text-sm">From $399 or $16.62/mo</p>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="famous-card position-relative">
        <img src={famous2} className="img-fluid" alt="famous2" />
        <div className="famous-content position-absolute">
          <h5 className="text-dark text-sm">Big Screen</h5>
          <h6 className="text-dark text-sm">Smart Watch series 7</h6>
          <p className="text-dark text-sm">From $399 or $16.62/mo</p>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="famous-card position-relative">
        <img src={famous3} className="img-fluid" alt="famous1" />
        <div className="famous-content position-absolute">
          <h5 className="text-dark text-sm">Big Screen</h5>
          <h6 className="text-dark text-sm">Smart Watch series 7</h6>
          <p className="text-dark text-sm">From $399 or $16.62/mo</p>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="famous-card position-relative">
        <img src={famous4} className="img-fluid" alt="famous1" />
        <div className="famous-content position-absolute">
          <h5 className="text-dark text-sm">Big Screen</h5>
          <h6 className="text-dark text-sm">Smart Watch series 7</h6>
          <p className="text-dark text-sm">From $399 or $16.62/mo</p>
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
<div className="row ">
    
    
    <div className="col-md-6 col-lg-3">
      <SpecialProducts/>  
    </div>
    <div className="col-md-6 col-lg-3">
      <SpecialProducts/>  
    </div>
    <div className="col-md-6 col-lg-3">
      <SpecialProducts/>  
    </div>
    <div className="col-md-6 col-lg-3">
      <SpecialProducts/>  
    </div>
  
</div>
</Container>


<Container className="popular-wrapper home-wrapper-2">
  <div className="row">
    <div className="col-12">
      <h3 className="section-heading">Our Popular Products</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-lg-3">
      <ProductCard></ProductCard>
    </div>
    <div className="col-md-6 col-lg-3">
      <ProductCard></ProductCard>
    </div>
    <div className="col-md-6 col-lg-3">
      <ProductCard></ProductCard>
    </div>
    <div className="col-md-6 col-lg-3">
      <ProductCard></ProductCard>
    </div>
  </div>
</Container>




<Container class1="marquee-wrapper ">
<div className="row">
  <div className="col-md-12">
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
    
    <div className="col-md-4">
      <BlogCard></BlogCard>
    </div>
    <div className="col-md-4">
      <BlogCard></BlogCard>
    </div>
    <div className="col-md-4">
      <BlogCard></BlogCard>
    </div>
  
  </div>
</Container>
    </>
  );
};

export default Home;
