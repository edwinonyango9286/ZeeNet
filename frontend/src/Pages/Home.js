import React, { useEffect } from "react";
import mainBanner from "../images/main-banner-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import catBanner1 from "../images/catbanner-01.jpg";
import catBanner2 from "../images/catbanner-02.jpg";
import catBanner3 from "../images/catbanner-03.jpg";
import catBanner4 from "../images/catbanner-04.jpg";
import cameraImage from "../images/camera.jpg";
import tvImage from "../images/tv.jpg";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import BlogCard from "../Components/BlogCard";
import SpecialProducts from "../Components/SpecialProducts";
import famous1 from "../images/famous-01.png";
import famous2 from "../images/famous-02.webp";
import famous3 from "../images/famous-03.webp";
import famous4 from "../images/famous-04.webp";
import Container from "../Components/Container";
import services from "../utils/Data";
import spaeker from "../images/speaker.jpg";
import smartwatch from "../images/smartwatch.avif";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import {
  addToWishlist,
  getAllProducts,
} from "../features/products/productSlice";
import ReactStars from "react-rating-stars-component";
import wishlistIcon from "../images/wish.svg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addCart from "../images/add-cart.svg";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogState = useSelector((state) => state.blog.blogs);
  const productState = useSelector((state) => state.product.products);
  const addProductToWishlist = (id) => {
    dispatch(addToWishlist(id));
  };

  useEffect(() => {
    blogs();
    products();
  }, []);

  const blogs = () => {
    dispatch(getAllBlogs());
  };
  const products = () => {
    dispatch(getAllProducts());
  };

  return (
    <>
      <Container class1="home-wrapper-1 py-5 ">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative py-3">
              <img
                src={mainBanner}
                className="img-fluid rounded-3"
                alt="main banner"
              ></img>
              <div className="main-banner-content position-absolute">
                <h4>SUPPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From Ksh: 56,000 to 98,000</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center py-3">
              <div className="small-banner position-relative">
                <img
                  src={catBanner1}
                  className="img-fluid rounded-3"
                  alt="small banner"
                ></img>
                <div className="small-banner-content position-absolute">
                  <h4>SUPPERCHARGED PROS</h4>
                  <h5>MacBook Pro met M3-</h5>
                  <p>From Ksh: 120,000 to 360,000</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catBanner2}
                  className="img-fluid rounded-3"
                  alt="small banner"
                ></img>
                <div className="small-banner-content position-absolute">
                  <h4>Best Sales</h4>
                  <h5>watchOS 10+</h5>
                  <p>From Ksh: 20,000 to 64,000</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src={catBanner3}
                  className="img-fluid rounded-3"
                  alt="small banner"
                ></img>
                <div className="small-banner-content position-absolute">
                  <h4>New Arrivals</h4>
                  <h5>Apple iPad Air</h5>
                  <p>From Ksh: 56,000 to 120,000</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catBanner4}
                  className="img-fluid rounded-3"
                  alt="small banner"
                ></img>
                <div className="small-banner-content position-absolute">
                  <h4>Bose QuietComfort Ultra</h4>
                  <h5>Sony WH-1000XM5</h5>
                  <p>From Ksh: 10,000 to 16,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {services?.map((service, index) => (
                  <div className="d-flex align-items-center gap-15" key={index}>
                    <div>
                      <img
                        src={service.image}
                        alt="Services"
                        className="img-fluid"
                      ></img>
                      <div>
                        <h6>{service.title}</h6>
                        <p className="mb-0">{service.tagline}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container class1="home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex align-items-center">
                <div className="ms-2">
                  <h6 className="mb-0">Music & Gaming</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src={spaeker} alt="speaker" className="img-fluid" />
              </div>
              <div className="d-flex align-items-center">
                <div className="ms-2">
                  <h6 className="mb-0">Cameras</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src={cameraImage} alt="camera" className="img-fluid" />
              </div>
              <div className="d-flex align-items-center">
                <div className="ms-2">
                  <h6 className="mb-0">Smart TV</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src={tvImage} alt="TV" className="img-fluid" />
              </div>
              <div className="d-flex align-items-center gap-30">
                <div className="ms-2">
                  <h6 className="mb-0">Smart Watch</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src={smartwatch} alt="smartwatch" className="img-fluid" />
              </div>

              <div className="d-flex align-items-center gap-30">
                <div className="ms-2">
                  <h6 className="mb-0">Smart Watch</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src={smartwatch} alt="smartwatch" className="img-fluid" />
              </div>

              <div className="d-flex align-items-center gap-30">
                <div className="ms-2">
                  <h6 className="mb-0">Smart Watch</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src={smartwatch} alt="smartwatch" className="img-fluid" />
              </div>

              <div className="d-flex align-items-center">
                <div className="ms-2">
                  <h6 className="mb-0">Smart Watch</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src={smartwatch} alt="smartwatch" className="img-fluid" />
              </div>

              <div className="d-flex align-items-center ">
                <div className="ms-2">
                  <h6 className="mb-0">Smart Watch</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src={smartwatch} alt="smartwatch" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper PY-5  home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => addProductToWishlist(item?._id)}
                        >
                          <img src={wishlistIcon} alt="Wishlist Image" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0]?.url}
                          className="img-fluid mx-auto "
                          alt="Product Image"
                          width={160}
                        />
                        <img
                          src={item?.images[0]?.url}
                          className="img-fluid mx-auto "
                          alt="Product Image"
                          width={160}
                        />
                      </div>

                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={20}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">Ksh {item?.price}</p>
                      </div>

                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img
                              src={prodcompare}
                              alt="Compare Product Image"
                            />
                          </button>

                          <button className="border-0 bg-transparent">
                            <img
                              src={view}
                              alt="View Product Image"
                              onClick={() => navigate("/product/" + item?._id)}
                            />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addCart} alt="Add to cart Image" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous1} className="img-fluid" alt="famous1" />
              <div className="famous-content position-absolute">
                <h5 className="text-white text-sm">Big Screen</h5>
                <h6 className="text-white text-sm">Smart Watch series 7</h6>
                <p className="text-white text-sm">From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous2} className="img-fluid" alt="famous2" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark text-sm">Big Screen</h5>
                <h6 className="text-dark text-sm">Smart Watch series 7</h6>
                <p className="text-dark text-sm">From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={famous3} className="img-fluid" alt="famous1" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark text-sm">Big Screen</h5>
                <h6 className="text-dark text-sm">Smart Watch series 7</h6>
                <p className="text-dark text-sm">From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>

          <div className="col-3">
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

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "special") {
                return (
                  <SpecialProducts
                    key={index}
                    id={item?._id}
                    brand={item?.brand}
                    title={item?.title}
                    totalrating={item?.totalrating.toString()}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                    image={item?.images[0]?.url}
                  />
                );
              }
            })}
        </div>
      </Container>

      <Container class1="popular-wrapper  py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags === "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => addProductToWishlist(item?._id)}
                        >
                          <img src={wishlistIcon} alt="Wishlist Image" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0]?.url}
                          className="img-fluid mx-auto "
                          alt="Product Image"
                          width={160}
                        />
                        <img
                          src={item?.images[0]?.url}
                          className="img-fluid mx-auto "
                          alt="Product Image"
                          width={160}
                        />
                      </div>

                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={20}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">Ksh {item?.price}</p>
                      </div>

                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img
                              src={prodcompare}
                              alt="Compare Product Image"
                            />
                          </button>

                          <button className="border-0 bg-transparent">
                            <img
                              src={view}
                              alt="View Product Image"
                              onClick={() => navigate("/product/" + item?._id)}
                            />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addCart} alt="Add to cart Image" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25%">
                  <img src={brand1} className="img-fluid" alt="brand1"></img>
                </div>
                <div className="mx-4 w-25%">
                  <img src={brand2} className="img-fluid" alt="brand2"></img>
                </div>
                <div className="mx-4 w-25%">
                  <img src={brand3} className="img-fluid" alt="brand3"></img>
                </div>
                <div className="mx-4 w-25%">
                  <img src={brand4} className="img-fluid" alt="brand4"></img>
                </div>
                <div className="mx-4 ww-25%">
                  <img src={brand5} className="img-fluid" alt="brand5"></img>
                </div>
                <div className="mx-4 w-25%">
                  <img src={brand6} className="img-fluid" alt="brand6"></img>
                </div>
                <div className="mx-4 w-25%">
                  <img src={brand7} className="img-fluid" alt="brand7"></img>
                </div>
                <div className="mx-4 w-25%">
                  <img src={brand8} className="img-fluid" alt="brand8"></img>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="col-6 d-flex  gap-15 items-center">
            <BlogCard data={blogState ? blogState : []} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
