import React from "react";
import Footer from "../components/Footer";

export default function TermsCondition() {
  return (
    <>
      <section className="section section-grey section-top section-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Terms & Conditions</h2>
            <img src="images/underlin.png" className="underline" />
          </div>

          <div className="row mb-5">
            <div className="col-lg-12 about-des">
              <h6>Terms of Use</h6>
              <p>
                Customers understand and comply with the fact that when they
                consent to our terms and services, Airsyl and/or any of its
                affiliates are authorized to act as specified in the text below.
                The intention of these Terms and Services is solely for the
                purpose of providing the best services to our customers.
              </p>

              <h6 style={{ marginTop: "3%" }}>Agreement</h6>
              <p>
                The entry and use of our online store imply that the consumer is
                entirely in compliance with the terms of use. Our terms of use
                are mandatory, and anyone who does not accept them should
                abstain from using this site. Customers must ensure that they
                are completely capable and competent to accept and comply with
                all of our terms of use. They will be entering legally binding
                agreements that are well in accordance with the current laws and
                regulations.
              </p>

              <h6 style={{ marginTop: "3%" }}>Changes in Terms of Use</h6>
              <p>
                These terms of use may be changed or updated at the company’s
                discretion. If there are any, the said modifications will be set
                into motion after ten days of their initial publishing. Thus,
                customers are encouraged to view the terms of use every time
                they want to make a purchase. Suppose a customer disagrees with
                our updated terms of use. In that case, they will have to inform
                us within 3-5 days after the initial publication of the new
                terms of services. If the consumer does not accept the terms of
                use and refuses to notify the company, it will automatically
                imply their refrainment from using the site. And if need be, our
                company will delete the user account permanently. If the
                customer has not disagreed with the newly modified terms of use
                after the initial five days, it will be considered consent from
                the customer. Any additional instruction, services, or
                stipulation added to the site will be considered binding and
                mandatory as per the terms of use. We are not responsible for
                any issues pertaining to orders that come from a third-party
                store through our website.
              </p>
              <h6 style={{ marginTop: "3%" }}>Return & Refund Policy</h6>
              <p>
                Our company offers 7 – 10 Working days return policy to ensure
                that our customers are satisfied with their products and choose
                our website to order again.
              </p>

              <h6 style={{ marginTop: "3%" }}>Cancelled Bookings</h6>
              <p>
                Our customers have the option to return the purchased tickets as
                per the following conditions:
              </p>
              <h6 style={{ marginTop: "3%" }}>Authorization and Refunds</h6>
              <p>
                Any and all returns have to be authorized by us before you can
                ship the order back. The authorization process will take between
                7 to 10 days, after which your refund amount will be credited
                back to your original mode of payment as soon as we receive the
                confirmation. It is entirely understandable if you change your
                mind and opt to cancel. As long as you act timely, our refund
                policies allow the return of the total amount upon cancellation.
              </p>
            </div>

            {/* <div className="col-lg-6">
              <div className="about-images">
                <img src="images/plane.jpg" alt="" />
                <img src="images/plane2.jpg" alt="" />
              </div>
            </div> */}
          </div>
        </div>
        {/* <img src="images/SSL Commerz Pay With logo All Size_Feb 2023-02.jpg"></img> */}
      </section>
      <Footer></Footer>
    </>
  );
}
