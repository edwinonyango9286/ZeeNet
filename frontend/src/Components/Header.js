import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compareImage from "../images/compare.svg";
import wishlistImage from "../images/wishlist.svg";
import accountImage from "../images/user.svg";
import cartImage from "../images/cart.svg";
import menu from "../images/menu.svg";
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'; // Iimport { NavLink } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';



import "../custom-css/headers.css";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
    {/* header-top-strip === responsive */}
      <header className="header-top-strip py-2">
        <div className="container-md">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0" >
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
{/* header-uppper py2 == responsive */}
      <header className="header-upper py-2">
        <div className="container-md">
          
            
            
        <div className="row">
          <div className="col-md-2">
            <h2>
              <Link className="text-white logo">ZeeNet</Link>
            </h2>
          </div>


          <div className="col-md-3 ">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search Product Here..."
                aria-label="Search Product Here"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2 p-2">
                <BsSearch className="fs-6"></BsSearch>
              </span>
            </div>
          </div>

          <div className="col-md-5  offset-md-2" id="">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div>
                <Link to="/compare-products" className="d-flex align-items-center gap-10 text-white">
                  <img src={compareImage} alt="compare"></img>
                  <h6 className="mb-0" id="hidden">
                    compare
                    <br />
                    products
                  </h6>
                </Link>
              </div>
              <div>
                <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                  <img src={wishlistImage} alt="wishlist"></img>
                  <h6 className="mb-0" id="hidden">
                    favourite
                    <br /> wishlist
                  </h6>
                </Link>
              </div>
              <div>
                <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                  <img src={accountImage} alt="user"></img>
                  <h6 className="mb-0" id="hidden">
                    Log in <br />
                    My Account
                  </h6>
                </Link>
              </div>
              <div>
                <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                  <img src={cartImage} alt="cart"></img>
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <h6 className="mb-0" id="hidden"> 200/-</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          
        </div>


        </div>

        
      </header>
      <header className="header-bottom py-1">
        <div className="container-md">
          <div className="row">
            <div className="col">
              <div className="menu-bottom d-flex align-items-center justify-content-between">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt=""></img>
                      <span className="me-5 d-inline-block">Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link className="dropdown-item text-white" to="">
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

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Use navbar-dark for dark background */}
  <div className="container">
    <button
      className="navbar-toggler"
      type="button"
      onClick={toggleNav}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" onClick={toggleNav}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/store" onClick={toggleNav}>Store</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blogs" onClick={toggleNav}>Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" onClick={toggleNav}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
             </div>
            </div>
          </div> 
        </div>
      </header>
    </>
  );
};

export default Header;
