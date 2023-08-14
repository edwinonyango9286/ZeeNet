
import React from "react";
import CustomInput from "../Components/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <>
            <div className="py-2" style={{
                background: "#f5f5f7",
                minHeight: "100vh"
            }}>
                <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                    <h5 className="text-center">Login</h5>
                    <p className="text-center">Login to your account to continue.</p>
                    <form action="">
                        <CustomInput type="text" label="email" id="email" />
                        <CustomInput type="password" label="password" id="pass" />
                        <div className="d-flex align-item-center">
                            <Link to="/admin" className="button signup text-white w-100">Login</Link>
                        </div>
                        <div className="mt-3 text-end">
                            <Link to="/forgot-password" className="text-decoration-none text-dark">Forgot Password</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;