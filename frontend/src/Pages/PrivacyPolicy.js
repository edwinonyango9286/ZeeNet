import React  from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

const PrivacyPolicy = ()=>{
    return(
        <>
        <Meta title={"Privacy Policy"}/>
        <BreadCrumb title="Privacy Policy"/>
        <section className="policy-wrapper p-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div className="policy">

                </div>
            </div>
          </div>
        </div>
      </section>

        </>
    )
}

export default PrivacyPolicy;