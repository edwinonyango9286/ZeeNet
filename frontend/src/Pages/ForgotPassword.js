import React from "react";
import Meta from "../Components/Meta"
import BreadCrump from "../Components/BreadCrumb";
import {Link} from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";

const ForgotPassword = ()=>{
    return(
        <>
        <Meta title={"forgot-password"}/>
        <BreadCrump title="forgot-passsword"/>
        <Container class1="forgot-passwrod-wrapper home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">
                            Reset Your Password
                        </h3>
                        <p className="text-center mt-2 mb-3">We will send you an email to reset your password</p>
                        <form action="" className="d-flex flex-column gap-15">

                            <CustomInput type="email" name="email" placeholder="Email"/>
                            <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                <button className="button border-0" type="submit">Submit</button>
                                <Link to="/login">Cancel</Link>
                            </div>


                        </form>

                    </div>

                </div>

            </div> 

        </Container>
        </>
    )
}

export default ForgotPassword;