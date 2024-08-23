import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row" style={{ height: "500px" }}>
            <div className="col-lg-8 col-12 section-left">
              <div className="about-meta">
                {/* <h6>Something to read</h6> */}
                <h1>Privacy Policy</h1>
                <p>
                  Welcome to Airsyl. We respect your privacy and want to protect
                  your personal information. As a customer centric company we
                  are set to protect customer rights and purchase safety to the
                  maximum. To learn more, please read this Privacy Policy.
                </p>
              </div>

              <Link to="/contact" className="button-green">
                Contact Us
              </Link>

              <div className="about-flights">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/turkish.png" alt="" width="130px" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/eithad.png" alt="" width="130px" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/emirates.png" alt="" width="130px" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/qatar.png" alt="" width="130px" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-12 section-right">
              <div
                className="about-bg"
                style={{
                  background: "url(images/luggage.jpg)",
                  "background-size": "cover",
                  "background-position": "right",
                }}
              ></div>

              <div className="social">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/Airsyl-114578941246045"
                      target={"_blank"}
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/airsyl.official/"
                      target={"_blank"}
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-top">
        <div className="container">
          <div className="service-box">
            <div className="row">
              <div className="col-lg-6 col-12 service-box-des about-des">
                <div className="mb-5">
                  <h2>Best Airline Options</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  With AirSyl, you can travel on the most celebrated of airlines
                  at the lowest possible rates. All you have to do is enter your
                  booking details, including departure and landing information,
                  and let us find you the top flight options that will lie
                  within your budget. From Qatar Airways, Emirates to Turkish
                  Airlines and Etihad Airways, we can help you get seats in your
                  preferred choice of airline in accordance with your monetary
                  restrictions and time requirements. With AirSyl, a smooth
                  booking experience is a guarantee. Not only that but, we
                  further ensure that you have a lovey time travelling by
                  picking the best airlines for your journey. Register with
                  AirSyl and plan your next tour with easy and travel in
                  comfort.{" "}
                </p>
              </div>

              <div
                className="col-lg-6 col-12"
                style={{
                  background: "url(images/airport.jpg)",
                  "background-position": "center",
                  "background-size": "cover",
                }}
              ></div>
            </div>
          </div>

          <div className="service-box">
            <div className="row">
              <div className="col-lg-6 col-12 order-2 service-box-des about-des">
                <div className="mb-5">
                  <h2>What Do We Do with Your Information?</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  Airsyl website or app may collect various types of required
                  information if a customer wants to place an order for the
                  desired product he/she wants to buy using the website or app.
                  When a customer purchases something from Airsyl through the
                  website or app, as part of the buying and selling process,
                  Airsyl will collect the personal information of the customer
                  such as his/her name, contact number, delivery address and
                  email address etc. Airsyl usually collects personal
                  information such as customers’ title, name, gender, date of
                  birth, email address, postal address, delivery address,
                  telephone number, mobile number, payment procedure and other
                  similar kinds of information. When a customer browses Airsyl
                  website or app, the system will automatically receive the
                  computer’s internet protocol (IP) address in order to provide
                  information that helps us to learn about the customer’s
                  browser and operating system. With customer’s permission, the
                  company may send emails to him/her about our offers,
                  campaigns, new categories and offers, and other helpful
                  updates.
                </p>
              </div>

              <div
                className="col-lg-6 order-1 col-12"
                style={{
                  background: "url(images/airport.jpg)",
                  "background-position": "center",
                  "background-size": "cover",
                }}
              ></div>
            </div>
          </div>

          <div className="service-box">
            <div className="row">
              <div className="col-lg-6 col-12 service-box-des about-des">
                <div className="mb-5">
                  <h2>Third Party Policy</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  Airsyl may pass customer’s details to other companies that it
                  is affiliated with only for the purpose of providing better
                  service toward customers. Airsyl may somewhat pass customer’s
                  details to their agents and subcontractors to help with
                  analyzing data and providing them with marketing or customer
                  service assistance. The company may also use third parties to
                  assist in delivering products to customers and to help them in
                  collecting payments from them. In general, the third-party
                  providers used by the company will only collect, use and
                  disclose customer’s information to the extent necessary to
                  allow them to perform the services they provide to the
                  company. However, certain third-party service providers, such
                  as payment gateways and other payment transaction processors,
                  have their own privacy policies in respect to the information
                  that the company is required to provide to them for customer’s
                  purchase related transactions.
                </p>
              </div>

              <div
                className="col-lg-6 col-12"
                style={{
                  background: "url(images/airport.jpg)",
                  "background-position": "center",
                  "background-size": "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="service-box">
            <div className="row">
              <div className="col-lg-6 col-12 service-box-des about-des">
                <div className="mb-5">
                  <h2>Security of Your Information</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  To protect customer’s personal information, Airsyl takes
                  reasonable precautions and follows industry best practices in
                  information security and documentation process to make sure it
                  is not inappropriately lost, misused, accessed, disclosed,
                  altered or destroyed. If a customer provides credit card
                  information to the company, the information is encrypted using
                  secure socket layer technology. Although no method of
                  transmission over the Internet or electronic storage is 100%
                  secure, the company follows all PCI-DSS requirements and
                  implements additional generally accepted industry standards.
                  Airsyl may disclose customer’s personal information to the
                  government authority if it is required by law to do so or if
                  the customer violates the Terms of Service. Visit the Terms
                  and Conditions page to learn more about the complete terms of
                  service.{" "}
                </p>
              </div>

              <div
                className="col-lg-6 col-12"
                style={{
                  background: "url(images/airport.jpg)",
                  "background-position": "center",
                  "background-size": "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* <img src="images/SSL Commerz Pay With logo All Size_Feb 2023-02.jpg"></img> */}
      </section>
      <Footer></Footer>
    </>
  );
}
