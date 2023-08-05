import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { AiTwotoneHome,AiTwotoneMail, } from "react-icons/ai";
import {BsTelephoneFill,BsFillInfoCircleFill} from "react-icons/bs";

 const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.686237507951!2d36.94822240976944!3d-1.3649301986164109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0da2461e461d%3A0x1a363ee27ba4e493!2sKatani%20Villas!5e0!3m2!1sen!2ske!4v1691126175106!5m2!1sen!2ske"
                width="600"
                height="450"
                className="border-0 w-100 "
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        className="w-100 form-control"
                        name=""
                        id=""
                        cols={30}
                        rows={4}
                        placeholder="Comment"
                      />
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title"> Get In Touch With Us</h3>

                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex  align-items-center  gap-15"><AiTwotoneHome className="fs-5"/>
                      <address className="mb-0">
                      Address : Moi Avenue Bazaar 
                  Plaza 7th Floor, Crystal Suites,
                        </address></li>
                      <li className="mb-3 d-flex align-items-center gap-15"><BsTelephoneFill className="fs-5"/>
                      <a href="tel:+254 0719547267" >Phone:+254 0719547267</a>
                      </li>

                      <li className="mb-3 d-flex align-items-center gap-15"><AiTwotoneMail className="fs-5"/>
                      <a href="mailto:technologieszeenet@gmail.com">Email:technologieszeenet@gmail.com</a>
                      
                      </li>

                      <li className="mb-3 d-flex align-items-center gap-15"><BsFillInfoCircleFill className="fs-5"/> 
                      <p className="mb-0">Monday To Sunday 6am to 8pm </p>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
