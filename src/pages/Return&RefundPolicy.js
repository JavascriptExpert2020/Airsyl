import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function ReturnRefundPolicy() {
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
                <h1>Return & Refund Policy</h1>
                <p>
                  Welcome to Airsyl. We are an online marketplace and these are
                  the terms and conditions governing your access and use of
                  Airsyl along with its related sub-domains, sites, mobile app,
                  services and other tools. By using the Site, you hereby accept
                  these terms and conditions and represent that you agree to
                  comply with these terms and conditions.
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
                  <h2>SECTION 1 – GENERAL CONDITIONS</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  By agreeing to these Terms of Service, you represent that you
                  are at the age of majority in your present State or Province
                  of residence, or that you have given us your consent to allow
                  any of your minor dependents to use this website where you are
                  the age of majority in your State or Province of residence.
                  You may not use our service for any illegal or unauthorized
                  purpose nor may you in the use of the service, violate any
                  laws in your jurisdiction. You must not transmit any worms or
                  viruses or any code of a destructive nature. A breach or
                  violation of any of the Terms will result in an immediate
                  termination of your Services.
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
                  <h2>SECTION 2 – PRICING AND PAYMENT METHODS</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  All prices are subject to change without notification, and
                  while every effort is made to ensure the accuracy of the
                  prices displayed on Airsyl, they are not guaranteed to be
                  accurate. If any price is different from that displayed we
                  will inform you before your departure and you will have the
                  option of continuing with the order or not. Choosing the right
                  payment method is essential in order to fly with us. Airsyl is
                  accepting payments in very easy and convenient ways. The chart
                  of the payment methods of Airsyl is given below: <br></br>
                  <h5>Payment Method Condition Online Payment:</h5>
                  <br></br>Applicable for any ordered amount as per company
                  policy. Note: For orders more than BDT 2000 amount, customers
                  need to make an advance payment of 10% of the total value.
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
                  <h2>SECTION 3 – ERRORS</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  Occasionally there may be visible information on our website
                  or some services containing typographical errors, inaccuracies
                  or omissions that may relate to details, pricing, promotions,
                  offers, and availability. We reserve the right to correct any
                  errors, inaccuracies or omissions, and to change or update
                  information or cancel orders if any information, on our or on
                  any related website, is inaccurate at any time without prior
                  knowledge. We are accepting emails if anyone finds any issue
                  that needs to be taken care at info@airsyl.com for our
                  immediate concern.
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
                  <h2>SECTION 4 – GOVERNING LAW</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  These Terms of Service and any separate agreements whereby we
                  provide you Services shall be governed by and construed and
                  interpreted in accordance with the applicable laws governing
                  in Bangladesh. Any and all actionable legal claim or
                  proceedings arising out of, or in connection to this website,
                  must be brought within the jurisdiction of a competent Court
                  in Bangladesh.{" "}
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
                  <h2>SECTION 5 – CHANGES TO TERMS OF SERVICE</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  We reserve the right, at our sole discretion, to update,
                  change or replace any part of these Terms of Service by
                  posting updates and changes to our website. It is your
                  responsibility to check our website periodically for changes.
                  Following the updates in airlines policies and laws in any
                  respective time, we may change and update our terms and
                  conditions anytime without prior notice.{" "}
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
                  <h2>SECTION 6 – CONDITIONS OF USE</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>
                <h5>1.0 – YOUR ACCOUNT</h5>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your user identification, password, account details and
                  related private information. You agree to accept this
                  responsibility and ensure your account and its related details
                  are maintained securely at all times and all necessary steps
                  are taken to prevent misuse of your account. You should inform
                  us immediately if you have any reason to believe that your
                  password has become known to anyone else, or if the password
                  is being, or is likely to be, used in an unauthorized manner.
                  Please ensure that the details you provide us with are correct
                  and complete at all times. You are obligated to update details
                  about your account in real time by accessing your account
                  online. For pieces of information you are not able to update
                  by accessing Your Account on the Site, you must inform us via
                  our customer service communication channels to assist you with
                  these changes.
                </p>
                <br></br>
                <div style={{ marginLeft: "1%" }}>
                  <h6>1.1 – PRIVACY</h6>
                  <p>
                    Please review our Privacy Agreement, which also governs your
                    visit to the Site. The personal information / data provided
                    to us by you or your use of the site will be treated as
                    strictly confidential, in accordance with the privacy
                    agreement and applicable laws and regulations. If you object
                    to your information being transferred or used in the manner
                    specified in the Privacy Agreement, please do not use the
                    Site.
                  </p>
                </div>
                <br></br>
                <div style={{ marginLeft: "1%" }}>
                  <h6>1.2 – COMMUNICATING WITH US</h6>
                  <p>
                    When you visit the Site, or send email to us, you are
                    communicating with us electronically. You will be required
                    to provide a valid phone number while placing an order with
                    us. We may communicate with you by email, SMS, phone call or
                    by posting notices on the Site or Official Social Pages
                    (Facebook, LinkedIn, Instagram, etc.) or by any other mode
                    of communication we choose to employ. For contractual
                    purposes, you consent to receive communications from us with
                    respect to your use of the website and agree to treat all
                    modes of communication with the same importance. You can let
                    us know any of your query or complications through our
                    official email – info@airsyl.com for our concern.
                  </p>
                </div>
                <br></br>
                <div style={{ marginLeft: "1%" }}>
                  <h6>1.3 – LOSSES</h6>
                  <p>
                    We will not be responsible for any business or personal
                    losses or any other indirect or consequential loss that is
                    not reasonably foreseeable to both you and us when you
                    commenced using the Site. If you feel any confusion dealing
                    with us, we are open to respond to your query and clear your
                    confusion via email, live chat, other active social media
                    channels, and customer support center (you can find the
                    information in the footer of our Site).
                  </p>
                </div>
                <br></br>
                <div style={{ marginLeft: "1%" }}>
                  <h6>1.4 – TAXES</h6>
                  <p>
                    You shall be responsible for payment of all
                    fees/costs/charges associated with the purchase of services
                    from the Site and you agree to bear any and all applicable
                    taxes as per prevailing law.
                  </p>
                </div>
                <br></br>
                <div style={{ marginLeft: "1%" }}>
                  <h6>1.5 – RESELLING AIRSYL SERVICES</h6>
                  <p>
                    Reselling Airsyl services for business purposes is strictly
                    prohibited. If any unauthorized personnel is found
                    committing the above act, legal action may be taken against
                    him/her. If we have a special category for your business
                    that will be open for all and there will be no issues
                    regarding business (Ex: SME, B2B etc.), considering both
                    parties agree and properly understand the facts related
                    hereafter.
                  </p>
                </div>
                <br></br>
                <div style={{ marginLeft: "1%" }}>
                  <h6>1.6 – CLAIMS AGAINST INFRINGING CONTENT</h6>
                  <p>
                    We respect the intellectual property of others. If you
                    believe that your intellectual property rights have been
                    used in a way that gives rise to concerns of infringement,
                    please write to us at (suggested mail – info@airsyl.com) and
                    we will make all reasonable efforts to address your concern
                    within a reasonable amount of time. Please ensure to provide
                    your name, address, contact information and as many relevant
                    details of the claim including name of infringing party,
                    instances of infringement, proof of infringement amongst
                    others. Please note that providing incomplete details will
                    render your claim invalid and unusable for legal purposes.
                    In addition, providing false or misleading information may
                    be considered a legal offense and may be followed by legal
                    proceedings.
                  </p>
                </div>
                <br></br>
                <div style={{ marginLeft: "1%" }}>
                  <h6>1.7 – FRAUD ALERT</h6>
                  <p>
                    We will take legal action if we receive evidence of fraud
                    and illegal and any type of money transaction between
                    customer and seller. This is strictly prohibited. And, if
                    any customer is found placing orders without any intention
                    to take delivery, the customer may get a permanent ban from
                    Airsyl and in extreme cases may legal steps be taken from
                    the company. The same instruction is applicable for the
                    people who buy and alter the purchased service with another
                    faulty/different service in absence of any witness and after
                    sometime claims refund or return with invalid claims.
                  </p>
                </div>
                <br></br>
                <div style={{ marginLeft: "1%" }}>
                  <h6>1.8 – TERMINATION</h6>
                  <p>
                    In addition to any other legal or equitable remedies, we
                    may, without prior notice to you, immediately terminate the
                    Terms and Conditions or revoke any or all of your rights
                    granted under the Terms and Conditions. Upon any termination
                    of this Agreement, you shall immediately cease all access to
                    and use of the Site and we shall, in addition to any other
                    legal or equitable remedies, immediately revoke all
                    passwords and account identification issued to you and deny
                    your access to and use of this Site in whole or in part. Any
                    termination of this agreement shall not affect the
                    respective rights and obligations (including without
                    limitation, payment obligations) of the parties arising
                    before the date of termination. You furthermore agree that
                    the Site shall not be liable to you or to any other person
                    as a result of any such suspension or termination. If you
                    are dissatisfied with the Site or with any terms,
                    conditions, rules, policies, guidelines, or practices in
                    operating the Site, your sole and exclusive remedy is to
                    discontinue using the Site.
                  </p>
                </div>
                <br></br>
                <div style={{ marginLeft: "1%" }}>
                  <h6>1.9 – OTHERS</h6>
                  <p>
                    <h6>Delivery Timeline:</h6>
                    As per the government law and policy, Airsyl will book any
                    service within 10 working days. Airsyl will do it’s best to
                    entertain your purchased service at its earliest. <br></br>
                    <h6>Cancellation:</h6> Airsyl retains the right to cancel
                    any order at its sole discretion for any reason which may
                    include, but not limited to, the availability,
                    malfunctioned, and containing incorrect information or
                    description arising out of technical or typographical error
                    or for any other reason.<br></br>
                    <h6> Refund Timeline:</h6> If any order is canceled, the
                    payment against such order shall be refunded within 72 hours
                    to 10 working days, but it may take longer time in
                    exceptional cases that are related with other payment
                    gateways, government authorities or any. Provided that
                    received cash back, bonus, apology amount, gift amount, if
                    any, will be adjusted with the refund amount when applied.{" "}
                    <br></br>
                    <h6>Notes:</h6>• Integration support/development are not
                    included here. Additional charge will be applicable subject
                    to scope of work. <br></br>• In case of Payment
                    Refund/Reverse, no additional charges will be applicable
                    except bKash. 2.5% charges will not be reimbursed to account
                    holder in bKash refund or reverse cases. Notwithstanding
                    anything contrary contained in the work order, the terms and
                    conditions of the service governing agreement or Merchant
                    Enrolment Form (as the case may be) and any
                    amendment/addendum agreement thereof between the parties
                    shall prevail over the terms and conditions of the work
                    order.
                  </p>
                  <br></br>
                  <h6>Required Documents</h6>
                  <p style={{ fontWeight: "bolder" }}>
                    For Proprietorship Business:
                  </p>
                  <p style={{ marginLeft: "1%" }}>
                    1. Trade License (Updated issue date) <br></br>
                    2. Owner / Signatory NID (Only Proprietor’s one is
                    acceptable) <br></br>
                    3. Business TIN Certificate (Updated) <br></br>
                    4. Company Bank Account <br></br>
                    5. TIN and Vat certificate is mandatory <br></br>
                    7. NID Copy – Only Proprietor’s one is acceptable <br></br>
                    8. Signing Authority (Only Proprietor’s one is acceptable)
                  </p>
                  <p style={{ fontWeight: "bolder" }}>For Limited Business:</p>
                  <p style={{ marginLeft: "1%" }}>
                    1. Trade License (Updated issue date) <br></br> 2. Owner /
                    Signatory NID (Updated) <br></br> 3. Business TIN
                    Certificate (Updated) <br></br> 4. Incorporation Certificate
                    (Updated) <br></br> 5. MOA/AOA <br></br> 6. FORM XII{" "}
                    <br></br>
                    7. Company Bank Account <br></br> 8. TIN and Vat certificate
                    is mandatory <br></br> 9. NID Copy – the person who has
                    shares in the company and also mentioned in form 12{" "}
                    <br></br>10.Signing Authority (the person who has shares in
                    the company and also mentioned in form 12)
                  </p>
                  <br></br>
                  <b>
                    Note: All documents have to be sealed and signed by the
                    authorized signatory
                  </b>
                </div>
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
                  <h2>Payment Settlement</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>
                <p>
                  Airsyl settle payments through BEFTN to merchant account once
                  a week and minimum withdraw amount is BDT 2,500.00.
                </p>
                <br></br>
                <h6>Refund Policy:</h6>
                <p>
                  Refund request takes 7-10 working days to process from the day
                  of submission in Airsyl panel. Refund request can be generated
                  from Airsyl merchant panel.
                </p>
                <br></br>
                <h6>Customer Claim</h6>
                <p>
                  Customer can claim the amount through his/her card issuer bank
                  up to 120 days for local/international visa/master card if
                  service/product not delivered. In such cases merchant must
                  provide service/product delivery confirmation documents.
                </p>
                <br></br>
                <h6>Fraud Policy:</h6>
                <p>
                  Airsyl detects suspicious/fraud transaction automatically and
                  holds transaction amount till proper verification. Merchant
                  will be notified instantly to provide required documents i.e.
                  Photo identity copy (Passport/Driving License), Scan copy of
                  transected card (1st 6 digit & last 4 digit) for verification
                  process. Failure to provide sufficient documents will be
                  resulting payment reverse to cardholder by Airsyl without any
                  prior notice.
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
                  <h2>Legal bindings:</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>
                <p>
                  1. That during the course of business, we will not use the
                  Airsyl service in any manner whatsoever including corruption
                  which may constitute a violation of any law, regulation and
                  applicable rules/policy of the Bangladesh Bank and other
                  Government entities which may cause Airsyl to be subject to
                  any investigation, prosecution, or legal action or for any
                  type of business which in the opinion of Airsyl is
                  unacceptable. Any and all decision of Airsyl for providing
                  Airsyl service to Us shall be final and binding upon Us.
                </p>
                <br></br>
                <p>
                  2. That If Airsyl Facilitators levy/incur any fine, penalties,
                  etc. pertaining to the breach of law, rules, regulations or
                  guideline the same shall be paid by/recovered from Us
                  forthwith without any demur, protest or delay.
                </p>
                <br></br>
                <p>
                  3. That in case of any promise/assurance/warranty that we have
                  made herein or in Merchant Enrollment Form (MEF) or any other
                  document(s) breach by Us or any information provided by Us
                  appears false and misleading, Airsyl can terminate agreement
                  with us with immediate effect, discontinue Airsyl service and
                  can take other steps (s) permissible by Laws including payment
                  withhold and others.
                </p>
                <br></br>
                <p>
                  4. Airsyl service shall only be used for the site/app having
                  the features permissible in Bangladesh as per Bangladeshi
                  Law(s) and Regulation(s) and shall not engage any of the
                  service/product as provided banned/prohibited as per Law of
                  the Bangladesh.
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
                  <h2>Shipment Policy:</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>
                <p>Airsyl doesn’t allow any kind of drop shipment document.</p>
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
