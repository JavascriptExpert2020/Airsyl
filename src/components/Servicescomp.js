import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Servicescomp() {
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
                <h6>Setting the standards</h6>
                <h1>Services</h1>
                <p>
                  AirSyl brings for you a multitude of various services, each
                  designed specifically to aid you, and make your travel
                  experience a memorable event in your life. Fly safe and fly
                  better with AirSyl as your guide.
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
                  <h2>Exemplary Customer Care</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  At AirSyl, our customers are our priority. When you choose to
                  book through our website, we are available to assist you on
                  every step of the way. Whether you are facing difficulty
                  booking a flight or are unaware regarding how to plan an
                  extended vacation, we can help you with everything. Our agents
                  are experienced and certified in the travelling service
                  industry, and will guide you through any issues and queries
                  that you might have. Furthermore, AirSyl also offers you 24/7
                  customer support service. this means that, regardless of what
                  time it is, you can always call our offices for information or
                  solutions.
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
                  <h2>Easy to Use Flight Locator</h2>
                  <img src="images/underlin.png" className="underline" />
                </div>

                <p>
                  With AirSyl, booking flights have become much easier. All you
                  have to do is log on to your account on AirSyl and you will be
                  directed to our flight locator. Add appropriate details about
                  your impending travel plans including dates, departure and
                  landing cities, and the number of seats. You can also select
                  the option of finding low fare flight to your destination. Our
                  algorithm will sort through hundreds of flights and provide
                  list of the best airlines with flights that fit your
                  requirements. You can then choose the one that you prefer and
                  move on to the payment phase.{" "}
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
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Services We Offer</h2>
            <img src="images/underlin.png" className="underline" />
          </div>

          <div className="row justify-content-center g-lg-5">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="contact-box">
                <div className="contactbox-top service-box-small">
                  <h3>Discounts and Deals</h3>
                  <p>
                    you register at AirSyl, you will automatically qualify for
                    the numerous deals and offers that we provide our customers
                    on a weekly basis. Who knows you next flight might just be
                    50% off? Fingers crossed!{" "}
                  </p>
                </div>

                <div className="contactbox-footer">
                  <a href="#">
                    <h5>Read More</h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="contact-box">
                <div className="contactbox-top service-box-small">
                  <h3>Multi-flights Booking</h3>
                  <p>
                    This option is available for those who are planning on an
                    extended vacation through multiple cities. Contact us and
                    our agents will help you with each booking to provide an
                    effortless experience for you.{" "}
                  </p>
                </div>

                <div className="contactbox-footer">
                  <a href="#">
                    <h5>Read More</h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="contact-box">
                <div className="contactbox-top service-box-small">
                  <h3>Budget Friendly Options</h3>
                  <p>
                    Sorting thorough hundreds of flights, AirSyl will ensure
                    that your journey is not too hard on your pocket. Whether
                    you are travelling nationally or internationally, with
                    AirSyl, the value exceeds the cost.{" "}
                  </p>
                </div>

                <div className="contactbox-footer">
                  <a href="#">
                    <h5>Read More</h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="contact-box">
                <div className="contactbox-top service-box-small">
                  <h3>24/7 Customer Care</h3>
                  <p>
                    Our customer care agents are available round the clock to
                    help you with any issues or questions. So, if you are a
                    prospective customer or client needing assistance, do not
                    hesitate to contact us for a better experience.{" "}
                  </p>
                </div>

                <div className="contactbox-footer">
                  <a href="#">
                    <h5>Read More</h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="contact-box">
                <div className="contactbox-top service-box-small">
                  <h3>Handicap Assistance</h3>
                  <p>
                    For anyone who needs it, we offer handicap assistance when
                    booking flights. This will ensure that you are assigned
                    appropriate seating and someone is there to ensure that you
                    get to, and get off, the place safely.{" "}
                  </p>
                </div>

                <div className="contactbox-footer">
                  <a href="#">
                    <h5>Read More</h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="contact-box">
                <div className="contactbox-top service-box-small">
                  <h3>Destinations Throughout the Globe</h3>
                  <p>
                    AirSyl connects you to the entire world. Be it tropical
                    islands or famous travel destinations, we can find the
                    optimal flights for you at the cheapest rates. So, pay less
                    and travel more.{" "}
                  </p>
                </div>

                <div className="contactbox-footer">
                  <a href="#">
                    <h5>Read More</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Frequently asked questions</h2>
            <img src="images/underlin.png" className="underline" />
          </div>

          <div className="row justify-content-center g-lg-5">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    1- How do I book ticket online?{" "}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <p>
                      After you select the appropriate flight, you will be
                      guided to the payment options where you can either pay
                      online using your prefer mode of payment or reserve your
                      seat and get your ticket from the nearest respective
                      airline offices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    2- How to book a flight through your website?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <p>
                      With AirSyl booking flight is as easy as it gets. Just go
                      to our home page and add in the appropriate details
                      regarding departure and landing. After that you will be
                      guided to an array of different flight from different
                      airlines. You can choose the one that best suits your
                      requirements.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    3- Do I have to pay on the spot?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <p>
                      No, you do not. With AirSyl you get the option to reserve
                      your seat and pay later, within in the time frame
                      provided.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    4- What if the flight booked through your website gets
                    cancelled?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body">
                    <p>
                      In case of cancellation, you will be informed as soon as
                      possible with the option of booking another flight. For
                      further assistance, you can always call our customer
                      support helpline at +44 20 3290 4533 (whatsapp) /
                      +8801780465010{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFive"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    5- Do you have mobile app?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div className="accordion-body">
                    <p>
                      Yes. Our mobile application is available on both Play
                      Store and AppStore. You can book flight on the go.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    6- May I request assistance during the booking process?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSix"
                >
                  <div className="accordion-body">
                    <p>
                      Yes. Our customer support service is open round the clock
                      to aid you whenever necessary. Contact us at +44 20 3290
                      4533(whatsapp) / +8801780465010 for any queries.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingSeven"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSeven"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSeven"
                  >
                    7- How safe are the online payment options?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSeven"
                >
                  <div className="accordion-body">
                    <p>
                      At AirSyl, we believe in safety first. All our online
                      payment options are encrypted and are continuously
                      monitored for fraud. Therefore, you can opt for the online
                      payment without hesitation.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingEight"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEight"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseEight"
                  >
                    8- How do I book for a group?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingEight"
                >
                  <div className="accordion-body">
                    <p>
                      On the homepage, you will be provided with the option of
                      booking for a group. Otherwise, you can always call our
                      customer service, and we will aid you through the process
                      step by step.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingNine"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseNine"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseNine"
                  >
                    9- How does the pick and drop service work?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingNine"
                >
                  <div className="accordion-body">
                    <p>
                      When you acquire our pick and drop service, we will
                      provide you with safe transportation to and from the
                      airport. Our drivers are certified professionals and keep
                      time in order to prevent any delays.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTen">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTen"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTen"
                  >
                    10- How do I change the booking details?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTen"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTen"
                >
                  <div className="accordion-body">
                    <p>
                      When you register with our website, you can change your
                      booking details in <q>My Bookings</q> part of the
                      homepage. If you have already paid for the flight, please
                      contact our customer services and we can help you reach a
                      solution to any problem.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingEleven"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEleven"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseEleven"
                  >
                    11- Can I get a refund if I change my mind?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseEleven"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingEleven"
                >
                  <div className="accordion-body">
                    <p>
                      Depending upon the time you cancel your flight, you have
                      the option of getting as much as 75% refund from your
                      original payment. However, each airline has different
                      policies so the refund options might differ as well. Reach
                      out to our customer support for further information.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingTwelve"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwelve"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwelve"
                  >
                    12- Are there any discounts available on your website?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwelve"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwelve"
                >
                  <div className="accordion-body">
                    <p>
                      We cyclically update discounts on our website for flights
                      throughout the world. Register with AirSyl and get regular
                      updates on the latest discount offers.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThirteen"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThirteen"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThirteen"
                  >
                    13- What kinds of documents are necessary while booking a
                    flight?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThirteen"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThirteen"
                >
                  <div className="accordion-body">
                    <p>
                      For any online booking, you will need your passport and
                      identification card with you, in order to fill in the
                      details on the personal information part of the form. It
                      is crucial that you carry both of these documents, along
                      with your ticket, when you are travelling as well .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Servicescomp;
