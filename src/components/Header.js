import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./header-nav.css";
function Header() {
  const [showProfile, setShowProfile] = useState(
    JSON.parse(localStorage.getItem("blogUser"))
  );
  const [agent_balance, setAgentBalance] = useState();
  const history = useHistory();
  function logOut(e) {
    e.preventDefault();
    localStorage.clear();
    history.replace("/sign-in");
    window.location.reload();
  }
  function getUpdatedBalance() {
    Axios.get(
      `${process.env.React_App_Api_Url}/api/user/updated_balance/?id=${showProfile.id}`
    )
      .then((res) => {
        console.log(res);
        setAgentBalance(res.data.balance);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    if (showProfile) {
      getUpdatedBalance();
    }
  });
  return (
    <>
      <div className="top-header">
        <div className="container d-flex justify-content-between align-items-center top-head-flex">
          <div className="top-left">
            <p className="m-0">
              <i className="fa-solid fa-phone pe-2"></i>For Support? Call us
              (+880) 01404-000734
            </p>
          </div>

          <div className="d-flex">
            <ul className="navbar-nav  flex-row">
              {showProfile != undefined || showProfile != null ? (
                <>
                  <div className="dropdown">
                    <img className="profile" src="images/001-man.svg" />
                    {/* <button >Profile</button> */}
                    <div class="dropdown-options">
                      <Link
                        to="/edit-profile"
                        style={{ width: "100%", textAlign: "center" }}
                      >
                        My Account
                      </Link>
                      <Link to="/reset-password">Reset Password</Link>
                      {showProfile ? (
                        showProfile.user_role == "manager" ? (
                          <p style={{ textAlign: "center" }}>
                            Balance: {agent_balance ? agent_balance : "0"} BDT
                          </p>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      <Link
                        style={{ width: "100%", textAlign: "center" }}
                        onClick={(e) => {
                          logOut(e);
                        }}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/sign-in" className="top-links">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/sign-up" className="top-links">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="images/Airhub Final logo.jpeg"
              alt=""
              width="150px"
              height="75px"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarToggler"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {showProfile != undefined || showProfile != null ? (
                showProfile.user_role === "admin" ? (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/admin-booking"
                      >
                        BOOKINGS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sign-up-admin">
                        CREATE NEW ADMIN
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-users">
                        All Users
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-agents">
                        All Agents
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-payment">
                        Payments
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-stats">
                        Stats
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-contactus">
                        Contact Us Requests
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    {/*<li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/flights">FLIGHTS</Link>
                </li>*/}
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        ABOUT
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/services">
                        SERVICES
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" to="/guides">
                        GUIDES
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        CONTACT
                      </Link>
                    </li>
                  </>
                )
              ) : (
                <>
                  {/*<li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/flights">FLIGHTS</Link>
            </li>*/}
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      ABOUT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/services">
                      SERVICES
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/guides">
                      GUIDES
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      CONTACT
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
