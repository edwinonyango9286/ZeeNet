import React from "react";
import { Navlink, Link } from "react-router-dom";
import {BsSearch}  from "react-icons/bs"
import compareImage from "../images/compare.png";
import wishlistImage from "../images/wishlist.png";
import accountImage from "../images/useraccount.png";
import cartImage from "../images/cart.jpg"

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
                  <Link>
                  <img src={compareImage} alt="compare">
                  </img>
                  <p>compare<br/>products</p>
                  </Link>
                </div>
                <div>
                  <Link>
                  <img src={wishlistImage} alt="wishlist">
                  </img>
                    <p>favourite<br/> wishlist</p>
                  </Link>
                </div>

                <div>
                  <Link>
                  <img src={accountImage} alt="user">
                  </img>
                  <p> Log in <br/>My Account</p>
                  </Link>
                </div>
                  
                  <div>
                    <Link>
                    <img src={cartImage} alt="cart">
                    </img>
                    <p>cart</p>
                    </Link>


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
