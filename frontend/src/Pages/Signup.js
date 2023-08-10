import React from "react";
import Meta from "../Components/Meta";
import BreadCrump from "../Components/BreadCrumb";
import {Link} from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"signup"} />
      <BreadCrump title="signup" />
      <Container className="signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
              <CustomInput type="text" name="firstname" placeholder="First name"/>
              <CustomInput type="text" name="Lastname" placeholder="Last Name"/>
              <CustomInput type="email" name="email" placeholder="Email"/>
              <CustomInput type="tel" name="mobile" placeholder="Mobile Number"/>
              <CustomInput type="password" name="password" placeholder="Password"/>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Create
                    </button>
                    <Link to="/login"  className="button signup">Login</Link>
                </div>

              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
