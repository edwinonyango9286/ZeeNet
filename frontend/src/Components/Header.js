import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compareImage from "../images/compare.svg";
import wishlistImage from "../images/wishlist.svg";
import accountImage from "../images/user.svg";
import cartImage from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Extra small: 100%
// Small: 540px
// Medium: 720px
// Large: 960px
// Extra Large: 1140px
// XXL: 1320px

// (Extra Small): <576px
// sm (Small): ≥576px
// md (Medium): ≥768px
// lg (Large): ≥992px
// xl (Extra Large): ≥1200px
// xxl (Extra Extra Large): ≥1400px

const Header = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.auth.cartProducts);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      setTotal(sum);
    }
  }, [cartState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="header-top container-fluid py-2">
        <div className="row">
          <div className="col-12 d-flex">
            <div className="d-none col-6 d-lg-block d-xl-block  d-xxl-block d-flex  justify-content-center align-items-center">
              <p className="text-white mb-0 header-info ">
                Free delivery & returns for all our customers.
              </p>
            </div>
            <div className="col-12  col-md-6 col-lg-6  d-flex  justify-content-center  mx-auto ml-auto gap-15 justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
              <div className="">
                <p className="text-white mb-0 header-info">
                  Hotline:
                  <a className="text-white" href="tel:+254 719547267">
                    +254 719547267
                  </a>
                </p>
              </div>
              <div>
                <p className="header-info text-white mb-0 d-none d-md-block d-lg-block d-xxl-block">
                  English
                </p>
              </div>
              <div>
                <p className="header-info text-white mb-0 d-none d-md-block d-lg-block d-xxl-block ">
                  Kenya Shillings KES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-upper py-2  container-fluid ">
        <div className="row align-items-center">
          <div className="col-6 col-lg-2 col-xxl-2 col-md-2">
            <h2>
              <Link to="/" className="text-white logo">
                ZEENET.
              </Link>
            </h2>
          </div>

          <div className="d-none d-md-block d-lg-block  col-md-5 col-lg-5 col-xxl-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search product here..."
                aria-label="Search Product Here..."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-2" id="basic-addon2">
                <BsSearch className="fs-6"></BsSearch>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-5 col-xxl-5 col-lg-5">
            <div className="header-upper-links d-flex align-items-center justify-content-center gap-10">
              <div>
                <Link
                  to="/compare-products"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img
                    src={compareImage}
                    alt="Compare Image"
                    className="img-fluid"
                  ></img>
                  <p
                    className="mb-0 d-none d-lg-block d-xl-block d-xxl-block"
                    id="hidden"
                  >
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
                    alt="Wishlist Image"
                    className="img-fluid"
                  ></img>
                  <p
                    className="mb-0 d-none d-lg-block d-xl-block d-xxl-block"
                    id="hidden"
                  >
                    Favourite
                    <br /> Wishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  to={authState?.user === null ? "/login" : "/my-profile"}
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img
                    src={accountImage}
                    alt="Account Image"
                    className="img-fluid"
                  />
                  {authState?.user === null ? (
                    <p
                      className="mb-0 d-none  d-lg-block d-xl-block d-xxl-block"
                      id="hidden"
                    >
                      Log in
                      <br />
                      My Account
                    </p>
                  ) : (
                    <p
                      className="mb-0 d-none  d-lg-block d-xl-block d-xxl-block"
                      id="hidden"
                    >
                      Welcome
                      <br />
                      {authState?.user?.firstname}
                    </p>
                  )}
                </Link>
              </div>

              <div>
                <Link
                  to="/cart"
                  className="d-flex align-items-center justify-content-between text-white gap-10"
                >
                  <img
                    src={cartImage}
                    alt="Cart Image"
                    className="img-fluid"
                    style={{
                      height: "30px",
                      width: "25px",
                    }}
                  ></img>
                  <div className="d-flex flex-column">
                    <span className="badge  rounded-fill bg-white text-dark p-1">
                      {cartState?.length ? cartState?.length : 0}
                    </span>
                    <p className="m-0 p-0 cart-total " id="hidden">
                      {total ? total : 0}/=
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-bottom  container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center justify-content-between gap-10 col-6">
              <div className="col-6">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15  me-5 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={menu} alt="Menu Image" className="img-fluid" />
                    <span className="d-none d-md-block d-lg-block  d-xl-block d-xxl-block d-inline-block">
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


              <div className="menu-links col-6">
                <div className="d-flex align-items-center justify-content-between gap-10">
                  <NavLink to="/">home</NavLink>
                  <NavLink to="/store">store</NavLink>
                  <NavLink to="/myorders">orders</NavLink>
                  <NavLink to="/blogs">blogs</NavLink>
                  <NavLink to="/contact">contact</NavLink>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className=" border-0  bg-transparent text-white text-uppercase"
                    style={{ fontSize:"14px" ,fontWeight:"400"}}
                  >
                    Logout
                  </button>
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
