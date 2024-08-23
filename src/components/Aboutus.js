import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row" style={{ height: "500px" }}>
            <div className="col-lg-8 section-left">
              <div className="about-meta">
                <h6>Something To Know</h6>
                <h1>About Us</h1>
                <p style={{ textAlign: "justify" }}>
                  AirSyl is a professional flight locator and travel agency
                  based in Bangladesh. We are a team of professionals working
                  copiously in order to find flights at different price points
                  to fit the needs of our customers. Be it individuals looking
                  for flight options or travel agents creating an itinerary, our
                  algorithm will sort through thousands of flights and bring
                  forth the best options, that are budget friendly and as per
                  your time requirements. In addition to that, we also offer
                  counseling for those who are facing a hard time booking an
                  elongated journey. You can always contact our customer support
                  service which is available round the clock to assist you
                  through any pertinent issues. Contact us for your next
                  national or international trip and pay marginally less for a
                  profound experience.
                </p>
              </div>

              <Link
                to="/contact"
                className="button-green"
                style={{ marginBottom: "8%" }}
              >
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

            <div className="col-lg-4 section-right">
              <div
                className="about-bg"
                style={{
                  background: "url(images/section-bg.png)",
                  "background-size": "cover",
                  "background-position": "right;",
                }}
              ></div>

              <div className="social">
                <ul>
                  {/* <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li> */}
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

      <section className="section section-grey section-top section-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Mission, Aims and Values</h2>
            <img src="images/underlin.png" className="underline" />
          </div>

          <div className="row mb-5">
            <div className="col-lg-6 about-des">
              <h6>Mission</h6>
              <p>
                AirSyl endeavors to act as your travel agent and find the best
                possible flight options for you in the least amount of time. Our
                mission is to help our customers achieve a seamless booking
                experience, so that they can prepare for their journey ahead.
                With our extemporary services, you can place your trust in us
                and get ready for smooth sailing. On in this case, smooth
                flying.
              </p>

              <h6 style={{ marginTop: "3%" }}>Values</h6>
              <p>
                With a combined experience mounting decades, AirSyl is run by
                professionals who work rigorously to serve you every day. The
                core of our organization is to aid our customers with: -Finding
                the lowest fared flight for our budget conscious clients
                -Locating flight options that come within the time frame
                provided by the customer -Aid our clients through any
                complications or booking impediments -Provide a flawless
                experience With AirSyl, a profound travelling experience is our
                guarantee. Since you are the priority, our services revolve
                around your requirements and thus it becomes our foremost aim to
                help you achieve the greatest course of action.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="about-images">
                <img src="images/plane.jpg" alt="" />
                <img src="images/plane2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Aboutus;
