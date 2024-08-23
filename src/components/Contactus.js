import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./header-nav.css";
toast.configure();

function Contactus() {
  const [contactus, setContactState] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function postContactUs(e) {
    e.preventDefault();
    setloading(true);
    if (
      (contactus.name !== "") &
      (contactus.email !== "") &
      (contactus.message !== "")
    ) {
      Axios.post(
        `${process.env.React_App_Api_Url}/api/contactus/create_contact_us`,
        {
          name: contactus.name,
          email: contactus.email,
          message: contactus.message,
        }
      )
        .then((response) => {
          setloading(false);
          toast.success(
            "Contact us request has been submitted. Our team member will contact you soon."
          );
        })
        .catch((err) => {
          toast.error(`${err.response.data.message}`);
          setloading(false);
        });
    } else {
      setloading(false);
      toast.error("All feilds are required.");
    }
  }
  function onUpdateUser(e) {
    const newUserProfile = { ...contactus };
    newUserProfile[e.target.id] = e.target.value;
    setContactState(newUserProfile);
  }

  return (
    <>
      {loading ? <div className="loading"></div> : ""}
      <div className="section-bg">
        <div className="overlay">
          <div className="page-title">
            <h1>Contact</h1>
            <div className="bc">
              <h4>Home</h4>
              <h4>|</h4>
              <h4>Contact</h4>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center gx-lg-5">
            <div className="col-lg-3 custom-width">
              <div className="contact-box">
                <div className="contactbox-top">
                  <i className="fa-solid fa-phone"></i>
                  <h3>Customer Service Phone Number</h3>
                  <a href="tel:+88001404000734">(+880) 01404-000734</a>

                  <span className="fa-solid fa-phone"></span>
                </div>

                <div className="contactbox-footer">
                  <a href="#">
                    <i className="fa-solid fa-phone"></i>
                    <h5>Call Us Now</h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 custom-width">
              <div className="contact-box">
                <div className="contactbox-top">
                  <i className="fa-solid fa-envelope"></i>
                  <h3>For General Queries Email Address</h3>
                  <a href="mailto:info@airsyl.com">info@airsyl.com</a>

                  <span className="fa-solid fa-envelope"></span>
                </div>

                <div className="contactbox-footer">
                  <a href="#">
                    <i className="fa-solid fa-envelope"></i>
                    <h5>Mail Us Now</h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 custom-width">
              <div className="contact-box">
                <div className="contactbox-top">
                  <i className="fa-solid fa-envelope"></i>
                  <h3>Customer Support Email Address</h3>
                  <a href="mailto:support@airsyl.com">support@airsyl.com</a>

                  <span className="fa-solid fa-envelope"></span>
                </div>

                <div className="contactbox-footer">
                  <a href="#">
                    <i className="fa-solid fa-envelope"></i>
                    <h5>Mail Us When You Need</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14475.589330091414!2d91.83660613955077!3d24.901483400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750557debc78dd1%3A0x41640447a7067962!2sSylhet%20MAG%20Osmani%20Medical%20College!5e0!3m2!1sen!2s!4v1680250979926!5m2!1sen!2s"
            width="100%"
            height="800"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <div className="contact-form">
            <h2>We Are Here Get A Free Quote</h2>

            <form>
              <div className="field-group">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  id="name"
                  onChange={onUpdateUser}
                />
                <i className="fa-solid fa-user"></i>
              </div>

              <div className="field-group">
                <input
                  type="text"
                  placeholder="Email"
                  required
                  id="email"
                  onChange={onUpdateUser}
                />
                <i className="fa-solid fa-envelope"></i>
              </div>

              <div className="field-group">
                <textarea
                  name="your-message"
                  rows="10"
                  placeholder="Enter message"
                  required
                  id="message"
                  onChange={onUpdateUser}
                ></textarea>
                <i className="fa-solid fa-pen-to-square"></i>
              </div>

              <div className="field-button">
                <input
                  type="submit"
                  name="submit"
                  value="Submit Now"
                  className="button-green-icon"
                  onClick={(e) => {
                    postContactUs(e);
                  }}
                />
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Contactus;
