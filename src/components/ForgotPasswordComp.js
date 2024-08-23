import React, { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function ForgotPasswordComp() {
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const [user, setUserState] = useState({ email: "" });
  function forgetPassword(e) {
    setloading(true);
    e.preventDefault();
    Axios.get(
      `${process.env.React_App_Api_Url}/api/user/forget_password?email=${user.email}`
    )
      .then((res) => {
        toast.success("Email has been sent to your account");
        setloading(false);
        history.replace("/sign-in");
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error(`${err.response.data.message}`);
        } else {
          toast.error(`${err.response.data.message}`);
        }
        setloading(false);
      });
  }
  function onChange(e) {
    const newUser = { ...user };
    if (e.target.id == "email") {
      newUser[e.target.id] = e.target.value;
    }
    setUserState(newUser);
  }

  return (
    <>
      <section className="section-sign">
        {loading ? <div className="loading"></div> : ""}
        <div className="container sign-container">
          <div className="row sign">
            <div className="col-12 col-lg-6 sign-left">
              <div className="sign-title">
                <h2>Forget Password</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <form
                onSubmit={(e) => {
                  forgetPassword(e);
                }}
              >
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

                <div className="field-button field-button-full">
                  <input
                    type="submit"
                    value="Submit"
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
            </div>

            <div className="col-12 col-lg-6  sign-right"></div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default ForgotPasswordComp;
