import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <img src="images/SSL Commerz Pay With logo All Size_Feb 2023-02.jpg"></img>
      <div className="footer-top">
        <div className="all-over"></div>

        <div className="container">
          <div className="newsletter">
            <span>
              Wanna Know Our Latest Offers And Deals Just Subscribe Here
            </span>
            <form>
              <div className="form-field">
                <input type="text" placeholder="ENTER YOUR EMAIL ID HERE" />
                <input type="submit" value="SUBMIT" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5">
              <Link to="/">
                <img
                  src="images/Airhub Final logo.jpeg"
                  width="400px"
                  height="125px"
                />
              </Link>
              <p style={{ marginTop: "5px" }}>
                Find flights with AirSyl and fly to your next destination with
                the best flight options. Hassel free booking with the lowest
                available fares, AirSyl can make your journey a memorable
                occasion.
              </p>

              <br />

              <Link to="/about">Read More </Link>
            </div>

            <div className="col-12 col-lg-4  mb-5">
              <span>SITE MAP</span>

              <div className="footer-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/returnpolicy">Return & Refund Policy</Link>
                  </li>
                  <li>
                    <Link to="/termscondition">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-4  mb-5">
              {/* <span>SUPPORTED PAYMENT METHOD</span>
              {/* <span>SUPPORTED PAYMENT METHOD</span>

              <div className="footer-payment mb-3">
                <img src="images/american-express.png" />
                <img src="images/maestro.png" />
                <img src="images/master_card.png" />
                <img src="images/visa.png" />
                <img src="images/paypal.png" />
                <img src="images/visa-electron.png" />
                <img src="images/discover.png" />
              </div> */}

              <span>TAGS</span>

              <div className="tag-list-footer mt-3">
                <ul>
                  {/* <li>
                    <Link to="/guides">Travel</Link>
                  </li> */}

                  <li>
                    <Link to="">Booking</Link>
                  </li>

                  <li>
                    <Link to="">Flights</Link>
                  </li>
                </ul>
              </div>
              <span>Trade licences number</span>
              <p>1230028663</p>
              <span>TIN certificate no. </span>
              <p>814692173015</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#222222", padding: "20px 0" }}
        >
          <div className="container">
            <div className="stay-connected">
              <div className="footer-social">
                <p>Stay Connected with Us -</p>
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

                  {/* <li>
                    <a href="https://twitter.com/">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://plus.google.com/">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
              <div>
                <p>
                  Office address : Al Korim vobon, 1st floor, subhanigat point,
                  Sylhet, Bangladesh
                </p>
              </div>
              <div>
                <p>&copy; &nbsp;&nbsp;AirSyl.All Right Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
