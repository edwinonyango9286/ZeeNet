import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compareImage from "../images/compare.svg";
import wishlistImage from "../images/wishlist.svg";
import accountImage from "../images/user.svg";
import cartImage from "../images/cart.svg";
import menu from "../images/menu.svg"

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white" mb-0>
                {" "}
                Free Shipping Over Ksh 1000 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="Tel:+254 719547267">
                  +254 719547267
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">ZeeNet</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2 p-3">
                  <BsSearch className="fs-6"></BsSearch>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={compareImage} alt="compare"></img>
                    <p className="mb-0">
                      compare
                      <br />
                      products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlistImage} alt="wishlist"></img>
                    <p className="mb-0">
                      favourite
                      <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={accountImage} alt="user"></img>
                    <p className="mb-0">
                      Log in <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={cartImage} alt="cart"></img>
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">200/-</p>
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
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent  border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                        <img src={menu} alt=""></img>
                      <span className="me-5 d-inline-block">  Shop Categories</span>
                      
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" href="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-itmes-center gap-15">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="">Our Store</NavLink>
                    <NavLink to="">Blogs</NavLink>
                    <NavLink to="">Contact</NavLink>
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
