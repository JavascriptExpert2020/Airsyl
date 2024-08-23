import React, { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

toast.configure();

function AdminSignupcomp() {
  const [user, setUserState] = useState({
    firstName: "",
    email: "",
    lastName: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    user_role: "admin",
  });
  const [loading, setloading] = useState(false);
  const history = useHistory();
  function componentDidMount(e) {
    e.preventDefault();
    setloading(true);
    if (user.mobile.length > 8) {
      if (user.password.length > 8) {
        if (user.password === user.confirmpassword) {
          Axios.post(`${process.env.React_App_Api_Url}/api/user/signup`, {
            user,
          })
            .then((res) => {
              toast.success("New admin account has been created.");
              setloading(false);
              history.replace("/admin-users");
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
    }
    if (e.target.id === "confirmpassword") {
      newUser[e.target.id] = e.target.value;
    }
    setUserState(newUser);
  }
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
                <h2>Create New Admin</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              </div>

              <form
                onSubmit={(e) => {
                  componentDidMount(e);
                }}
              >
                <div className="form-field">
                  <label>First Name *</label>
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
                    type="password"
                    placeholder="min 8 Characters"
                    required
                    id="password"
                    onChange={onChange}
                  />
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

export default AdminSignupcomp;
