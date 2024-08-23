import React, { useState, useEffect } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import FacebookLogin from "react-facebook-login";
import { initFacebookSdk } from "./initfacebooksdk";

toast.configure();

function SignInComp() {
  const [user, setUserState] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const [showProfile, setShowProfile] = useState(
    localStorage.getItem("blogUser") ? true : false
  );
  const [userProfile, setUserProfile] = useState(
    showProfile ? JSON.parse(localStorage.getItem("blogUser")) : ""
  );
  const history = useHistory();
  const login = () => {
    // ${process.env.React_App_Api_Url}
    // ${process.env.React_App_Api_Url}
    setloading(true);
    Axios.post(`${process.env.React_App_Api_Url}/api/user/login`, {
      email: user.email,
      password: user.password,
    })
      .then((res) => {
        localStorage.setItem("blogUserToken", res.data.token);
        localStorage.setItem("blogUser", JSON.stringify(res.data.user));
        if (res.data.user.role === "admin") {
          history.replace("/admin-stats");
          window.location.reload();
          setloading(false);
        } else {
          history.replace("/");
          window.location.reload();
          setloading(false);
        }
        setShowProfile(true);
        setUserProfile(res.data.user);
        setUserState({ email: "", password: "" });
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
        setloading(false);
      });
  };
  const UpdateProfile = (e, id) => {
    e.preventDefault();
    // http://172.16.17.149:3001
    setloading(true);
    Axios.put(`${process.env.React_App_Api_Url}/api/user/${id}`, {
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      mobile: userProfile.mobile,
      email: userProfile.email,
      role: "customer",
      id: userProfile.id,
    })
      .then((res) => {
        //localStorage.setItem("blogUserToken",res.data.token);
        localStorage.setItem("blogUser", JSON.stringify(res.data.user));
        window.location.reload();
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        toast.error(`${err.response.data.message}`);
      });
  };
  function componentDidMount(e) {
    e.preventDefault();
    //    ${process.env.React_App_Api_Url}
    login();
  }
  function updateUser(e) {
    e.preventDefault();
    UpdateProfile(e, userProfile.id);
  }
  function onChange(e) {
    const newUser = { ...user };
    if (e.target.id == "email") {
      newUser[e.target.id] = e.target.value;
    }
    if (e.target.id == "password") {
      newUser[e.target.id] = e.target.value;
    }
    setUserState(newUser);
  }
  function onUpdateUser(e) {
    const newUserProfile = { ...userProfile };
    newUserProfile[e.target.id] = e.target.value;
    setUserProfile(newUserProfile);
    console.log(setUserProfile);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    //        initFacebookSdk();
  }, []);
  const responseFacebook = (response) => {
    setloading(true);
    debugger;
    console.log("facebook", response);
    if (response && response.email) {
      Axios.post(`${process.env.React_App_Api_Url}/api/user/loginViaFacebook`, {
        email: response.email,
      })
        .then((res) => {
          localStorage.setItem("blogUserToken", res.data.token);
          localStorage.setItem("blogUser", JSON.stringify(res.data.user));
          history.replace("/");
          window.location.reload();
          setloading(false);
        })
        .catch((err) => {
          toast.error(`${err.response.data.message}`);
          setloading(false);
        });
    } else {
      toast.error("Something went wrong.");
      setloading(false);
    }
  };
  const componentClicked = (response) => {
    console.warn("facebook", response);
  };
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
                <h2>Login</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              </div>

              <form onSubmit={componentDidMount}>
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
                  <label>Password *</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="min 8 Characters"
                    required
                    id="password"
                    onChange={onChange}
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
                </div>

                <div className="remember-pass">
                  <label>
                    <input type="checkbox" value="" /> Remember me
                  </label>
                  <Link to="/forget-password">Forget Password?</Link>
                </div>

                <div className="field-button field-button-full">
                  <input
                    type="submit"
                    value="Sign In"
                    className="button-green-full"
                  />
                  <i className="fa-solid fa-paper-plane"></i>
                </div>

                <div className="remember-pass">
                  <span>
                    Not registered yet?{" "}
                    <Link to="/sign-up">Create an Account</Link>
                  </span>
                </div>
              </form>
              <hr />
              <p className="text-center">Login with social media</p>
              <div className="d-flex flex-row mb-3 mt-3 justify-content-evenly social-media">
                <FacebookLogin
                  appId="1247774946027467"
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  //                 onClick={()=>{componentClicked}}
                  callback={responseFacebook}
                />

                {/* <Button className='social-icon facebook'>
                                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                </Button>
                                <Button className='social-icon twitter'>
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                </Button>
                                <Button className='social-icon google'>
                                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                </Button> */}
              </div>
            </div>

            <div className="col-12 col-lg-6  sign-right"></div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default SignInComp;
