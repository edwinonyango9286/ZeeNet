import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import watch from "../images/watch.jpg";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-4 home-wrapper-2">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">ZeeNet Tech</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark total-price" >
                        Cart
                      </Link>
                    </li>
                    &nbsp;/&nbsp;
                    <li className="breadcrumb-item active " aria-current="page">
                      Information
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active " aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information </h4>
                <p className="user-details">Omollo Dev(omollodev@gmail.com)</p>
                <h4 className="mb-3">Shpping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  
                  <div className="flex-grow-1">
                  <CustomInput type="text" placeholder="First Name"/>                 
                  </div>

                  <div className="flex-grow-1">
                    <CustomInput type="text" placeholder="Last Name"/>                  
                  </div>

                  <div className="w-100">
                    <CustomInput type="text" placeholder="Address"/>
                  </div>

                  <div className="w-100">
                    <CustomInput type="text" placeholder="Apartment"/>                 
                  </div>
                  <div className="flex-grow-1">
                    <CustomInput type="text" placeholder="city"/>                 
                  </div>
                  <div className="flex-gorw-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select County
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <CustomInput type="text" placeholder="Zip Code"/>                   
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <IoArrowBackSharp className="me-2" />
                        Return To Cart
                      </Link>
                      <Link to="/" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10  mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img src={watch} className="img-fluid" alt="watch"></img>
                    </div>
                    <div>
                      <h5 className="total-price">Product</h5>
                      <p className="total-price">more product details</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total ">Ksh 1000</h5>
                  </div>
                </div>
              </div>

              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">SubTotal</p>
                  <p className="total-price">Ksh 1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">Ksh 100</p>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">Ksh 1100</h5>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};
export default Checkout;
