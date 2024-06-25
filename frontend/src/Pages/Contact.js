import React, { useEffect } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { AiTwotoneHome, AiTwotoneMail } from "react-icons/ai";
import { BsTelephoneFill, BsFillInfoCircleFill } from "react-icons/bs";
import Container from "../Components/Container";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createEnquiry } from "../features/contact/contactSlice";

let contactSchema = Yup.object().shape({
  name: Yup.string().required("Enter your name."),
  email: Yup.string().email("Invalid email").required("Enter your email."),
  mobile: Yup.string()
    .matches(/^(\+?254|0)?(7\d{8})$/, "Enter a valid phone number.")
    .required("Enter your Phone Number."),
  comment: Yup.string().required("Enter an enquiry."),
});



const Contact = () => {
  const dispatch = useDispatch();


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      dispatch(createEnquiry(values));
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.546452429066!2d34.562022686004646!3d-0.004763603204947037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa97bdc7a35f1%3A0x20276056a9ac87c9!2sMaseno%20University!5e0!3m2!1sen!2ske!4v1714723305991!5m2!1sen!2ske"
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
                <h3 className="contact-title mb-4">Contact</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      id="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className="error">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                      id="mobile"
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>

                  <div>
                    <textarea
                      className="w-100 form-control"
                      name="comment"
                      id="comment"
                      cols={30}
                      rows={4}
                      placeholder="Comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    />
                    <div className="error">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title"> Get In Touch With Us</h3>

                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex  align-items-center  gap-15">
                      <AiTwotoneHome className="fs-5" />
                      <address className="mb-0">
                        Address : Moi Avenue Bazaar Plaza 7th Floor, Crystal
                        Suites,
                      </address>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <BsTelephoneFill className="fs-5" />
                      <a href="tel:+254 0719547267">Phone : +254 0719547267</a>
                    </li>

                    <li className="mb-3 d-flex align-items-center gap-15">
                      <AiTwotoneMail className="fs-5" />
                      <a href="mailto:technologieszeenet@gmail.com">
                        Email : technologieszeenet@gmail.com
                      </a>
                    </li>

                    <li className="mb-3 d-flex align-items-center gap-15">
                      <BsFillInfoCircleFill className="fs-5" />
                      <p className="mb-0">Monday To Sunday 6am to 8pm </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
