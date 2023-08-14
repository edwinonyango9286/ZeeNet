import React from "react";
import Meta from "../Components/Meta";
import BreadCrump from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"login"} />
      <BreadCrump title="login" />
      <Container class1="login-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email"/>
               <CustomInput type="password" name="password" placeholder="password"/>
                <div>
                  <Link to="/forgot-password">Forgot Your Password?</Link>
                </div>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0 " type="submit">
                    Login
                  </button>
                  <Link to="/signup" className="button signup">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
};

export default Login;
