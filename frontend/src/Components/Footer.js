import React from "react";
import newsletterImage from "../images/newsletter.png";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-md">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-10 align-items-center">
                <img src={newsletterImage} className="img-fluid" alt="newsletter"></img>
                <h5 className="text-white">Sign Up for Newsletter</h5>
              </div>
            </div>

            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  arial-aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-2">
        <div className="container-md">
          <div className="row">
            <div className="col-4">
              <h5 className="text-white">Contact Us</h5>
              <div>
                <address className="text-white">
                  Address : Moi Avenue Bazaar <br />
                  Plaza 7th Floor, Crystal Suites,
                  <br />
                  Suite 718, Nairobi
                </address>
                <a
                  href="tel:+254 0719547267 "
                  className="text-white d-block "
                >
                  Phone : +254 0719547267
                </a>
                <a
                  href="mailto:technologieszeenet@gmail.com"
                  className="text-white d-block"
                >
                  Email : technologieszeenet@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" to="#">
                    <BsLinkedin className="fs-6"></BsLinkedin>
                  </a>
                  <a className="text-white" to="#">
                    <BsInstagram className="fs-6"></BsInstagram>
                  </a>
                  <a className="text-white" to="#">
                    <BsYoutube className="fs-6"></BsYoutube>
                  </a>
                  <a className="text-white" to="#">
                    <BsGithub className="fs-6"></BsGithub>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <h5 className="text-white">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link  to="/privacy-policy" className="text-white">Privacy Policy</Link>
                <Link  to="/refund-policy" className="text-white">Refund Policy</Link>
                <Link  to='/shipping-policy' className="text-white">Shipping Policy</Link>
                <Link to="/terms-and-conditions" className="text-white">Terms & Conditions</Link>
                <Link className="text-white">Blogs</Link>
              </div>
            </div>

            <div className="col-3">
              <h5 className="text-white">Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white">About Us</Link>
                <Link className="text-white">FQA</Link>
                <Link className="text-white">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white">Laptops</Link>
                <Link className="text-white">Headphones</Link>
                <Link className="text-white">Tablets</Link>
                <Link className="text-white">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-2">
        <div className="container-md">
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
