import React, { useState, useEffect } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { parse, stringify, toJSON, fromJSON } from "flatted";

toast.configure();

function Editprofilecomp() {
  const [loading, setloading] = useState(false);
  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("blogUser"))
  );
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [purchaseHistoryByStatus, setPurchaseHistoryByStatus] = useState([]);
  const [commissionHistory, setCommissionHistory] = useState([]);
  const [status, setStatus] = useState("");
  const [pagination, setPagination] = useState("9");
  const history = useHistory();
  const [search, setSearch] = useState({
    name: "",
    email: "",
    mobile: "",
    startDate: "",
    endDate: "",
  });
  const [tempBlog, settempBlog] = useState([]);
  const [tempCommissionHistory, setTempCommissionHistory] = useState([]);

  function clearSearch(e) {
    e.preventDefault();
    // window.location.reload();
    setPurchaseHistory(tempBlog);
    setCommissionHistory(tempCommissionHistory);
    setSearch({ email: "", name: "", mobile: "", startDate: "", endDate: "" });
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
  }

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
    if (e.target.id == "startDate") {
      search[e.target.id] = e.target.value;
    }

    if (e.target.id == "endDate") {
      search[e.target.id] = e.target.value;
    }
  }
  async function searchfuncCommissionHistory(e) {
    e.preventDefault();
    if (search.startDate != "" && search.endDate != "") {
      var sd = new Date(search.startDate).getTime();
      var ed = new Date(search.endDate).getTime();
      var time;
      await setCommissionHistory(
        tempCommissionHistory.filter((result) => {
          time = new Date(result.createdAt).getTime();
          if (sd < time && time < ed) {
            console.log(true);
          }
          return sd < time && time < ed; // return (
        })
      );
      setloading(false);
    }
  }
  async function searchfunc(e) {
    e.preventDefault();
    setloading(true);
    if (search.name !== "") {
      setPurchaseHistory(
        tempBlog.filter((result) => {
          setloading(false);
          return result.Passenger.first_name
            .toLowerCase()
            .includes(search.name.toLowerCase());
        })
      );
    }
    if (search.email !== "") {
      setPurchaseHistory(
        tempBlog.filter((result) => {
          setloading(false);
          return result.Passenger.email
            .toLowerCase()
            .includes(search.email.toLowerCase());
        })
      );
    }
    if (search.mobile !== "") {
      setPurchaseHistory(
        tempBlog.filter((result) => {
          setloading(false);
          return result.Passenger.nic_number.includes(
            search.mobile.toLowerCase()
          );
        })
      );
    }
    if (search.startDate != "" && search.endDate != "") {
      var sd = new Date(search.startDate).getTime();
      var ed = new Date(search.endDate).getTime();
      var time;
      await setPurchaseHistory(
        tempBlog.filter((result) => {
          time = new Date(result.createdAt).getTime();
          if (sd < time && time < ed) {
            console.log(true);
          }
          return sd < time && time < ed; // return (
        })
      );
      setloading(false);
    }

    if (search.email !== "" && search.name !== "") {
      setPurchaseHistory(
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
      setPurchaseHistory(
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
      setPurchaseHistory(
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
      setPurchaseHistory(
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

  function splitDate(x) {
    if (x) {
      let y = x.split("T");
      return y[0];
    }
  }
  function logOut(e) {
    e.preventDefault();
    localStorage.clear();
    history.replace("/sign-in");
    window.location.reload();
  }
  function updateUser(e) {
    e.preventDefault();
    UpdateProfile(e, userProfile.id);
  }
  function onUpdateUser(e) {
    const newUserProfile = { ...userProfile };
    newUserProfile[e.target.id] = e.target.value;
    setUserProfile(newUserProfile);
    console.log(setUserProfile);
  }
  function getCommissionList() {
    Axios.get(
      `${process.env.React_App_Api_Url}/api/commission/getAllCommission/?id=${userProfile.id}`
    )
      .then((res) => {
        console.log(res);
        //        setloading(false);
        setCommissionHistory(res.data.commissionList);
        setTempCommissionHistory(res.data.commissionList);
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function getBalance() {
    var d;
    Axios.get(
      `${process.env.React_App_Api_Url}/api/flight/get_balance_from_flyHub`
    )
      .then((res) => {
        d = parse(res.data.balance);
        console.log(d);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function getBookingList() {
    Axios.get(
      `${process.env.React_App_Api_Url}/api/user/getAllBooking/?id=${userProfile.id}`
    )
      .then((res) => {
        console.log(res);
        setloading(false);
        setPurchaseHistory(res.data.bookingsList);
        settempBlog(res.data.bookingsList);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function getBookingByStatus(e, status) {
    setloading(true);
    setPurchaseHistoryByStatus([]);
    e.preventDefault();
    setStatus(status);
    Axios.get(
      `${process.env.React_App_Api_Url}/api/booking/get_booking_by_status/?status=${status}&id=${userProfile.id}`
    )
      .then((res) => {
        console.log(res);
        setPurchaseHistoryByStatus(res.data.bookingsList);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }

  const UpdateProfile = (e, id) => {
    e.preventDefault();
    // http://172.16.17.149:3001
    setloading(true);
    Axios.put(`${process.env.React_App_Api_Url}/api/user/${id}`, {
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      mobile: userProfile.mobile,
      email: userProfile.email,
      agencyName: userProfile.agencyName,
      agency_address: userProfile.agency_address,
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
  function sortByDesc(e) {
    e.preventDefault();
    if (e.target.value == 1) {
      const sortByName = [...purchaseHistory];
      sortByName.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
      setPurchaseHistory(sortByName);
    } else {
      const sortByName = [...purchaseHistory];
      sortByName.sort((a, b) => (a.updatedAt > b.updatedAt ? 1 : -1));
      setPurchaseHistory(sortByName);
    }
  }
  function onUpdatePagination(e) {
    if (e.target.value < 0) {
      setPagination(0);
    } else {
      setPagination(e.target.value);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    setloading(true);
    getBookingList();
    getCommissionList();
    getBalance();
  }, []);

  return (
    <>
      {loading ? <div className="loading"></div> : ""}
      <section className="section">
        <div className="container">
          <div
            className="d-flex align-items-start justify-content-center edit-profile"
            style={{ width: "100%" }}
          >
            <div
              className="nav flex-column nav-pills me-3 tabs-left"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link tabs-btn active"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <i className="fa-solid fa-clock-rotate-left"></i>Ticketing
                History
              </button>
              <div
                className="accordion"
                id="accordionPanelsStayOpenExample"
                style={{ marginBottom: "2%" }}
              >
                <div
                  className="accordion-item"
                  style={{
                    borderBottom: "none",
                    backgroundColor: "#fff",
                  }}
                >
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <i class="fas fa-angle-double-down"></i>
                      &nbsp;&nbsp;Queues
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div className="accordion-body">
                      <button
                        className="nav-link tabs-btn"
                        id="v-pills-statusshow-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-statusshow"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-statusshow"
                        aria-selected="true"
                        UnConfirmed
                        onClick={(e) => {
                          getBookingByStatus(e, "Pending");
                        }}
                      >
                        <i className="fa-solid fa-clock-rotate-left"></i>Pending
                      </button>
                      <button
                        className="nav-link tabs-btn"
                        id="v-pills-statusshow-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-statusshow"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-statusshow"
                        aria-selected="true"
                        onClick={(e) => {
                          getBookingByStatus(e, "Booked");
                        }}
                      >
                        <i className="fa-solid fa-clock-rotate-left"></i>Booked
                      </button>
                      <button
                        className="nav-link tabs-btn"
                        id="v-pills-statusshow-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-statusshow"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-statusshow"
                        aria-selected="true"
                        onClick={(e) => {
                          getBookingByStatus(e, "Ticketed");
                        }}
                      >
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        Ticketed
                      </button>

                      <button
                        className="nav-link tabs-btn"
                        id="v-pills-statusshow-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-statusshow"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-statusshow"
                        aria-selected="true"
                        onClick={(e) => {
                          getBookingByStatus(e, "Cancelled");
                        }}
                      >
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        Cancelled
                      </button>
                      <button
                        className="nav-link tabs-btn"
                        id="v-pills-statusshow-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-statusshow"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-statusshow"
                        aria-selected="true"
                        onClick={(e) => {
                          getBookingByStatus(e, "Expired");
                        }}
                      >
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        Expired
                      </button>
                      <button
                        className="nav-link tabs-btn"
                        id="v-pills-statusshow-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-statusshow"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-statusshow"
                        aria-selected="true"
                        onClick={(e) => {
                          getBookingByStatus(e, "UnConfirmed");
                        }}
                      >
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        UnConfirmed
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="nav-link tabs-btn "
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <i className="fa-solid fa-pen-to-square"></i>Edit Profile
              </button>
              {userProfile ? (
                userProfile.user_role == "manager" ? (
                  <>
                    <button
                      className="nav-link tabs-btn"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <i className="fa-solid fa-calendar-days"></i>Update
                      Balance
                    </button>

                    <button
                      className="nav-link tabs-btn"
                      id="v-pills-commission-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-commission"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-commission"
                      aria-selected="false"
                    >
                      <i className="fa-solid fa-clock-rotate-left"></i>Comission
                      History
                    </button>
                  </>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              <button
                onClick={(e) => {
                  logOut(e);
                }}
                className="nav-link tabs-btn"
              >
                <i className="fa-solid fa-right-from-bracket"></i>Signout
              </button>
            </div>

            <div className="tab-content tabs-right" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <h3>Ticketing History</h3>

                <div className="edit-details">
                  <div className="p-history-head">
                    <form>
                      <div>
                        <p className="d-inline">Showing </p>
                        <input
                          type="number"
                          defaultValue={pagination}
                          style={{ width: "10%" }}
                          onChange={(e) => {
                            onUpdatePagination(e);
                          }}
                          min="0"
                        />
                        <input
                          type="text"
                          placeholder="search by name"
                          id="name"
                          onChange={onChange}
                          autoComplete="off"
                          style={{ marginLeft: "2%" }}
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
                          style={{ marginTop: "2%" }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <br></br>
                        <p className="d-inline">Start Date </p>
                        <input
                          type="date"
                          placeholder="Start Date"
                          id="startDate"
                          onChange={onChange}
                          autoComplete="off"
                          style={{ marginTop: "2%" }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <p className="d-inline">End Date </p>
                        <input
                          type="date"
                          placeholder="End Date"
                          id="endDate"
                          onChange={onChange}
                          autoComplete="off"
                          style={{ marginTop: "2%" }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        {/*<input type="date" />*/}
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
                    </form>
                  </div>

                  <div className="table-responsive">
                    <table className="order-table" style={{ marginTop: "5%" }}>
                      <tr>
                        <th>Passenger Name</th>
                        <th>Passenger CNIC</th>
                        <th>Passenger Email</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Details</th>
                      </tr>
                      {purchaseHistory
                        ? purchaseHistory.length !== 0
                          ? purchaseHistory.Passenger !== undefined ||
                            purchaseHistory.Passenger !== null ||
                            purchaseHistory.Passenger.length !== 0
                            ? purchaseHistory.map((ph, index) => {
                                return index < pagination ? (
                                  ph.flyhubBookingId != "null" ? (
                                    <tr>
                                      <td>{ph.Passenger.first_name}</td>
                                      <td>{ph.Passenger.nic_number}</td>
                                      <td>{ph.Passenger.email}</td>
                                      {/*<td>{splitDate(ph.Flight.arrival_time)}</td>*/}
                                      <td>{ph.bookingStatus}</td>
                                      <td>{splitDate(ph.updatedAt)}</td>
                                      <td>
                                        <Link
                                          href="#"
                                          className="button-green"
                                          to={`/bookingdetails/${ph.orderId}/${ph.flyhubBookingId}`}
                                        >
                                          Details
                                        </Link>
                                      </td>
                                    </tr>
                                  ) : (
                                    ""
                                  )
                                ) : (
                                  ""
                                );
                              })
                            : "No History Found."
                          : ""
                        : ""}
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="v-pills-statusshow"
                role="tabpanel"
                aria-labelledby="v-pills-statusshow-tab"
              >
                <h3>{status}</h3>

                <div className="edit-details">
                  {/* <div className="p-history-head">
                    <form>
                      <div>
                        <p className="d-inline">Showing </p>
                        <input
                          type="number"
                          defaultValue={pagination}
                          style={{ marginLeft: "2%" }}
                          onChange={(e) => {
                            onUpdatePagination(e);
                          }}
                          min="0"
                        />
                        <input
                          type="text"
                          placeholder="search by name"
                          id="name"
                          onChange={onChange}
                          autoComplete="off"
                          style={{ marginLeft: "2%" }}
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
                          style={{ marginTop: "2%" }}
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
                        <a
                          href="#"
                          className="button-green"
                          onClick={(e) => {
                            searchfunc(e);
                          }}
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
                        >
                          Clear
                        </a>
                      </div>
                    </form>
                  </div> */}

                  <div className="table-responsive">
                    <table className="order-table" style={{ marginTop: "5%" }}>
                      <tr>
                        <th>Passenger Name</th>
                        <th>Passenger CNIC</th>
                        <th>Passenger Email</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Details</th>
                      </tr>
                      {purchaseHistoryByStatus
                        ? purchaseHistoryByStatus.length !== 0
                          ? purchaseHistoryByStatus.Passenger !== undefined ||
                            purchaseHistoryByStatus.Passenger !== null ||
                            purchaseHistoryByStatus.Passenger.length !== 0
                            ? purchaseHistoryByStatus.map((ph, index) => {
                                return index < pagination ? (
                                  ph.flyhubBookingId != "null" ? (
                                    <tr>
                                      <td>{ph.Passenger.first_name}</td>
                                      <td>{ph.Passenger.nic_number}</td>
                                      <td>{ph.Passenger.email}</td>
                                      {/*<td>{splitDate(ph.Flight.arrival_time)}</td>*/}
                                      <td>{ph.bookingStatus}</td>
                                      <td>{splitDate(ph.updatedAt)}</td>
                                      <td>
                                        <Link
                                          href="#"
                                          className="button-green"
                                          to={`/bookingdetails/${ph.orderId}/${ph.flyhubBookingId}`}
                                        >
                                          Details
                                        </Link>
                                      </td>
                                    </tr>
                                  ) : (
                                    ""
                                  )
                                ) : (
                                  ""
                                );
                              })
                            : "No History Found."
                          : "No History Found."
                        : "No History Found."}
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <h3>Edit Profile</h3>

                <div className="edit-details">
                  <form action="">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <div className="form-field">
                          <label>First Name </label>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={userProfile.firstName}
                            onChange={onUpdateUser}
                            id="firstName"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-lg-6">
                        <div className="form-field">
                          <label>Last Name</label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={userProfile.lastName}
                            onChange={onUpdateUser}
                            id="lastName"
                          />
                        </div>
                      </div>
                    </div>

                    {/*<div className="form-field">
                                <label>Date Of Birth</label>
                                <input type="text" placeholder="Last Name"  onfocus="(this.type='date')" />
                                </div>*/}

                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <div className="form-field">
                          <label>Email </label>
                          <input
                            type="email"
                            placeholder="mail@example.com"
                            value={userProfile.email}
                            onChange={onUpdateUser}
                            id="email"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-lg-6">
                        <div className="form-field">
                          <label>Phone</label>
                          <input
                            type="text"
                            placeholder="Phone"
                            value={userProfile.mobile}
                            onChange={onUpdateUser}
                            id="mobile"
                          />
                        </div>
                      </div>
                      {userProfile ? (
                        userProfile.user_role == "manager" ? (
                          <>
                            <div className="col-12 col-lg-6">
                              <div className="form-field">
                                <label>Agency User Name</label>
                                <input
                                  type="text"
                                  placeholder="name"
                                  value={userProfile.agencyName}
                                  onChange={onUpdateUser}
                                  id="agencyName"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div className="form-field">
                                <label>Agency Address</label>
                                <input
                                  type="text"
                                  placeholder="address"
                                  value={userProfile.agency_address}
                                  onChange={onUpdateUser}
                                  id="agency_address"
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                    </div>

                    {/*<div className="form-field">
                                <label>Password</label>
                                <input type="password" placeholder="Password" />
                            </div>


                            <div className="form-field">
                                <label>City</label>
                                <input type="text" placeholder="City" />
                            </div>


                            <div className="row">

                                <div className="col-lg-6 col-12">

                                    <div className="form-field">
                                     <label for="countries">Country/Region *</label>

                                        <select name="countries" id="countries" oninput="this.classNameName = ''">
                                        <option value="" disabled selected>Country/Region</option>
                                        <option value="pakistan">Pakistan</option>
                                        <option value="india">India</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="sri-lanka">Sri Lanka</option>
                                        </select>

                                    </div>

                            </div>

                                <div className="col-lg-6 col-12">

                                    
                                    <div className="form-field">
                                        <label>Postal Code</label>
                                        <input type="text" placeholder="Postal Code" />
                                    </div>
                                    
                                </div>

                            </div>*/}

                    <div
                      className="form-field"
                      style={{ "text-align": "center" }}
                    >
                      <input
                        type="submit"
                        value="Save"
                        className="button-green-half"
                        style={{ width: "100%" }}
                        onClick={(e) => {
                          updateUser(e);
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <h3>Update Balance</h3>

                <div className="edit-details">
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="mb-3">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account. Please send the payment screenshot to WhatsApp
                        01712909113
                      </p>

                      <h5>Bank Details</h5>
                      <p>
                        <strong>Bank Name:</strong> The City Bank Limited
                      </p>
                      <p>
                        <strong>Account Name:</strong> MSR Computer Press
                      </p>
                      <p>
                        <strong>Branch Name:</strong> Zindabazar Branch
                      </p>
                      <p>
                        <strong>Branch Code:</strong> 415
                      </p>
                      <p>
                        <strong>Swift Code:</strong> CIBLBDDH
                      </p>
                      <p>
                        <strong>Routing Number:</strong> 225914155
                      </p>
                      <p>
                        <strong>District:</strong> Sylhet
                      </p>
                      <p>
                        <strong>Company Contact Number:</strong> 01712909113
                      </p>
                      <p>
                        <strong>Address:</strong> Kaniz Plaza, Zindabazar,
                        Kotwali, Sylhet 3100
                      </p>

                      <p className="mt-3">Shop with peace of mind :)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="v-pills-commission"
                role="tabpanel"
                aria-labelledby="v-pills-commission-tab"
              >
                <h3>Commission History</h3>

                <div className="edit-details">
                  <div className="p-history-head">
                    <form>
                      <div>
                        &nbsp;&nbsp;&nbsp;
                        <p className="d-inline">Start Date </p>
                        <input
                          type="date"
                          placeholder="Start Date"
                          id="startDate"
                          onChange={onChange}
                          autoComplete="off"
                        />
                        &nbsp;&nbsp;&nbsp;
                        <p className="d-inline">End Date </p>
                        <input
                          type="date"
                          placeholder="End Date"
                          id="endDate"
                          onChange={onChange}
                          autoComplete="off"
                        />
                        &nbsp;&nbsp;&nbsp;
                        <p className="d-inline">Showing </p>
                        <input
                          type="number"
                          defaultValue={pagination}
                          style={{ width: "10%" }}
                          onChange={(e) => {
                            onUpdatePagination(e);
                          }}
                          min="0"
                        />
                        &nbsp;&nbsp;&nbsp;
                        <select
                          style={{ marginTop: "2%" }}
                          onChange={(e) => {
                            sortByDesc(e);
                          }}
                        >
                          <option value="1">Decending</option>
                          <option value="2">Accending</option>
                        </select>
                        &nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          className="button-green"
                          onClick={(e) => {
                            searchfuncCommissionHistory(e);
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
                    </form>
                  </div>

                  <div className="table-responsive">
                    <table className="order-table" style={{ marginTop: "5%" }}>
                      <tr>
                        <th>Booking ID</th>
                        <th>Commission</th>
                        <th>Created At</th>
                        <th>Details</th>
                      </tr>
                      {commissionHistory
                        ? commissionHistory.length !== 0
                          ? commissionHistory.map((ph, index) => {
                              return index < pagination ? (
                                <tr>
                                  <td>{ph.flyHubBooking_id}</td>
                                  <td>{ph.commission}</td>
                                  <td>{splitDate(ph.updatedAt)}</td>
                                  <td>
                                    <Link
                                      href="#"
                                      className="button-green"
                                      to={`/bookingdetails/${ph.orderId}/${ph.flyHubBooking_id}`}
                                    >
                                      Details
                                    </Link>
                                  </td>
                                </tr>
                              ) : (
                                ""
                              );
                            })
                          : "No History Found."
                        : ""}
                    </table>
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

export default Editprofilecomp;
