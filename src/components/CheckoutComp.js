import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import { parse, stringify, toJSON, fromJSON } from "flatted";
toast.configure();

function CheckoutComp() {
  const params = useParams();
  const flyingObj = JSON.parse(params.flyObj);
  const [showProfile, setShowProfile] = useState(
    JSON.parse(localStorage.getItem("blogUser"))
  );
  const [user, setUserState] = useState({
    Gender: "",
    DateOfBirth: "",
    PaxType: "",
    Title: "",
    FirstName: "",
    Email: "",
    LastName: "",
    ContactNumber: "",
    Address1: "",
    apartment: "",
    city: "",
    Nationality: "",
    CountryCode: "",
    nic_number: "",
    passport_number: "",
    userId: "",
    useremail: "",
    flightId: flyingObj.id,
    isLeadPassenger: false,
    Searchid: "",
    Resultid: "",
    passportnationality: "",
    passportexpirydate: "",
  });
  const [loading, setloading] = useState(false);
  const [commission, setCommission] = useState(0);
  const [numberOfForms, setNumberofForms] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [nextPage, setNextPage] = useState(true);
  const [flightDetails, setflightDetails] = useState([]);
  const [segments, setSegments] = useState([]);
  const [countries, setCountries] = useState([]);
  const [allProfiles, setAllProfiles] = useState([]);
  const [totalnum, settotalnum] = useState([]);
  const [internationalFlights, setInternationalFlights] = useState(true);
  const [checktermscondition, setchecktermscondition] = useState(false);
  const [onHoldButton, setOnHoldButton] = useState(false);
  var allpassengerInfo = [];
  const history = useHistory();
  function splitDate(x) {
    if (x) {
      let y = x.split("T");
      return y[0];
    }
  }
  function splitTime(x) {
    if (x) {
      let y = x.split("T");
      // let z = y[1].split('.');
      return y[1];
    }
  }
  function setvalues(index) {
    debugger;

    setTimeout(() => {
      setUserState({
        Gender: allProfiles[index].Gender,
        DateOfBirth: allProfiles[index].DateOfBirth,
        PaxType: allProfiles[index].PaxType,
        Title: allProfiles[index].Title,
        FirstName: allProfiles[index].FirstName,
        Email: allProfiles[index].Email,
        LastName: allProfiles[index].LastName,
        ContactNumber: allProfiles[index].ContactNumber,
        Address1: allProfiles[index].Address1,
        apartment: allProfiles[index].apartment,
        city: allProfiles[index].city,
        Nationality: allProfiles[index].Nationality,
        CountryCode: allProfiles[index].CountryCode,
        nic_number: allProfiles[index].nic_number,
        passport_number: allProfiles[index].passport_number,
        userId: allProfiles[index].userId,
        useremail: allProfiles[index].useremail,
        flightId: flyingObj.id,
        isLeadPassenger: allProfiles[index].isLeadPassenger,
        Searchid: allProfiles[index].flightId,
        Resultid: allProfiles[index].Resultid,
        passportnationality: allProfiles[index].passportnationality,
        passportexpirydate: allProfiles[index].passportexpirydate,
      });

      if (allProfiles[index].PaxType != "Infant") {
        document.getElementById("Gender").value = allProfiles[index].Gender;
      }

      document.getElementById("isLeadPassenger").value =
        allProfiles[index].isLeadPassenger;
      document.getElementById("DateOfBirth").value =
        allProfiles[index].DateOfBirth;
      document.getElementById("PaxType").value = allProfiles[index].PaxType;
      document.getElementById("Title").value = allProfiles[index].Title;
      document.getElementById("FirstName").value = allProfiles[index].FirstName;
      document.getElementById("LastName").value = allProfiles[index].LastName;
      document.getElementById("Email").value = allProfiles[index].Email;
      document.getElementById("ContactNumber").value =
        allProfiles[index].ContactNumber;
      document.getElementById("Address1").value = allProfiles[index].Address1;
      // document.getElementById("apartment").value=allProfiles[index].apartment;
      document.getElementById("Nationality").value =
        allProfiles[index].Nationality;
      // document.getElementById("city").value=allProfiles[index].city;
      //document.getElementById("CountryCode").value=allProfiles[index].CountryCode;
      document.getElementById("nic_number").value =
        allProfiles[index].nic_number;
      if (allProfiles[index].passport_number) {
        document.getElementById("passport_number").value =
          allProfiles[index].passport_number;
        document.getElementById("passportnationality").value =
          allProfiles[index].passportnationality;
        document.getElementById("passportexpirydate").value =
          allProfiles[index].passportexpirydate;
      }
      setloading(false);
    }, 1000);
  }
  async function PreviousForm(e, index) {
    debugger;
    setloading(true);
    e.preventDefault();
    if (nextPage == false) {
      setNextPage(true);
    }
    setNumberofForms(index);
    window.scrollTo(0, 0);
    setvalues(index);
  }
  async function next(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    debugger;

    if (
      document.getElementById("isLeadPassenger").value == "" ||
      document.getElementById("DateOfBirth").value == "" ||
      document.getElementById("PaxType").value == "" ||
      document.getElementById("Title").value == "" ||
      document.getElementById("FirstName").value == "" ||
      document.getElementById("LastName").value == "" ||
      document.getElementById("Email").value == "" ||
      document.getElementById("ContactNumber").value == "" ||
      document.getElementById("Address1").value == "" ||
      // document.getElementById("apartment").value=="" ||
      document.getElementById("Nationality").value == "" ||
      // document.getElementById("city").value=="" ||
      //          document.getElementById("CountryCode").value == "" ||
      document.getElementById("nic_number").value == "" ||
      document.getElementById("passport_number").value == "" ||
      document.getElementById("passportnationality").value == "" ||
      document.getElementById("passportexpirydate").value == ""
    ) {
      toast.error("All feilds are required.");
      return;
    }
    if (user.PaxType != "Infant") {
      if (document.getElementById("Gender").value == "") {
        toast.error("All feilds are required.");
        return;
      }
    }

    const newPassengerInfo = { ...allProfiles };
    newPassengerInfo[numberOfForms] = user;
    setAllProfiles(newPassengerInfo);
    var numberofforms = numberOfForms + 1;
    await setNumberofForms(numberofforms);
    console.log(numberofforms);
    if (
      numberofforms ==
      parseInt(flyingObj.numberofadult) +
        parseInt(flyingObj.numberofkids) +
        parseInt(flyingObj.numberofinfants)
    ) {
      setNextPage(false);
    } else {
      if (allProfiles[numberofforms].FirstName) {
        console.log("Helo");
        setvalues(numberofforms);
      } else {
        if (user.PaxType != "Infant") {
          document.getElementById("Gender").value = "";
        }
        document.getElementById("isLeadPassenger").value = "";
        document.getElementById("DateOfBirth").value = "";
        document.getElementById("PaxType").value = "";
        document.getElementById("Title").value = "";
        document.getElementById("FirstName").value = "";
        document.getElementById("LastName").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("ContactNumber").value = "";
        document.getElementById("Address1").value = "";
        // document.getElementById("apartment").value=""
        document.getElementById("Nationality").value = "";
        document.getElementById("nic_number").value = "";
        document.getElementById("passport_number").value = "";
        document.getElementById("passportnationality").value = "";
        document.getElementById("passportexpirydate").value = "";
        // document.getElementById("city").value=""
        //         document.getElementById("CountryCode").value=""
      }
    }
  }
  function createPassenger(bookingid, status, pnr, onhold) {
    setloading(true);
    Axios.post(
      `${process.env.React_App_Api_Url}/api/passenger/create_passenger`,
      {
        allProfiles,
        total_legth:
          parseInt(flyingObj.numberofadult) +
          parseInt(flyingObj.numberofkids) +
          parseInt(flyingObj.numberofinfants),
        flyhubBookingID: bookingid,
        commission: commission.toFixed(0),
        role: showProfile.user_role,
        pnr: pnr,
        status: status,
      }
    )
      .then((res) => {
        //  setloading(false)
        if (showProfile.user_role === "manager") {
          if (onhold) {
            history.replace(`/bookingdetails/${res.data.orderId}/${bookingid}`);
          } else {
            history.replace(
              `/bookingdetails/preview/${res.data.orderId}/${bookingid}`
            );
          }
        } else {
          if (onhold) {
            history.replace(`/bookingdetails/${res.data.orderId}/${bookingid}`);
          } else {
            getPayment(res.data.orderId);
          }
        }
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  }
  function createPreAirBook(e, onhold) {
    setloading(true);
    if (!checktermscondition) {
      toast.error(
        "Read and Agree to the Terms & Conditions, Privacy Policy, and Return Refund Policy"
      );
      setloading(false);
      return;
    }
    debugger;
    setOnHoldButton(onhold);
    e.preventDefault();
    var z;
    Axios.post(`${process.env.React_App_Api_Url}/api/flight/AirPreBook`, {
      allProfiles,
      total_legth:
        parseInt(flyingObj.numberofadult) +
        parseInt(flyingObj.numberofkids) +
        parseInt(flyingObj.numberofinfants),
      searchId: flyingObj.searchId,
      resultId: flyingObj.resultId,
    })
      .then((res) => {
        //          setloading(false);
        debugger;
        z = parse(res.data.flightdetails);
        console.log("Pre air book", z);
        if (z.data.Error) {
          toast.error(`${z.data.Error.ErrorMessage}`);
          setloading(false);
        } else if (
          z.data.RePriceStatus &&
          z.data.RePriceStatus == "FareUnavailable"
        ) {
          toast.error("Fare Unavailable. Kindly try another flight");
          setloading(false);
        } else if (
          z.data.RePriceStatus &&
          z.data.RePriceStatus == "NoPriceChange"
        ) {
          if (showProfile.user_role === "manager") {
            debugger;
            if (onhold) {
              createAirBook(onhold);
            } else {
              payemntFromManager();
            }
          } else {
            if (onhold) {
              createAirBook();
            } else {
              createPassenger("null", "null", "null", onhold);
            }
          }
        }
        // history.replace("/edit-profile");
        // setNextPage(false)
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  }
  async function payemntFromManager() {
    //    var a = calculateFivePercent(amount);
    Axios.post(
      `${process.env.React_App_Api_Url}/api/flight/CheckManagerBalance`,
      {
        amount: totalamount.toFixed(0),
        id: showProfile.id,
      }
    )
      .then((res) => {
        //  setloading(false)
        if (showProfile.user_role === "manager") {
          if (res.data.message === "Amount Deducted Successfully.") {
            createAirBook();
          } else {
            toast.error("Insufficient Balance.");
            setloading(false);
          }
        }
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  }
  function createAirBook(onhold) {
    setloading(true);
    var x;
    Axios.post(`${process.env.React_App_Api_Url}/api/flight/AirBook`, {
      allProfiles,
      total_legth:
        parseInt(flyingObj.numberofadult) +
        parseInt(flyingObj.numberofkids) +
        parseInt(flyingObj.numberofinfants),
      searchId: flyingObj.searchId,
      resultId: flyingObj.resultId,
    })
      .then((res) => {
        // setloading(false);
        x = parse(res.data.flightdetails);
        console.log(x.data);
        debugger;
        if (x.data.BookingID) {
          debugger;
          if (onhold) {
            createPassenger(
              x.data.BookingID,
              x.data.BookingStatus,
              x.data.Results[0].segments[0].AirlinePNR,
              onhold
            );
          } else {
            debugger;
            Axios.post(
              `${process.env.React_App_Api_Url}/api/flight/AirTicketing`,
              {
                bookingId: x.data.BookingID,
                IsAcceptedPriceChangeandIssueTicket: true,
              }
            )
              .then((res) => {
                var y = parse(res.data.flightdetails);
                console.log("AirTicketing", y.data);
                if (y.data.Error) {
                  toast.error(`${y.data.Error.ErrorMessage}`);
                  setloading(false);
                } else {
                  createPassenger(
                    y.data.BookingID,
                    y.data.BookingStatus,
                    x.data.Results[0].segments[0].AirlinePNR,
                    onhold
                  );
                }
              })
              .catch((err) => {
                setloading(false);
              });
          }
          // if(showProfile.user_role=='customer')
          // {
          //   toast.success('Payment Done Sucessfully');
          // }
        } else {
          if (x.data.Error.ErrorMessage) {
            toast.error(`${x.data.Error.ErrorMessage}`);
            setloading(false);
          }
        }
        // history.replace("/edit-profile");
        // setNextPage(false)
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  }
  function onChange(e) {
    const newUser = { ...user };
    if (newUser["PaxType"] == "Infant") {
      // delete newUser["Gender"];
      newUser[e.target.id] = e.target.value;
      newUser["userId"] = showProfile.id;
      newUser["useremail"] = showProfile.email;
      newUser["CountryCode"] = newUser["Nationality"];
      newUser["Resultid"] = flyingObj.resultId;
      setUserState(newUser);
    } else {
      newUser[e.target.id] = e.target.value;
      newUser["userId"] = showProfile.id;
      newUser["useremail"] = showProfile.email;
      newUser["CountryCode"] = newUser["Nationality"];
      newUser["Resultid"] = flyingObj.resultId;
      setUserState(newUser);
    }
  }
  function getBookingFromFlyhub() {
    var y;
    Axios.post(
      `${process.env.React_App_Api_Url}/api/flight/get_searched_flight_details`,
      {
        searchId: flyingObj.searchId,
        resultId: flyingObj.resultId,
      }
    )
      .then((res) => {
        y = parse(res.data.flightdetails);
        console.log(y.data.Results);
        if (y.data.Results) {
          setSegments(y.data.Results[0]["segments"]);
          setflightDetails(y.data.Results[0]);
          let discount = y.data.Results[0]["TotalFare"] * 0.05;
          setTotalAmount(y.data.Results[0].TotalFare - discount);
          setCommission(discount);
        }
        setloading(false);
        // setCurrency(y.data.Results[0].Currency)
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  }
  function getBlogByIdSamePage() {
    Axios.get(
      `${process.env.React_App_Api_Url}/api/flight/get_flight_by_id?id=${flyingObj.id}`
    )
      .then((res) => {
        setloading(false);
        console.log(res);
        // setflightDetails(res.data.flightsDetail)
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  }
  function calculateFivePercent(price) {
    if (price) {
      let discount = price * 0.05;
      // setCommission(discount);
      return price - discount;
    } else {
      return 0;
    }
  }
  function getCountries() {
    Axios.get("https://api.countrystatecity.in/v1/countries", {
      headers: {
        "X-CSCAPI-KEY":
          "VElGVWJxblkwQWlaTlVtUVRTZTlKSHRvSnJhZDBKenVBS2l0am5hdw==",
      },
    }).then((countries) => {
      debugger;
      setCountries(countries.data);
    });
  }
  function getPayment(orderId) {
    Axios.get(
      `${process.env.React_App_Api_Url}/api/sslcommerz/ssl-request?id=${orderId}&searchID=${flyingObj.searchId}&resultID=${flyingObj.resultId}&currency="BDT"&totalamount=${flightDetails.TotalFare}`
    )
      .then((countries) => {
        window.location.href = countries.data.url;
        // history.replace(`${countries.data.url}`);
        // createPreAirBook();
      })
      .catch((err) => {
        setloading(false);
        toast.error("SSL session was not successful.");
      });
  }
  function checkUserLoginOrNot() {
    if (!showProfile) {
      history.replace("/sign-in");
    }
  }
  useEffect(() => {
    var arr = [];
    window.scrollTo(0, 0);
    setloading(true);
    getBookingFromFlyhub();
    // getBlogByIdSamePage();
    let totalnum =
      parseInt(flyingObj.numberofadult) +
      parseInt(flyingObj.numberofkids) +
      parseInt(flyingObj.numberofinfants);
    debugger;
    if (totalnum === 0) {
      toast.error("Please select number of kids or adults.");
      history.replace(`/flights/${JSON.stringify(flyingObj)}`);
    }
    for (var i = 0; i < totalnum; i++) {
      debugger;
      arr.push(i);
      settotalnum(arr);
      allpassengerInfo.push(user);
      setAllProfiles(allpassengerInfo);
    }
    getCountries();
    checkUserLoginOrNot();
  }, []);
  return (
    <>
      {loading ? <div className="loading"></div> : ""}
      {showProfile ? (
        nextPage ? (
          <section>
            <div className="container-fluid">
              <div className="row checkout">
                <div className="col-lg-8 col-12 col-md-8 checkout-left">
                  <form id="regForm" action="" style={{ marginBottom: "50%" }}>
                    <div>
                      {/*<div className="form-field">
    
                            <div className="form-field-flex">
    
                            <label>Contact Information *</label>
                            <span>Already have an Account?<Link to="/sign-in"> Login</Link></span>
    
                            </div>
    
                            <input placeholder="mail@example.com" id="useremail" onChange={onChange} required/>
    
                          </div>*/}

                      <div className="sign-Title">
                        <h2>{numberOfForms + 1}: Passenger Information</h2>
                      </div>

                      <div className="form-field">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12 dual-width">
                            <label for="PaxType">Pax Type *</label>

                            <select
                              name="PaxType"
                              id="PaxType"
                              onChange={onChange}
                              required
                            >
                              <option value="" disabled selected>
                                Pax Type *
                              </option>
                              <option value="Adult">Adult</option>
                              <option value="Child">Child</option>
                              <option value="Infant">Infant</option>
                            </select>
                          </div>
                          {user.PaxType == "Child" ||
                          user.PaxType == "Infant" ? (
                            <div className="col-lg-6 col-md-6 col-12 dual-width">
                              <label for="Title">Title *</label>

                              <select
                                name="Title"
                                id="Title"
                                onChange={onChange}
                                required
                              >
                                <option value="" disabled selected>
                                  Title
                                </option>
                                <option value="Mstr">Mstr</option>
                                <option value="Miss">Miss</option>
                              </select>
                            </div>
                          ) : (
                            <div className="col-lg-6 col-md-6 col-12 dual-width">
                              <label for="Title">Title *</label>

                              <select
                                name="Title"
                                id="Title"
                                onChange={onChange}
                                required
                              >
                                <option value="" disabled selected>
                                  Title
                                </option>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                              </select>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-field">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12 dual-width">
                            <label>First Name *</label>
                            <input
                              type="text"
                              placeholder="First name"
                              id="FirstName"
                              onChange={onChange}
                              required
                            />
                          </div>

                          <div className="col-lg-6 col-md-6 col-12 dual-width">
                            <label>Last Name *</label>
                            <input
                              type="text"
                              placeholder="Second name"
                              id="LastName"
                              onChange={onChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-field">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12 dual-width">
                            <label>Date of Birth *</label>
                            <input
                              type="date"
                              placeholder="DOB"
                              id="DateOfBirth"
                              onChange={onChange}
                              required
                            />
                          </div>

                          {user.PaxType != "Infant" ? (
                            <div className="col-lg-6 col-md-6 col-12 dual-width">
                              <label for="gender">Gender *</label>

                              <select
                                name="gender"
                                id="Gender"
                                onChange={onChange}
                                required
                              >
                                <option value="" disabled selected>
                                  Male / Female *
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-field">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12 dual-width">
                            <label>Email *</label>
                            <input
                              type="email"
                              className="click email"
                              placeholder="Email"
                              id="Email"
                              onChange={onChange}
                              required
                            />
                          </div>

                          <div className="col-lg-6 col-md-6 col-12 dual-width">
                            <label>Phone *</label>
                            <input
                              type="tel"
                              placeholder="+88088888888888"
                              className="click phone"
                              id="ContactNumber"
                              onChange={onChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-field">
                        <label>Address1 *</label>
                        <input
                          type="text"
                          placeholder="Address1"
                          id="Address1"
                          onChange={onChange}
                          required
                        />
                      </div>

                      {/*<div className="form-field">
                              <label>Apartment, Suite, etc  *</label>
                              <input type="text" placeholder="Apartment, Suite, etc"  id="apartment" onChange={onChange} required/>
                        </div>*/}

                      <div className="form-field">
                        <label for="isLeadPassenger">Lead Passenger *</label>

                        <select
                          name="isLeadPassenger"
                          id="isLeadPassenger"
                          onChange={onChange}
                          required
                        >
                          <option value="" disabled selected>
                            Yes/No
                          </option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <div className="row">
                          <div className="col-12">
                            <label for="countries">Nationality *</label>

                            <select
                              name="countries"
                              id="Nationality"
                              onChange={onChange}
                              required
                            >
                              <option value="" disabled selected>
                                Country/Region
                              </option>
                              {countries
                                ? countries.length !== 0
                                  ? countries.map((country) => {
                                      return (
                                        <option value={country.iso2}>
                                          {country.name}
                                        </option>
                                      );
                                    })
                                  : ""
                                : ""}
                              {/* <option value="india">India</option>
                                        <option value="BD">Bangladesh</option>
                                      <option value="sri-lanka">Sri Lanka</option>*/}
                            </select>
                          </div>

                          {/*<div className="col-6">
                                  <label>Country Code *</label>
                                  <input type="text" placeholder="Country Code"  id="CountryCode" onChange={onChange} required/>
                                    </div>*/}
                        </div>
                      </div>

                      {/* <div className="form-field">

                          <label><input type="checkbox" value="" className="checkbox not-require"
                            onClick={(e) => { if (internationalFlights) { setInternationalFlights(false) } else { setInternationalFlights(true) } }} /> International Flights?</label>


                        </div> */}
                      <div className="form-field">
                        <label>NIC Number (For Domestic Flights)</label>
                        <input
                          type="text"
                          placeholder="NIC Number"
                          className="not-require"
                          id="nic_number"
                          onChange={onChange}
                        />
                      </div>

                      {internationalFlights === true ? (
                        <>
                          <div className="form-field">
                            <label>
                              Passport Number (For International Flights)
                            </label>
                            <input
                              type="text"
                              placeholder="Passport Number"
                              className="not-require"
                              id="passport_number"
                              onChange={onChange}
                            />
                          </div>
                          <div className="form-field">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-12 dual-width">
                                <label>Passport Expiry Date *</label>
                                <input
                                  type="date"
                                  placeholder="date"
                                  id="passportexpirydate"
                                  onChange={onChange}
                                  required
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 col-12 dual-width">
                                <label>Passport Nationality *</label>
                                <select
                                  name="countries"
                                  id="passportnationality"
                                  onChange={onChange}
                                  required
                                >
                                  <option value="" disabled selected>
                                    Country/Region
                                  </option>
                                  {countries
                                    ? countries.length !== 0
                                      ? countries.map((country) => {
                                          return (
                                            <option value={country.iso2}>
                                              {country.name}
                                            </option>
                                          );
                                        })
                                      : ""
                                    : ""}
                                  {/* <option value="india">India</option>
                          <option value="BD">Bangladesh</option>
                        <option value="sri-lanka">Sri Lanka</option>*/}
                                </select>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>

                    <div style={{ overflow: "auto" }}>
                      <div style={{ float: "right" }}>
                        {/*<button type="button" id="prevBtn" onClick="nextPrev(-1)" className="button-green" style={{"marginRight": "20px"}}>Previous</button>*/}
                        <button
                          type="button"
                          onClick={(e) => {
                            next(e);
                          }}
                          className="button-green"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                      {allProfiles.length !== 0
                        ? totalnum.map((profile, index) => {
                            return index < numberOfForms ? (
                              <>
                                <button
                                  className="button-green"
                                  style={{ marginTop: "2%" }}
                                  onClick={(e) => {
                                    PreviousForm(e, index);
                                  }}
                                >
                                  Form #: {index + 1}
                                </button>
                                <br />
                              </>
                            ) : (
                              ""
                            );
                          })
                        : ""}
                    </div>
                  </form>
                </div>

                <div className="col-lg-4 col-12 col-md-4 checkout-right">
                  <div className="green-overlay"></div>

                  <div style={{ position: "sticky", top: "10px" }}>
                    <div className="reserve">
                      <h2>Reservation Summary</h2>
                    </div>
                    {segments
                      ? segments.length !== 0
                        ? segments.map((detail, index) => {
                            return (
                              <>
                                <div className="flights">
                                  <i className="fa-solid fa-plane"></i>
                                  <h3>Flight {index + 1}</h3>
                                </div>

                                <div className="time-detail">
                                  <p>Departing</p>

                                  <div className="airport-time">
                                    <p>{detail.Origin.Airport.AirportName}</p>
                                    <p>
                                      {splitDate(detail.Origin.DepTime)}
                                      &nbsp;--&nbsp;
                                      {splitTime(detail.Origin.DepTime)}
                                    </p>
                                  </div>
                                </div>
                                <div className="time-detail">
                                  <p>Arrival</p>

                                  <div className="airport-time">
                                    <p>
                                      {detail.Destination.Airport.AirportName}
                                    </p>
                                    <p>
                                      {splitDate(detail.Destination.ArrTime)}
                                      &nbsp;--&nbsp;
                                      {splitTime(detail.Destination.ArrTime)}
                                    </p>
                                  </div>
                                </div>
                                <div className="time-detail">
                                  <div className="flight-info">
                                    <p>
                                      Flight # {detail.Airline.FlightNumber}
                                    </p>
                                    <p>Cabin: {detail.Airline.CabinClass}</p>
                                  </div>

                                  <div className="fare-basis">
                                    <p>
                                      Airline Name {detail.Airline.AirlineName}
                                    </p>
                                  </div>

                                  {index == segments.length - 1 ? (
                                    <div className="total-price">
                                      <p>Total</p>
                                      <p>
                                        {showProfile.user_role === "manager"
                                          ? calculateFivePercent(
                                              flightDetails.TotalFare
                                            )
                                          : flightDetails.TotalFare}{" "}
                                        BDT
                                      </p>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </>
                            );
                          })
                        : "No details Available"
                      : "No details Available"}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="container-fluid">
            <div className="row checkout">
              <div className="col-lg-8 col-12 col-md-8 checkout-left">
                <div className="sign-Title">
                  <h2>Are you sure you want to book flight ?</h2>
                  <span>All transactions are secure and encrypted</span>
                </div>

                {/* <div className="payment">

   <div className="payment-footer">

   <img src="images/paypal-cropped.png" />
   <a href="#" target="_blank"> <h6>Pay With PayPal</h6></a>

  </div>

      </div>*/}
                <div className="form-field">
                  <label>
                    <input
                      type="checkbox"
                      value={setchecktermscondition}
                      className="checkbox not-require"
                      onClick={(e) => {
                        if (checktermscondition) {
                          setchecktermscondition(false);
                        } else {
                          setchecktermscondition(true);
                        }
                      }}
                    />
                    {"  "}
                    Read and Agree to the{" "}
                    <Link to="/termscondition" target="_blank">
                      Terms & Conditions
                    </Link>
                    ,{" "}
                    <Link to="/privacypolicy" target="_blank">
                      Privacy Policy
                    </Link>
                    , and{" "}
                    <Link to="/returnpolicy" target="_blank">
                      Return Refund Policy
                    </Link>
                  </label>
                </div>
                <div className="accordion payment" id="accordionExample">
                  <div className="accordion-item" style={{ border: "none" }}>
                    {showProfile.user_role !== "manager" ? (
                      <>
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingOne"
                        >
                          <div
                            className="payment-head"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            <span className="circle"></span>

                            <h5> Credit Card Or Debit Card</h5>

                            <div>
                              <img src="images/visa.png" />
                              <img src="images/unionpay.png" />
                              <img src="images/maestro.png" />
                            </div>
                          </div>
                        </h2>

                        <div
                          id="panelsStayOpen-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="payment-body">
                              <div className="form-field">
                                <label>
                                  For Booking Flight Click Pay button *
                                </label>
                                {/*<input type="text" placeholder="Card Number"  />*/}
                              </div>

                              {/*<div className="form-field">
            
            <label>Name On Card *</label>
            <input type="text" placeholder="Name on card"  />
      

    </div>

          <div className="form-field">

            <div className="row">

              <div className="col-lg-6 col-md-6 col-12 dual-width">
                <label>Expiration Date (MM/YY) *</label>
                <input type="month" placeholder="First name"  />
              </div>

              <div className="col-lg-6 col-md-6 col-12 dual-width">
                <label>Security Code *</label>
                <input type="text" placeholder="Security Code"  />
              </div>

            </div>

          </div>*/}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>

                  {showProfile.user_role == "manager" ? (
                    <>
                      <div
                        className="accordion-item"
                        style={{ border: "none" }}
                      >
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingTwo"
                        >
                          <div
                            className="payment-head collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                          >
                            <span className="circle"></span>
                            <h5>Bank Deposit </h5>
                          </div>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="mb-3">
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account. Please send the
                              payment screenshot to WhatsApp 01712909113
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
                              <strong>Company Contact Number:</strong>
                              01712909113
                            </p>
                            <p>
                              <strong>Address:</strong> Kaniz Plaza, Zindabazar,
                              Kotwali, Sylhet 3100
                            </p>

                            <p className="mt-3">Shop with peace of mind :)</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div style={{ overflow: "auto" }}>
                  <div style={{ float: "right" }}>
                    <button
                      type="button"
                      onClick={(e) => {
                        PreviousForm(e, 0);
                      }}
                      className="button-green"
                      style={{ marginRight: "20px" }}
                    >
                      Previous
                    </button>
                    {flightDetails ? (
                      flightDetails.FareType == "NET" ? (
                        <>
                          <button
                            type="button"
                            className="button-green"
                            onClick={async (e) => {
                              debugger;
                              setOnHoldButton(true);
                              console.log(onHoldButton);
                              createPreAirBook(e, true);
                            }}
                            style={{ marginRight: "20px" }}
                          >
                            On Hold
                          </button>
                          <button
                            type="button"
                            className="button-green"
                            onClick={(e) => {
                              setOnHoldButton(false);
                              createPreAirBook(e, false);
                            }}
                          >
                            Ticketed
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          className="button-green"
                          onClick={(e) => {
                            createPreAirBook(e, false);
                            setOnHoldButton(false);
                          }}
                        >
                          Pay
                        </button>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 col-md-4 checkout-right">
                <div className="green-overlay"></div>

                <div style={{ position: "sticky", top: "10px" }}>
                  <div className="reserve">
                    <h2>Reservation Summary</h2>
                  </div>

                  {segments
                    ? segments.length !== 0
                      ? segments.map((detail, index) => {
                          return (
                            <>
                              <div className="flights">
                                <i className="fa-solid fa-plane"></i>
                                <h3>Flight {index + 1}</h3>
                              </div>

                              <div className="time-detail">
                                <p>Departing</p>

                                <div className="airport-time">
                                  <p>{detail.Origin.Airport.AirportName}</p>
                                  <p>
                                    {splitDate(detail.Origin.DepTime)}
                                    &nbsp;--&nbsp;
                                    {splitTime(detail.Origin.DepTime)}
                                  </p>
                                </div>
                              </div>
                              <div className="time-detail">
                                <p>Arrival</p>

                                <div className="airport-time">
                                  <p>
                                    {detail.Destination.Airport.AirportName}
                                  </p>
                                  <p>
                                    {splitDate(detail.Destination.ArrTime)}
                                    &nbsp;--&nbsp;
                                    {splitTime(detail.Destination.ArrTime)}
                                  </p>
                                </div>
                              </div>
                              <div className="time-detail">
                                <div className="flight-info">
                                  <p>Flight # {detail.Airline.FlightNumber}</p>
                                  <p>Cabin: {detail.Airline.CabinClass}</p>
                                </div>
                                <div className="fare-basis">
                                  <p>
                                    Airline Name {detail.Airline.AirlineName}
                                  </p>
                                </div>

                                {index === segments.length - 1 ? (
                                  <>
                                    <div className="total-price">
                                      <p>Gross Amount</p>
                                      <p>
                                        {flightDetails.TotalFare}{" "}
                                        {flightDetails.Currency}
                                      </p>
                                    </div>
                                    <div className="total-price">
                                      <p>Invoice Amount</p>
                                      <p>
                                        {showProfile
                                          ? showProfile.user_role === "manager"
                                            ? calculateFivePercent(
                                                flightDetails.TotalFare
                                              )
                                            : flightDetails.TotalFare
                                          : flightDetails.TotalFare}{" "}
                                        {flightDetails.Currency}
                                      </p>
                                    </div>
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>
                            </>
                          );
                        })
                      : "No details Available"
                    : "No details Available"}
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <section>
          {loading ? <div className="loading"></div> : ""}

          <div className="container-fluid">
            <div className="row checkout">
              <div className="col-lg-8 col-12 col-md-8 checkout-left">
                <form id="regForm" action="" style={{ marginBottom: "50%" }}>
                  <div>
                    <div className="form-field">
                      <div className="form-field-flex">
                        <label hidden>Contact Information *</label>
                        <span>
                          <Link to="/sign-in"> Login</Link> First to create
                          Booking
                        </span>
                      </div>

                      {/*<input placeholder="mail@example.com" id="useremail" onChange={onChange} required/>*/}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CheckoutComp;
