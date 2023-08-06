import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb  from "../Components/BreadCrumb";


const  RefundPolicy = ()=>{
    return (
        <>
        <Meta title={"Refund Policy"}/>
        <BreadCrumb title="Refund Policy"/>
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

export default RefundPolicy;

