import React from "react";
import CustomInput from "../Components/CustomInput";

const ResestPassword =()=>{

    return(
        <>
         <div className="py-2" style={{
                background: "#f5f5f7",
                minHeight: "100vh"
            }}>
                <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                    <h5 className="text-center">Reset Password</h5>
                    <p className="text-center">Create a new password.</p>
                    <form action="">
                        <CustomInput type="password" label="New Password" id="pass"/>
                        <CustomInput type="password" label="Confirm Password" id="confirmpass"/>
                        <button className="button border-0 w-100" type="submit">Reset Password</button>
                    </form>
                </div>
            </div>
        </>
    )
    }

    export default ResestPassword;