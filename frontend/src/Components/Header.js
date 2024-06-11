import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compareImage from "../images/compare.svg";
import wishlistImage from "../images/wishlist.svg";
import accountImage from "../images/user.svg";
import cartImage from "../images/cart.svg";
import menu from "../images/menu.svg";


const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 d-none d-sm-block">
              <p className="text-white mb-0">
                Free Delivery for orders above Ksh100,000 & Free Returns
              </p>
            </div>
            <div className="col-6 text-center">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+254 719547267">
                  +254 719547267
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3 ">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white logo">
                  ZeeNet.
                </Link>
              </h2>
            </div>

            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6"></BsSearch>
                </span>
              </div>
            </div>

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-products"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src={compareImage}
                      alt="compare"
                      className="img-fluid"
                    ></img>
                    <p className="mb-0" id="hidden">
                      Compare
                      <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src={wishlistImage}
                      alt="wishlist"
                      className="img-fluid"
                    ></img>
                    <p className="mb-0" id="hidden">
                      Favourite
                      <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src={accountImage}
                      alt="user"
                      className="img-fluid"
                    ></img>
                    <p className="mb-0" id="hidden">
                      Log in <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cartImage} alt="cart" className="img-fluid"></img>
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0" id="hidden">
                        500/-
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15  me-5 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" className="img-fluid"></img>
                      <span className=" me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Cameras and videos
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Computers & Laptops
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Home Appliances
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Handbag
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Smart Phones
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Portable Speakers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Music & Gaming
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">home</NavLink>
                    <NavLink to="/store">our store</NavLink>
                    <NavLink to="/blogs">blogs</NavLink>
                    <NavLink to="/contact">contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};


export default Header;
