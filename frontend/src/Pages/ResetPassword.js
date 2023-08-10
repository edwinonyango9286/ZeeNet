import React from "react";

import Meta from "../Components/Meta";
import BreadCrump from "../Components/BreadCrumb";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"reset-password"} />
      <BreadCrump title="reset-password" />
      <Container class1="reset-password-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="password"
                />

                <CustomInput
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Reset Password</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
