import React, { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Bookingcompadmin() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    email: "",
    mobile: "",
    status: "",
  });
  const [tempBlog, settempBlog] = useState([]);
  const [loading, setloading] = useState(false);
  function onChange(e) {
    if (e.target.id == "name") {
      search[e.target.id] = e.target.value;
    }
    if (e.target.id == "email") {
      search[e.target.id] = e.target.value;
    }
    if (e.target.id == "mobile") {
      search[e.target.id] = e.target.value;
    }
    if (e.target.id == "status") {
      search[e.target.id] = e.target.value;
    }
  }
  function searchfunc(e) {
    e.preventDefault();
    setloading(true);
    if (search.name !== "") {
      setBookings(
        tempBlog.filter((result) => {
          setloading(false);
          return result.Passenger.first_name
            .toLowerCase()
            .includes(search.name.toLowerCase());
        })
      );
    }
    if (search.email !== "") {
      setBookings(
        tempBlog.filter((result) => {
          setloading(false);
          return result.Passenger.email
            .toLowerCase()
            .includes(search.email.toLowerCase());
        })
      );
    }
    if (search.mobile !== "") {
      setBookings(
        tempBlog.filter((result) => {
          setloading(false);
          return result.Passenger.nic_number.includes(
            search.mobile.toLowerCase()
          );
        })
      );
    }
    if (search.status !== "") {
      setBookings(
        tempBlog.filter((result) => {
          setloading(false);
          return result.bookingStatus
            ? result.bookingStatus
                .toLowerCase()
                .includes(search.status.toLowerCase())
            : "";
        })
      );
    }
    if (search.email !== "" && search.name !== "") {
      setBookings(
        tempBlog.filter((result) => {
          setloading(false);
          return (
            result.Passenger.email
              .toLowerCase()
              .includes(search.email.toLowerCase()) &&
            result.Passenger.first_name
              .toLowerCase()
              .includes(search.name.toLowerCase())
          );
        })
      );
    }
    if (search.email !== "" && search.mobile !== "") {
      setBookings(
        tempBlog.filter((result) => {
          setloading(false);
          return (
            result.Passenger.email
              .toLowerCase()
              .includes(search.email.toLowerCase()) &&
            result.Passenger.nic_number.includes(search.mobile.toLowerCase())
          );
        })
      );
    }
    if (search.mobile !== "" && search.name !== "") {
      setBookings(
        tempBlog.filter((result) => {
          setloading(false);
          return (
            result.Passenger.nic_number.includes(search.mobile) &&
            result.Passenger.first_name
              .toLowerCase()
              .includes(search.name.toLowerCase())
          );
        })
      );
    }
    if (search.mobile !== "" && search.name !== "" && search.email !== "") {
      setBookings(
        tempBlog.filter((result) => {
          setloading(false);
          return (
            result.Passenger.nic_number.includes(search.mobile) &&
            result.Passenger.first_name
              .toLowerCase()
              .includes(search.name.toLowerCase()) &&
            result.Passenger.email
              .toLowerCase()
              .includes(search.email.toLowerCase())
          );
        })
      );
    }
  }
  function sortByDesc(e) {
    setloading(true);
    e.preventDefault();
    if (e.target.value == 1) {
      const sortByName = [...bookings];
      sortByName.sort((a, b) => (a.name < b.name ? 1 : -1));
      setBookings(sortByName);
      setloading(false);
    } else {
      const sortByName = [...bookings];
      sortByName.sort((a, b) => (a.name > b.name ? 1 : -1));
      setBookings(sortByName);
      setloading(false);
    }
  }
  function clearSearch(e) {
    e.preventDefault();
    // window.location.reload();
    setBookings(tempBlog);
    setSearch({ email: "", name: "", mobile: "" });
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("status").value = "";
  }

  function splitDate(x) {
    if (x) {
      let y = x.split("T");
      return y[0];
    }
  }
  function getBooking() {
    Axios.get(`${process.env.React_App_Api_Url}/api/booking/allbooking`)
      .then((res) => {
        setBookings(res.data.bookingsList);
        settempBlog(res.data.bookingsList);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    setloading(true);
    getBooking();
  }, []);

  return (
    <>
      {loading ? <div className="loading"></div> : ""}
      <section className="section">
        <div className="container">
          <div className="edit-profile" style={{ width: "100%" }}>
            <h3>Bookings</h3>

            <div className="edit-details">
              <div className="p-history-head">
                <form>
                  <div>
                    <div>
                      <input
                        type="text"
                        placeholder="search by name"
                        id="name"
                        onChange={onChange}
                        autoComplete="off"
                      />
                      &nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        placeholder="search by email"
                        id="email"
                        onChange={onChange}
                        autoComplete="off"
                      />
                      &nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        placeholder="search by cnic"
                        id="mobile"
                        onChange={onChange}
                        autoComplete="off"
                      />
                      &nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        placeholder="search by status"
                        id="status"
                        onChange={onChange}
                        autoComplete="off"
                      />
                      &nbsp;&nbsp;&nbsp;
                      <select
                        onChange={(e) => {
                          sortByDesc(e);
                        }}
                      >
                        <option value="1">Decending</option>
                        <option value="2">Accending</option>
                      </select>
                      &nbsp;&nbsp;&nbsp;
                      <br></br>
                      <br></br>
                      <a
                        href="#"
                        className="button-green"
                        onClick={(e) => {
                          searchfunc(e);
                        }}
                        style={{ marginTop: "2%" }}
                      >
                        Search
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a
                        href="#"
                        className="button-green"
                        onClick={(e) => {
                          clearSearch(e);
                        }}
                        style={{ marginTop: "2%" }}
                      >
                        Clear
                      </a>
                    </div>
                  </div>
                </form>
              </div>

              <div className="table-responsive" style={{ marginTop: "5%" }}>
                <table className="order-table">
                  <tr>
                    <th>Passenger Name</th>
                    <th>Passenger CNIC</th>
                    <th>Passenger Email</th>
                    <th>Status</th>
                    <th>Booked By</th>
                    <th>Created At</th>
                    <th>Details</th>
                  </tr>
                  {bookings.length !== 0
                    ? bookings.map((booking) => {
                        return (
                          <tr>
                            <td>
                              {booking.Passenger.first_name +
                                " " +
                                booking.Passenger.last_name}{" "}
                            </td>
                            <td>{booking.Passenger.nic_number}</td>
                            <td>{booking.Passenger.email}</td>
                            <td>{booking.bookingStatus}</td>
                            <td>
                              {booking.Passenger.User.user_role == "manager"
                                ? "Agent"
                                : booking.Passenger.User.user_role}
                            </td>
                            <td>{splitDate(booking.createdAt)}</td>
                            <td>
                              <Link
                                href="#"
                                className="button-green"
                                to={`/bookingdetails/${booking.orderId}/${booking.flyhubBookingId}`}
                              >
                                Details
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    : "No User Found."}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Bookingcompadmin;
