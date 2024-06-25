import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const shippingSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter your first name."),
  lastName: Yup.string().required("Enter your last name."),
  address: Yup.string().required("Enter your address"),
  city: Yup.string().required("Enter your city."),
  other: Yup.string().required("Enter your apartment, suite, etc."),
  state: Yup.string().required("Enter your state"),
  country: Yup.string().required("Select your country."),
  pincode: Yup.string().required("Enter your pincode"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cartProducts);
  const [totalAmount, setTotalAmount] = useState(null);
  

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      other: "",
      state: "",
      country: "",
      pincode: "",
    },

    validationSchema: shippingSchema,
    onSubmit: (values) => {
      alert(values);
    },
  });

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
                    <Link to="/cart" className="text-dark total-price">
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
              <h4 className="mb-3">Delivery Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
                onSubmit={formik.handleSubmit}
              >
                <div className="w-100">
                  <select
                    name="country"
                    className="form-control form-select"
                    id="country"
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                    value={formik.values.country}
                  >
                    <option>Select Country.</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Uganda">Uganda</option>
                  </select>
                  <div className="error ms-2">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <CustomInput
                    type="type"
                    placeholder="First Name."
                    name="firstName"
                    id="firstName"
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    value={formik.values.firstName}
                  />
                  <div className="error ms-2">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    placeholder="Last Name."
                    name="firstName"
                    id="firstName"
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    value={formik.values.lastName}
                  />
                  <div className="error ms-2">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>

                <div className="w-100">
                  <CustomInput
                    type="text"
                    placeholder="Address."
                    name="address"
                    id="address"
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                    value={formik.values.address}
                  />

                  <div className="error ms-2">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>

                <div className="w-100">
                  <CustomInput
                    type="text"
                    placeholder="Apartment, suit, etc."
                    name="other"
                    id="other"
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                    value={formik.values.city}
                  />
                  <div className="error ms-2">
                    {formik.touched.other && formik.errors.other}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    placeholder="City."
                    name="city"
                    id="city"
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                    value={formik.values.city}
                  />
                  <div className="error ms-2">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-gorw-1">
                  <select
                    name="state"
                    className="form-control form-select"
                    id="state"
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                    value={formik.values.state}
                  >
                    <option value="" selected disabled>
                      Select State.
                    </option>
                    <option value="" selected>
                      Katani
                    </option>
                  </select>
                  <div className="error ms-2">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <CustomInput
                    type="text"
                    placeholder="Pincode."
                    id="pincode"
                    name="pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />

                  <div className="error ms-2">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
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
                    <button className="button border-0" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10  mb-2 align-items-center"
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            src={item?.productId?.images[0]?.url}
                            className="img-fluid"
                            width={100}
                            height={100}
                            alt="Product Image"
                          ></img>
                        </div>
                        <div>
                          <h5 className="total-price">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">{item?.color?.title}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">
                          Ksh {item?.quantity * item?.price}
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">SubTotal</p>
                <p className="total-price">Ksh {totalAmount}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">Ksh {500}</p>
              </div>
            </div>

            

            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">Ksh {totalAmount + 500} </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Checkout;
