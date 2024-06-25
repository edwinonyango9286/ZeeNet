import React from "react";

import Meta from "../Components/Meta";
import BreadCrump from "../Components/BreadCrumb";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Enter a new  password."),
  confirmpassword: Yup.string().required("Confirm your password."),
});

const ResetPassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {},
  });

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
                <div>
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="New Password"
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    value={formik.values.password}
                  />
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                </div>

                <div>
                  <CustomInput
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    onChange={formik.handleChange("confirmpassword")}
                    onBlur={formik.handleBlur("confirmpassword")}
                    value={formik.values.confirmpassword}
                  />
                  <div className="error">
                    {formik.touched.confirmpassword &&
                      formik.errors.confirmpassword}
                  </div>
                </div>
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
