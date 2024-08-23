import React, { useState, useEffect } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

toast.configure();
function SignUpManager() {
  const [user, setUserState] = useState({
    firstName: "",
    agency_name: "",
    agency_address: "",
    email: "",
    lastName: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    user_role: "manager",
    license_number: "",
  });
  const [loading, setloading] = useState(false);
  const [message, setMessage] = useState({
    whiteSpace: false,
    specialCharacter: false,
    numberPresent: false,
    lengthGreaterthen8: false,
    UpperCase: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  function componentDidMount(e) {
    e.preventDefault();
    setloading(true);
    if (validateEmail(user.email)) {
      if (
        message.whiteSpace === true &&
        message.specialCharacter === true &&
        message.numberPresent === true &&
        message.lengthGreaterthen8 === true &&
        message.UpperCase === true
      ) {
        if (user.mobile.length > 8) {
          if (user.password.length > 8) {
            if (user.password === user.confirmpassword) {
              Axios.post(`${process.env.React_App_Api_Url}/api/user/signup`, {
                user,
              })
                .then((res) => {
                  toast.success(
                    "Your account has been successfully created. Our admin will approve your account soon."
                  );
                  setloading(false);
                  history.replace("/sign-in");
                })
                .catch((err) => {
                  toast.error(`${err.response.data.message}`);
                  setloading(false);
                });
            } else {
              toast.error("Password and Confirm Password mismatch.");
              setloading(false);
            }
          } else {
            toast.error("Password length should be greater than 8.");
            setloading(false);
          }
        } else {
          toast.error("Mobile number not valid.");
          setloading(false);
        }
      } else {
        toast.error("Password not valid.");
        setloading(false);
      }
    } else {
      toast.error("Email format not correct.");
      setloading(false);
    }
  }
  function onChange(e) {
    const newUser = { ...user };
    if (e.target.id === "firstName") {
      newUser[e.target.id] = e.target.value;
    }
    if (e.target.id === "lastName") {
      newUser[e.target.id] = e.target.value;
    }
    if (e.target.id === "email") {
      newUser[e.target.id] = e.target.value;
    }
    if (e.target.id === "mobile") {
      newUser[e.target.id] = e.target.value;
    }
    if (e.target.id === "password") {
      newUser[e.target.id] = e.target.value;
      checkWhiteSpace(e.target.value);
      checkNumber(e.target.value);
      checkUpperCase(e.target.value);
      checkSymbol(e.target.value);
      checkLength(e.target.value);
    }
    if (e.target.id === "confirmpassword") {
      newUser[e.target.id] = e.target.value;
    }
    if (e.target.id === "license_number") {
      newUser[e.target.id] = e.target.value;
    }
    if (e.target.id === "agency_address") {
      newUser[e.target.id] = e.target.value;
    }
    if (e.target.id === "agency_name") {
      newUser[e.target.id] = e.target.value;
    }

    setUserState(newUser);
  }
  function checkWhiteSpace(value) {
    let newUser = message;
    const isNonWhiteSpace = /^\S*$/;
    if (isNonWhiteSpace.test(value)) {
      newUser.whiteSpace = true;
      //return "Password must not contain Whitespaces.";
    } else {
      newUser.whiteSpace = false;
    }
    setMessage(newUser);
  }
  function checkNumber(value) {
    let newUser = message;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (isContainsNumber.test(value)) {
      newUser.numberPresent = true;
      //          return "Password must contain at least one Digit.";
    } else {
      newUser.numberPresent = false;
    }
    setMessage(newUser);
  }
  function checkUpperCase(value) {
    const newUser = message;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (isContainsUppercase.test(value)) {
      newUser.UpperCase = true;
      //          return "Password must have at least one Uppercase Character.";
    } else {
      newUser.UpperCase = false;
    }
    setMessage(newUser);
  }
  function checkSymbol(value) {
    const newUser = message;
    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (isContainsSymbol.test(value)) {
      newUser.specialCharacter = true;
      //          return "Password must contain at least one Special Symbol.";
    } else {
      newUser.specialCharacter = false;
    }
    setMessage(newUser);
  }
  function checkLength(value) {
    const newUser = message;
    const isValidLength = /^.{9,16}$/;
    if (isValidLength.test(value)) {
      newUser.lengthGreaterthen8 = true;
      //return "Password must be 9-16 Characters Long.";
    } else {
      newUser.lengthGreaterthen8 = false;
    }
    setMessage(newUser);
  }
  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section
        className="section-sign"
        style={{ marginTop: "10%", marginBottom: "10%" }}
      >
        {loading ? <div className="loading"></div> : ""}

        <div className="container sign-container">
          <div className="row sign">
            <div className="col-12 col-lg-6 sign-left">
              <div className="sign-title">
                <h2>Registration As An Agent</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              </div>

              <form
                onSubmit={(e) => {
                  componentDidMount(e);
                }}
              >
                <div className="form-field">
                  <label>Agent User Name *</label>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    id="firstName"
                    onChange={onChange}
                  />
                </div>

                <div className="form-field">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    id="lastName"
                    onChange={onChange}
                  />
                </div>

                <div className="form-field">
                  <label>Agency Name</label>
                  <input
                    type="text"
                    placeholder="Agency Name"
                    required
                    id="agency_name"
                    onChange={onChange}
                  />
                </div>

                <div className="form-field">
                  <label>Agency Address</label>
                  <input
                    type="text"
                    placeholder="kk11222333hhh"
                    required
                    id="agency_address"
                    onChange={onChange}
                  />
                </div>

                <div className="form-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="mail@example.com"
                    required
                    id="email"
                    onChange={onChange}
                  />
                </div>

                <div className="form-field">
                  <label>Phone # *</label>
                  <input
                    type="text"
                    placeholder="+880-345-8910"
                    required
                    id="mobile"
                    onChange={onChange}
                  />
                </div>

                <div className="form-field">
                  <label>Password *</label>
                  <input
                    className="input"
                    autoComplete="off"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={onChange}
                    required
                  />
                  {!showPassword ? (
                    <i
                      className="fa fa-eye-slash mr-3"
                      onClick={(e) => {
                        setShowPassword(!showPassword);
                      }}
                    ></i>
                  ) : (
                    <i
                      className="fa fa-eye mr-3"
                      onClick={(e) => {
                        setShowPassword(!showPassword);
                      }}
                    ></i>
                  )}
                  {message ? (
                    message.numberPresent ? (
                      <p style={{ color: "green" }}>- Must contain number.</p>
                    ) : (
                      <p style={{ color: "red" }}>- Must contain number.</p>
                    )
                  ) : (
                    ""
                  )}
                  {message ? (
                    message.UpperCase ? (
                      <p style={{ color: "green" }}>
                        - Must contain capital letter.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>
                        - Must contain capital letter.
                      </p>
                    )
                  ) : (
                    ""
                  )}
                  {message ? (
                    message.specialCharacter ? (
                      <p style={{ color: "green" }}>
                        - Must contain special character.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>
                        - Must contain special character.
                      </p>
                    )
                  ) : (
                    ""
                  )}
                  {message ? (
                    message.lengthGreaterthen8 ? (
                      <p style={{ color: "green" }}>
                        - Password length should be greater then 8.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>
                        - Password length should be greater then 8.
                      </p>
                    )
                  ) : (
                    ""
                  )}
                  {message ? (
                    message.whiteSpace ? (
                      <p style={{ color: "green" }}>
                        - Password must not contain Whitespaces.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>
                        - Password must not contain Whitespaces.
                      </p>
                    )
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-field">
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    placeholder="min 8 Characters"
                    required
                    id="confirmpassword"
                    onChange={onChange}
                  />
                </div>

                <div className="form-field">
                  <label>License Number</label>
                  <input
                    type="text"
                    placeholder="kk11222333hhh"
                    required
                    id="license_number"
                    onChange={onChange}
                  />
                </div>

                <div className="field-button field-button-full">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="button-green-full"
                  />
                  <i className="fa-solid fa-paper-plane"></i>
                </div>

                <div className="remember-pass">
                  <span>
                    Already have an Account <Link to="/sign-in">Sign In</Link>
                  </span>
                  <span>
                    Register as <Link to="/sign-up">Customer</Link>
                  </span>
                </div>
              </form>
            </div>

            <div className="col-12 col-lg-6 sign-right"></div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default SignUpManager;
