import React from "react";
import CustomInput from "../Components/CustomInput";

const ForgotPassword = ()=>{
    return(
        <>
         <div className="py-2" style={{
                background: "#f5f5f7",
                minHeight: "100vh"
            }}>
                <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                    <h5 className="text-center title">Forgot Password</h5>
                    <p className="text-center">Please enter a registered email to proceed.</p>
                    <form action="">
                        <CustomInput type="email" label="email" id="email"/>
                        <button className="button border-0 w-100" type="submit">Send Link</button>

                    </form>

                </div>
            </div>
      
        </>
    )
}

export default ForgotPassword;