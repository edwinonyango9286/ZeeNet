import React from "react";
import newsletterImage from "../images/newsletter.png";
import {Link} from "react-router-dom";
import {BsLinkedin,BsInstagram,BsGithub,BsYoutube} from "react-icons/bs"
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletterImage} alt="newsletter"></img>
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>

            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  arial-aria-describedby="basic-addon2"
                />

                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Address : Moi Avenue Bazaar <br/>Plaza 7th Floor, Crystal Suites,<br/>
                   Suite 718, Nairobi
                </address>
                <a href="tel:+254 0719547267 " className="text-white mt-3 d-block mb-1">Phone : +254 0719547267</a>
                <a href="mailto:technologieszeenet@gmail.com" className="text-white mt-2 d-block mb-0 ">Email : technologieszeenet@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" to="#">
                    <BsLinkedin className="fs-4"></BsLinkedin>
                  </a>
                  <a className="text-white" to="#">
                    <BsInstagram className="fs-4"></BsInstagram>
                  </a>
                  <a className="text-white" to="#">
                    <BsYoutube className="fs-4"></BsYoutube>
                  </a>
                  <a className="text-white" to="#">
                    <BsGithub className="fs-4"></BsGithub>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                  <Link className="text-white py-2 mb-1">Refund Policy</Link>
                  <Link className="text-white py-2 mb-1">Delivery Policy</Link>
                  <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                  <Link className="text-white py-2 mb-1">Blogs</Link>
                </div>
            </div>

            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">About Us</Link>
                  <Link className="text-white py-2 mb-1">FQA</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                  
                </div>


            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Laptops</Link>
                  <Link className="text-white py-2 mb-1">Headphones</Link>
                  <Link className="text-white py-2 mb-1">Tablets</Link>
                  <Link className="text-white py-2 mb-1">Watches</Link>
                </div>

            </div>





          </div>

        </div>


      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center  mb-0 text-white">
                &copy;{new Date().getFullYear()}: Powered by Dev@git-init
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
