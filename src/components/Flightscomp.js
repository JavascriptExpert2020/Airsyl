import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { parse, stringify, toJSON, fromJSON } from "flatted";
toast.configure();

function Flightscomp() {
  const params = useParams();
  const flyingObj = JSON.parse(params.flyingobj);
  const [flights, setFlights] = useState([]);
  const [showdropdown, setdropdown] = useState(false);
  const [showdropdown1, setdropdown1] = useState(false);
  const [showdropdown2, setdropdown2] = useState(false);
  const [user, setUsers] = useState(
    JSON.parse(localStorage.getItem("blogUser"))
  );
  const [loading, setloading] = useState(false);
  const [multiCity, setMultiCity] = useState(flyingObj.multiCity);
  const [numberofadult, setnumberofAdult] = useState(flyingObj.numberofadult);
  const [flyingFrom, setflyingFrom] = useState(flyingObj.flyingFrom);
  const [flyingTo, setflyingTo] = useState(flyingObj.flyingto);
  const [numberofkids, setnumberofkids] = useState(flyingObj.numberofkids);
  const [numberofinfants, setnumberofinfants] = useState(
    flyingObj.numberofinfants
  );
  const [cabinclass, setcabinclass] = useState(flyingObj.cabinclass);
  const [journeyType, setJourneyType] = useState(flyingObj.journeyType);
  const [departuredate, setdeparturedate] = useState(flyingObj.departuredate);
  const [returndate, setReturnDate] = useState(flyingObj.returndate);
  const [initialAirPorts, setInitialAirPorts] = useState([]);
  const [airLine, setAirLine] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [ip, setIP] = useState("");
  const [settype, setType] = useState("text");
  const [settype1, setType1] = useState("text");
  const [amountType, setAmountType] = useState("gross");
  const [today, setToday] = useState("");

  const history = useHistory();
  function tocomponentB(resultId, e) {
    e.preventDefault();
    let flightobj = {};
    if (numberofkids !== 0 || numberofadult !== 0) {
      flightobj = {
        numberofkids: numberofkids,
        numberofadult: numberofadult,
        numberofinfants: numberofinfants,
        searchId: searchId,
        resultId: resultId,
      };
    } else {
      flightobj = {
        numberofkids: flyingObj.numberofkids,
        numberofadult: flyingObj.numberofadult,
        numberofinfants: flyingObj.numberofinfants,
        searchId: searchId,
        resultId: resultId,
      };
    }
    history.replace(`/checkout/${JSON.stringify(flightobj)}`);
  }
  function toSameComponent(e) {
    e.preventDefault();
    if (journeyType == "1") {
      if (
        flyingTo !== "" &&
        flyingFrom !== "" &&
        (numberofadult !== 0 || numberofinfants !== 0 || numberofkids !== 0) &&
        cabinclass !== "" &&
        journeyType !== "" &&
        departuredate !== ""
      ) {
        let flightobj = {
          flyingto: flyingTo,
          flyingFrom: flyingFrom,
          numberofkids: numberofkids,
          numberofadult: numberofadult,
          cabinclass: cabinclass,
          departuredate: departuredate,
          returndate: returndate,
          journeyType: journeyType,
          numberofinfants: numberofinfants,
          multiCity: multiCity,
        };
        history.replace(`/flights/${JSON.stringify(flightobj)}`);
        window.location.reload();
      } else {
        toast.error("All feilds are required.");
      }
    }
    debugger;
    if (journeyType == "2") {
      if (
        flyingTo !== "" &&
        flyingFrom !== "" &&
        (numberofadult !== 0 || numberofinfants !== 0 || numberofkids !== 0) &&
        cabinclass !== "" &&
        journeyType !== "" &&
        departuredate !== "" &&
        returndate !== ""
      ) {
        let flightobj = {
          flyingto: flyingTo,
          flyingFrom: flyingFrom,
          numberofkids: numberofkids,
          numberofadult: numberofadult,
          cabinclass: cabinclass,
          departuredate: departuredate,
          returndate: returndate,
          journeyType: journeyType,
          numberofinfants: numberofinfants,
          multiCity: multiCity,
        };
        history.replace(`/flights/${JSON.stringify(flightobj)}`);
        window.location.reload();
      } else {
        toast.error("All feilds are required.");
      }
    }
    if (journeyType == "3") {
      debugger;
      for (var i = 0; i < multiCity.length; i++) {
        debugger;
        if (
          multiCity[i].flyingTo !== "" &&
          multiCity[i].flyingFrom !== "" &&
          (numberofadult !== 0 ||
            numberofinfants !== 0 ||
            numberofkids !== 0) &&
          multiCity[i].cabinclass !== "" &&
          multiCity[i].departuredate !== ""
        ) {
          let flightobj = {
            flyingto: flyingTo,
            flyingFrom: flyingFrom,
            numberofkids: numberofkids,
            numberofadult: numberofadult,
            cabinclass: cabinclass,
            departuredate: departuredate,
            returndate: returndate,
            journeyType: journeyType,
            numberofinfants: numberofinfants,
            multiCity: multiCity,
          };
          history.replace(`/flights/${JSON.stringify(flightobj)}`);
          window.location.reload();
        } else {
          toast.error("All feilds are required.");
          break;
        }
      }
    }
    if (journeyType == "") {
      toast.error("All feilds are required.");
    }
  }
  function onChangeReturnDate(e) {
    setReturnDate(e.target.value);
  }
  function setdropdowns(e) {
    e.preventDefault();
    if (showdropdown) {
      setdropdown(false);
    } else {
      setdropdown(true);
    }
  }
  function setdropdowns1(e) {
    e.preventDefault();
    if (showdropdown1) {
      setdropdown1(false);
    } else {
      setdropdown1(true);
    }
  }
  function setdropdowns2(e) {
    e.preventDefault();
    if (showdropdown2) {
      setdropdown2(false);
    } else {
      setdropdown2(true);
    }
  }

  function onChangeFlyingFrom(e) {
    setflyingFrom(e.target.value);
  }
  function onChangeFlyingTo(e) {
    setflyingTo(e.target.value);
  }
  function increaseNumberofAdult() {
    setnumberofAdult(numberofadult + 1);
  }
  function decreaseNumberofAdult() {
    if (numberofadult > 0) {
      setnumberofAdult(numberofadult - 1);
    } else {
      setnumberofAdult(0);
    }
  }
  function onChangeadult(e) {
    if (e.target.value < 0) {
      setnumberofAdult(0);
    } else {
      setnumberofAdult(e.target.value);
    }
  }
  function onChangekids(e) {
    if (e.target.value < 0) {
      setnumberofkids(0);
    } else {
      setnumberofkids(e.target.value);
    }
  }
  function increaseNumberofKids() {
    setnumberofkids(numberofkids + 1);
  }
  function decreaseNumberofkids() {
    if (numberofkids > 0) {
      setnumberofkids(numberofkids - 1);
    } else {
      setnumberofkids(0);
    }
  }
  function increaseNumberofInfants() {
    setnumberofinfants(numberofinfants + 1);
  }
  function decreaseNumberofInfants() {
    if (numberofinfants > 0) {
      setnumberofinfants(numberofinfants - 1);
    } else {
      setnumberofinfants(0);
    }
  }
  function onChangeInfants(e) {
    if (e.target.value < 0) {
      setnumberofinfants(0);
    } else {
      setnumberofinfants(e.target.value);
    }
  }
  function calculateFivePercent(price) {
    let discount = price * 0.05;
    return price - discount;
  }
  function splitDate(x) {
    let y = x.split("T");
    return y[0];
  }
  function splitTime(x) {
    let y = x.split("T");
    return y[1];
  }
  function onChangeCabinClass(e) {
    setcabinclass(e.target.value);
  }
  function onChangeJourneyType(e) {
    setJourneyType(e.target.value);
  }
  function onChangeAmountType(e) {
    setAmountType(e.target.value);
  }
  function onChangeDepartureDate(e) {
    setdeparturedate(e.target.value);
  }
  function getFlights() {
    var ip,
      x,
      p,
      y = [],
      arr = [];
    Axios.get("https://geolocation-db.com/json/").then((res) => {
      setIP(res.data.IPv4);
      ip = res.data.IPv4;
      Axios.post(
        `${process.env.React_App_Api_Url}/api/flight/get_searched_flight`,
        {
          adultquantity: numberofadult,
          childquantity: numberofkids,
          infantquantity: numberofinfants,
          ip: ip,
          journeytype: journeyType,
          origin: flyingFrom,
          destination: flyingTo,
          cabinclass: cabinclass,
          datetime: departuredate,
          returntime: returndate,
          multicity: multiCity,
          airline: airLine,
        }
      )
        .then((flights) => {
          x = parse(flights.data.flightdetails);
          debugger;
          setSearchId(x.data.SearchId);
          setFlights(x.data.Results);
          console.log(x.data.Results);
          setloading(false);
          if (airLine.length == 0) {
            for (var i = 0; i < x.data.Results.length; i++) {
              y.push(x.data.Results[i].segments[0].Airline.AirlineCode);
              if (i == x.data.Results.length - 1) {
                let unique = [...new Set(y)];
                for (var z = 0; z < unique.length; z++) {
                  p = { AirlineCode: unique[z], value: true };
                  arr.push(p);
                }
              }
            }
            setAirLine(getMatch(arr, x.data.Results));
          }
        })
        .catch((error) => {
          console.log(error);
          setloading(false);
        });
    });
  }
  function getMatch(a, b) {
    var matches = [];

    for (var i = 0; i < a.length; i++) {
      for (var e = 0; e < b.length; e++) {
        if (a[i].AirlineCode === b[e].segments[0].Airline.AirlineCode) {
          matches.push({
            AirlineName: b[e].segments[0].Airline.AirlineName,
            AirlineCode: a[i].AirlineCode,
            value: true,
          });
          break;
        }
      }
    }
    return matches;
  }
  function getAuthenticate() {
    Axios.post(
      `${process.env.React_App_Api_Url}/api/flight/get_authenticate_api`
    )
      .then((blogs) => {
        console.log("All blogs", blogs);
        getFlights();
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function sortAirports(airport) {
    if (airport)
      setInitialAirPorts(airport.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }
  function onChangeDepartureDateMultiCity(e, i) {
    var arr = [...multiCity];
    arr[i].departuredate = e.target.value;
    setMultiCity(arr);
  }
  function onChangeCabinClassMultiCity(e, i) {
    var arr = [...multiCity];
    arr[i].cabinclass = e.target.value;
    setMultiCity(arr);
  }
  function onChangeFlyingFromMultiCity(e, i) {
    var arr = [...multiCity];
    arr[i].flyingFrom = e.target.value;
    setMultiCity(arr);
  }
  function onChangeFlyingToMulticity(e, i) {
    var arr = [...multiCity];
    arr[i].flyingTo = e.target.value;
    setMultiCity(arr);
  }
  function pushMultiCity(e, submitss) {
    e.preventDefault();
    var arr = [];
    debugger;
    if (submitss == "b") {
      toSameComponent(e);
    } else {
      var x = {
        flyingFrom: "",
        flyingTo: "",
        departuredate: "",
        cabinclass: "",
      };
      arr.push(x);
      const newarray = [...multiCity, ...arr];
      setMultiCity(newarray);
    }
  }
  function pushFirstMultiCity() {
    var arr = [];
    var x = { flyingFrom: "", flyingTo: "", departuredate: "", cabinclass: "" };
    arr.push(x);
    const newarray = [...multiCity, ...arr];
    setMultiCity(newarray);
  }
  function removeEntry(index) {
    var array = [...multiCity]; // make a separate copy of the array
    // var index = array.indexOf(index)
    if (index !== 0) {
      array.splice(index, 1);
      setMultiCity(array);
    }
  }
  function convertMinutesToHour(minutes) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return h + "h" + " " + m + "m";
  }
  function setAirlineValues(index) {
    setloading(true);
    var a = [...airLine];
    a[index].value = !a[index].value;
    setAirLine(a);
    getFlights();
  }
  function myFunction(e) {
    if (e.code === "Escape") {
      setdropdown1(false);
      setdropdown2(false);
      setdropdown(false);
    }
  }
  useEffect(async () => {
    window.scrollTo(0, 0);
    setloading(true);
    setnumberofAdult(flyingObj.numberofadult);
    setnumberofkids(flyingObj.numberofkids);
    getFlights();
    const airports = await require("../airports.json");
    sortAirports(airports);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    setToday(today);
    document.getElementById("datePickerId").setAttribute("min", today);
  }, []);
  return (
    <>
      {loading ? <div className="loading"></div> : ""}
      <section>
        <div className="search-flights">
          <div className="container flights-background">
            <form className="flights-form" id="flights-form">
              <h5>Search hundreds of flight at once.</h5>

              <div className="row" style={{ marginBottom: "1%" }}>
                {journeyType != 3 ? (
                  <div className="col-lg-2 col-12 no-padding ">
                    <select
                      value={cabinclass}
                      name="PaxType"
                      id="PaxType"
                      onChange={onChangeCabinClass}
                      className="select"
                    >
                      <option value="" disabled selected>
                        Cabin *
                      </option>
                      <option value="1">Economy</option>
                      <option value="2">Premium Economy</option>
                      <option value="3">Business</option>
                      <option value="4">First</option>
                    </select>
                  </div>
                ) : (
                  ""
                )}

                <div
                  className="col-lg-2 col-12 no-padding "
                  style={{ marginLeft: "-1%" }}
                >
                  <select
                    value={journeyType}
                    name="PaxType"
                    id="PaxType"
                    onChange={(e) => {
                      onChangeJourneyType(e);
                    }}
                    className="select"
                  >
                    <option value="" disabled selected>
                      Journey Type *
                    </option>
                    <option value="1">One-way</option>
                    <option value="2">Round-Trip</option>
                    <option value="3">Multi-city</option>
                  </select>
                </div>

                {user ? (
                  user.user_role == "manager" ? (
                    <div
                      className="col-lg-2 col-12 no-padding "
                      style={{ marginLeft: "-1%" }}
                    >
                      <select
                        value={amountType}
                        onChange={(e) => {
                          onChangeAmountType(e);
                        }}
                        className="select"
                      >
                        <option value="" disabled selected>
                          Amount Type
                        </option>
                        <option value="gross">Gross Amount</option>
                        <option value="invoice">Invoice Amount</option>
                      </select>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}

                <div
                  className="col-lg-2 col-12 no-padding room-select"
                  //   onBlur={() => {
                  //     setdropdown(false);
                  //   }}
                >
                  {numberofadult > 0 ? (
                    <span id="adults">&nbsp;&nbsp; {numberofadult} ADULTS</span>
                  ) : (
                    <span className="set-text" id="adults">
                      {numberofadult} ADULTS
                    </span>
                  )}
                  {showdropdown ? (
                    <i
                      className="fa-solid fa-caret-up"
                      onClick={(e) => setdropdowns(e)}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-caret-down"
                      onClick={(e) => setdropdowns(e)}
                    ></i>
                  )}
                  {/* {showdropdown ? ( */}
                  <div className="dropdown-content">
                    <div className="value-increment">
                      <h5>Adults </h5>
                      <p>(Over 12 Years)</p>

                      <div
                        className="value-button decrease"
                        id="decrease"
                        value="Decrease Value"
                        onClick={() => decreaseNumberofAdult()}
                      >
                        -
                      </div>
                      <input
                        type="number"
                        id="adult-number"
                        value={numberofadult}
                        className="number"
                        onChange={onChangeadult}
                        style={{ textAlign: "center" }}
                        onKeyUp={(e) => {
                          myFunction(e);
                        }}
                        autoFocus
                      />
                      <div
                        className="value-button decrease"
                        id="increase"
                        value="Increase Value"
                        onClick={() => increaseNumberofAdult()}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  {/* ) : (
                    ""
                  )} */}
                </div>
                <div
                  className="col-lg-2 col-12 no-padding room-select"
                  style={{ marginLeft: "1%" }}
                  onBlur={() => {
                    setdropdown1(false);
                  }}
                >
                  {numberofkids > 0 ? (
                    <span id="adults">&nbsp;&nbsp; {numberofkids} Kids</span>
                  ) : (
                    <span className="set-text" id="adults">
                      {numberofkids} Kids
                    </span>
                  )}
                  {showdropdown1 ? (
                    <i
                      className="fa-solid fa-caret-up"
                      onClick={(e) => setdropdowns1(e)}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-caret-down"
                      onClick={(e) => setdropdowns1(e)}
                    ></i>
                  )}
                  {/* {showdropdown1 ? ( */}
                  <div className="dropdown-content">
                    <div className="value-increment">
                      <h5>Kids </h5>
                      <p>(2 - 12 Years)</p>

                      <div
                        className="value-button decrease"
                        id="decrease"
                        value="Decrease Value"
                        onClick={() => decreaseNumberofkids()}
                      >
                        -
                      </div>
                      <input
                        type="number"
                        id="kids-number"
                        value={numberofkids}
                        className="number"
                        onChange={onChangekids}
                        style={{ textAlign: "center" }}
                        onKeyUp={(e) => {
                          myFunction(e);
                        }}
                        autoFocus
                      />
                      <div
                        className="value-button decrease"
                        id="increase"
                        value="Increase Value"
                        onClick={() => increaseNumberofKids()}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  {/* ) : (
                    ""
                  )} */}
                </div>
                <div
                  className="col-lg-2 col-12 no-padding room-select"
                  style={{ marginLeft: "1%" }}
                  onBlur={() => {
                    setdropdown2(false);
                  }}
                >
                  {numberofinfants > 0 ? (
                    <span id="kids">
                      &nbsp;&nbsp; {numberofinfants} INFANTS
                    </span>
                  ) : (
                    <span className="set-text" id="kids">
                      {numberofinfants} INFANTS
                    </span>
                  )}
                  {showdropdown2 ? (
                    <i
                      className="fa-solid fa-caret-up"
                      onClick={(e) => setdropdowns2(e)}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-caret-down"
                      onClick={(e) => setdropdowns2(e)}
                    ></i>
                  )}
                  {/* {showdropdown2 ? ( */}
                  <div className="dropdown-content">
                    <div className="value-increment">
                      <h5>Infants </h5>
                      <p>(Under 2 Years)</p>

                      <div
                        className="value-button decrease"
                        id="decrease"
                        value="Decrease Value"
                        onClick={() => decreaseNumberofInfants()}
                      >
                        -
                      </div>
                      <input
                        type="number"
                        id="kids-number"
                        value={numberofinfants}
                        className="number"
                        onChange={onChangeInfants}
                        style={{ textAlign: "center" }}
                        onKeyUp={(e) => {
                          myFunction(e);
                        }}
                        autoFocus
                      />
                      <div
                        className="value-button decrease"
                        id="increase"
                        value="Increase Value"
                        onClick={() => increaseNumberofInfants()}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  {/* ) : (
                    ""
                  )} */}
                </div>
              </div>
              {journeyType == 2 || journeyType == 1 ? (
                <div className="row">
                  <div className="col-lg-3 col-12 no-padding">
                    <input
                      type="text"
                      list="listid1"
                      placeholder="Flying From *"
                      onChange={onChangeFlyingFrom}
                      value={flyingFrom}
                    />
                    <datalist id="listid1" onChange={onChangeFlyingTo}>
                      {initialAirPorts
                        ? initialAirPorts.length !== 0
                          ? initialAirPorts.map((airport) => {
                              return (
                                <option value={airport.iata_code}>
                                  {airport.municipality}
                                </option>
                              );
                            })
                          : ""
                        : ""}
                    </datalist>
                  </div>

                  <div className="col-lg-3 col-12 no-padding">
                    <input
                      type="text"
                      list="listid"
                      placeholder="Flying To*"
                      onChange={onChangeFlyingTo}
                      value={flyingTo}
                    />
                    <datalist id="listid" onChange={onChangeFlyingTo}>
                      {initialAirPorts
                        ? initialAirPorts.length !== 0
                          ? initialAirPorts.map((airport) => {
                              return (
                                <option value={airport.iata_code}>
                                  {airport.municipality}
                                </option>
                              );
                            })
                          : ""
                        : ""}
                    </datalist>
                  </div>

                  {journeyType == 1 ? (
                    <div className="col-lg-2 col-12 no-padding ">
                      <input
                        type={settype}
                        onFocus={() => {
                          document
                            .getElementById("datePickerId")
                            .setAttribute("min", today);

                          setType("date");
                        }}
                        onBlur={() => {
                          setType("text");
                        }}
                        placeholder="Departure Date"
                        onChange={(e) => {
                          onChangeDepartureDate(e);
                        }}
                        defaultValue={departuredate}
                        id="datePickerId"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {journeyType == 2 ? (
                    <>
                      <div className="col-lg-2 col-12 no-padding ">
                        <input
                          type={settype}
                          onFocus={() => {
                            document
                              .getElementById("datePickerId")
                              .setAttribute("min", today);
                            setType("date");
                          }}
                          onBlur={() => {
                            setType("text");
                          }}
                          placeholder="Departure Date"
                          onChange={(e) => {
                            onChangeDepartureDate(e);
                          }}
                          defaultValue={departuredate}
                          id="datePickerId"
                        />
                      </div>
                      <div className="col-lg-2 col-12 no-padding ">
                        <input
                          type={settype1}
                          onFocus={() => {
                            document
                              .getElementById("datePickerId1")
                              .setAttribute("min", today);
                            setType1("date");
                          }}
                          onBlur={() => {
                            setType("text");
                          }}
                          placeholder="Return Date"
                          onChange={(e) => {
                            onChangeReturnDate(e);
                          }}
                          defaultValue={returndate}
                          id="datePickerId1"
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="col-lg-2 col-12 no-padding search-icon">
                    <input
                      type="submit"
                      value="SEARCH"
                      onClick={(e) => {
                        toSameComponent(e);
                      }}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              ) : (
                ""
              )}
              {journeyType == 3 ? (
                <>
                  {multiCity.length != 0
                    ? multiCity.map((arr, index) => {
                        return (
                          <>
                            {index >= 0 ? (
                              <div
                                className="row"
                                style={{ marginBottom: "1%" }}
                              >
                                <div className="col-lg-3 col-12 no-padding">
                                  <input
                                    type="text"
                                    list="listid1"
                                    placeholder="Flying From *"
                                    onChange={(e) => {
                                      onChangeFlyingFromMultiCity(e, index);
                                    }}
                                    value={arr.flyingFrom}
                                  />
                                  <datalist
                                    id="listid1"
                                    onChange={(e) => {
                                      onChangeFlyingFromMultiCity(e, index);
                                    }}
                                  >
                                    {initialAirPorts
                                      ? initialAirPorts.length !== 0
                                        ? initialAirPorts.map((airport) => {
                                            return (
                                              <option value={airport.iata_code}>
                                                {airport.municipality}
                                              </option>
                                            );
                                          })
                                        : ""
                                      : ""}
                                  </datalist>
                                </div>

                                <div className="col-lg-3 col-12 no-padding">
                                  <input
                                    type="text"
                                    list="listid"
                                    placeholder="Flying To*"
                                    onChange={(e) => {
                                      onChangeFlyingToMulticity(e, index);
                                    }}
                                    value={arr.flyingTo}
                                  />
                                  <datalist
                                    id="listid"
                                    onChange={(e) => {
                                      onChangeFlyingToMulticity(e, index);
                                    }}
                                  >
                                    {initialAirPorts
                                      ? initialAirPorts.length !== 0
                                        ? initialAirPorts.map((airport) => {
                                            return (
                                              <option value={airport.iata_code}>
                                                {airport.municipality}
                                              </option>
                                            );
                                          })
                                        : ""
                                      : ""}
                                  </datalist>
                                </div>

                                <div className="col-lg-2 col-12 no-padding ">
                                  <input
                                    type={settype}
                                    onFocus={() => {
                                      setType("date");
                                    }}
                                    onBlur={() => {
                                      setType("text");
                                    }}
                                    placeholder="Departure Date"
                                    onChange={(e) => {
                                      onChangeDepartureDateMultiCity(e, index);
                                    }}
                                    value={arr.departuredate}
                                  />
                                </div>

                                <div className="col-lg-2 col-12 no-padding ">
                                  <select
                                    value={arr.cabinclass}
                                    name="PaxType"
                                    id="PaxType"
                                    onChange={(e) => {
                                      onChangeCabinClassMultiCity(e, index);
                                    }}
                                    className="select"
                                  >
                                    <option value="" disabled selected>
                                      Cabin *
                                    </option>
                                    <option value="1">Economy</option>
                                    <option value="2">Premium Economy</option>
                                    <option value="3">Business</option>
                                    <option value="4">First</option>
                                  </select>
                                </div>
                                <div className="col-lg-2 col-12 no-padding ">
                                  <i
                                    className="fa-solid fa-x"
                                    onClick={() => {
                                      removeEntry(index);
                                    }}
                                  ></i>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        );
                      })
                    : ""}
                </>
              ) : (
                ""
              )}

              {journeyType == 3 ? (
                multiCity.length < 10 ? (
                  <div className="row">
                    <div className="col-lg-4 col-12 no-padding search-icon">
                      <input
                        type="submit"
                        value="SEARCH"
                        onClick={(e) => {
                          pushMultiCity(e, "b");
                        }}
                      />
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="col-4 no-padding search-icon">
                      <input
                        type="button"
                        value="Add Another Flight"
                        onClick={(e) => {
                          pushMultiCity(e, "a");
                        }}
                      />
                      <i className="fa-solid fa-add"></i>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-lg-4 col-12 no-padding search-icon">
                      <input
                        type="submit"
                        value="SEARCH"
                        onClick={(e) => {
                          pushMultiCity(e, "b");
                        }}
                      />
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                )
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Online Booking</h2>
            <img src="images/underlin.png" className="underline" />
          </div>
          <div className="row">
            <div className="col-lg-2 col-4">
              <h4>Airlines</h4>
              {airLine.length != 0
                ? airLine.map((airline, index) => {
                    return (
                      <>
                        <label>
                          <input
                            type="checkbox"
                            defaultChecked={airline.value}
                            onChange={() => setAirlineValues(index)}
                          />
                          &nbsp;&nbsp;&nbsp;
                          {airline.AirlineName}
                        </label>
                        <br />
                      </>
                    );
                  })
                : ""}
            </div>
            <div className="col-lg-10 col-8">
              {flights !== null ? (
                flights.length !== 0 &&
                flights.length !== undefined &&
                flights.length !== null ? (
                  flights.map((flight) => {
                    return flight.segments.map((segment, index) => {
                      return (
                        <div className="flights-listing">
                          <img src="images/icons8-airplane-flying-64.png" />
                          <h4>
                            {segment.Airline.AirlineName}
                            <br />
                            <span style={{ fontSize: "16px", opacity: "0.5" }}>
                              {segment.Airline.AirlineCode +
                                segment.Airline.FlightNumber}
                            </span>
                          </h4>
                          <br />
                          {/* <img src="images/eithad.png" />*/}

                          <div className="flights-destiny">
                            <h4>{segment.Origin.Airport.AirportCode}</h4>
                            <p style={{ opacity: "0.5", fontSize: "16px" }}>
                              &nbsp;&nbsp;&nbsp;
                              {splitTime(segment.Origin.DepTime)}
                              <br />
                              &nbsp;&nbsp;&nbsp;
                              {splitDate(segment.Origin.DepTime)}
                              <br />
                              &nbsp;&nbsp;&nbsp;
                              {splitDate(segment.Origin.Airport.CityName)}
                            </p>

                            {/*<i className="fas fa-plane"></i>*/}
                            <div className="flights-timing">
                              <p
                                className="flight-time"
                                style={{ fontSize: "12px" }}
                              >
                                {convertMinutesToHour(segment.JourneyDuration)}
                              </p>
                              <img
                                src="images/icons8-airplane-64.png"
                                style={{ marginTop: "-5%" }}
                              />
                              <p
                                className="flight-time"
                                style={{ fontSize: "12px" }}
                              >
                                {segment.StopQuantity == 0 ||
                                segment.StopQuantity == null
                                  ? "Non stop"
                                  : segment.StopQuantity + " stops"}
                              </p>
                            </div>

                            <h4>{segment.Destination.Airport.AirportCode}</h4>
                            <p style={{ opacity: "0.5", fontSize: "16px" }}>
                              &nbsp;&nbsp;&nbsp;
                              {splitTime(segment.Destination.ArrTime)}
                              <br />
                              &nbsp;&nbsp;&nbsp;
                              {splitDate(segment.Destination.ArrTime)}
                              <br />
                              &nbsp;&nbsp;&nbsp;
                              {splitDate(segment.Destination.Airport.CityName)}
                            </p>
                          </div>

                          {index === flight.segments.length - 1 ? (
                            <div className="book-flight">
                              {amountType == "gross" ? (
                                <>
                                  <p>Gross Amount</p>
                                  {/* <h6>
                                    {flight.Currency} {flight.TotalFare}
                                  </h6> */}
                                  <h6>
                                    {flight.Currency}{" "}
                                    {user
                                      ? user.user_role === "manager"
                                        ? (flight.TotalFare / 0.94) * 0.94
                                        : Math.floor(flight.TotalFare / 0.94)
                                      : flight.TotalFare}
                                  </h6>

                                  <h6>
                                    {flight.IsRefundable
                                      ? "Refundable"
                                      : "Non Refundable"}
                                  </h6>
                                </>
                              ) : (
                                <>
                                  <p>Invoice Amount</p>
                                  {/* <h6>
                                    {flight.Currency}{" "}
                                    {user
                                      ? user.user_role === "manager"
                                        ? calculateFivePercent(flight.TotalFare)
                                        : flight.TotalFare
                                      : flight.TotalFare}
                                  </h6> */}
                                  <h6>
                                    {flight.Currency}{" "}
                                    {user
                                      ? user.user_role === "manager"
                                        ? (flight.TotalFare / 0.94) * 0.94
                                        : Math.floor(flight.TotalFare / 0.94)
                                      : flight.TotalFare}
                                  </h6>

                                  <h6>
                                    {flight.IsRefundable
                                      ? "Refundable"
                                      : "Non Refundable"}
                                  </h6>
                                </>
                              )}

                              {/*<h6>{flight.Currency} {user ? user.user_role === 'manager' ? calculateFivePercent(flight.TotalFare) : flight.TotalFare : flight.TotalFare}</h6>*/}
                              <Link
                                onClick={(e) => {
                                  tocomponentB(flight.ResultID, e);
                                }}
                                className="button-green-small"
                              >
                                Book Now
                              </Link>
                            </div>
                          ) : flight.LastTicketDate !== null ? (
                            <div className="book-flight">
                              <p>Last Ticket Date</p>
                              <h6>{splitDate(flight.LastTicketDate)}</h6>
                              Linked
                            </div>
                          ) : (
                            <div className="book-flight">
                              <p>Last Ticket Date</p>
                              <h6>---</h6>
                              Linked
                            </div>
                          )}
                        </div>
                      );
                    });
                  })
                ) : (
                  <h4>No Flight Found</h4>
                )
              ) : (
                <h4>No Flight Found</h4>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Top Domestic Airline</h2>
            <img src="images/underlin.png" className="underline" />
          </div>

          <div className="row g-lg-5 mb-5">
            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/qatar.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/emirates.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/eithad.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/turkish.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/eithad.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/turkish.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/qatar.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/eithad.png" />
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="text-center mb-5">
            <h2>Top International Airline</h2>
            <img src="images/underlin.png" className="underline" />
          </div>

          <div className="row g-lg-5">
            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/qatar.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/emirates.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/eithad.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/turkish.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/eithad.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/turkish.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/qatar.png" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="top-airlines">
                <img src="images/eithad.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container guides">
          <h3>Fly Emirates</h3>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            hic iure rem ducimus, sunt, asperiores earum tempora natus
            voluptatibus nemo quo quidem blanditiis commodi sed doloremque neque
            cumque explicabo laboriosam? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sapiente, hic iure rem ducimus, sunt, asperiores
            earum tempora natus voluptatibus nemo quo quidem blanditiis commodi
            sed doloremque neque cumque explicabo laboriosam?
          </p>

          <div className="table-responsive">
            <table>
              <tr>
                <th>Emirates Ticket Price</th>
                <th>Days</th>
                <th>Prices Starts From</th>
              </tr>

              <tr>
                <td>Dhaka to Chittagong</td>
                <td>S M T W T F S</td>
                <td>TK 6,178*</td>
              </tr>

              <tr>
                <td>Dhaka to Chittagong</td>
                <td>S M T W T F S</td>
                <td>TK 6,178*</td>
              </tr>

              <tr>
                <td>Dhaka to Chittagong</td>
                <td>S M T W T F S</td>
                <td>TK 6,178*</td>
              </tr>

              <tr>
                <td>Dhaka to Chittagong</td>
                <td>S M T W T F S</td>
                <td>TK 6,178*</td>
              </tr>
            </table>
          </div>

          <h3>Fly Emirates Schedule</h3>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            hic iure rem ducimus, sunt, asperiores earum tempora natus
            voluptatibus nemo quo quidem blanditiis commodi sed doloremque neque
            cumque explicabo laboriosam? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sapiente, hic iure rem ducimus, sunt, asperiores
            earum tempora natus voluptatibus nemo quo quidem blanditiis commodi
            sed doloremque neque cumque explicabo laboriosam?
          </p>

          <div className="table-responsive">
            <table>
              <tr>
                <th>Route</th>
                <th>First Flight</th>
                <th>Last Flight</th>
                <th>Duration</th>
              </tr>

              <tr>
                <td>Dhaka to Chittagong</td>
                <td>7:00</td>
                <td>19:00</td>
                <td>2 Hours</td>
              </tr>

              <tr>
                <td>Dhaka to Chittagong</td>
                <td>7:00</td>
                <td>19:00</td>
                <td>2 Hours</td>
              </tr>

              <tr>
                <td>Dhaka to Chittagong</td>
                <td>7:00</td>
                <td>19:00</td>
                <td>2 Hours</td>
              </tr>

              <tr>
                <td>Dhaka to Chittagong</td>
                <td>7:00</td>
                <td>19:00</td>
                <td>2 Hours</td>
              </tr>

              <tr>
                <td>Dhaka to Chittagong</td>
                <td>7:00</td>
                <td>19:00</td>
                <td>2 Hours</td>
              </tr>
            </table>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            hic iure rem ducimus, sunt, asperiores earum tempora natus
            voluptatibus nemo quo quidem blanditiis commodi sed doloremque neque
            cumque explicabo laboriosam? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sapiente, hic iure rem ducimus, sunt, asperiores
            earum tempora natus voluptatibus nemo quo quidem blanditiis commodi
            sed doloremque neque cumque explicabo laboriosam?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            hic iure rem ducimus, sunt, asperiores earum tempora natus
            voluptatibus nemo quo quidem blanditiis commodi sed doloremque neque
            cumque explicabo laboriosam? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sapiente, hic iure rem ducimus, sunt, asperiores
            earum tempora natus voluptatibus nemo quo quidem blanditiis commodi
            sed doloremque neque cumque explicabo laboriosam?
          </p>

          <br />
        </div>
      </section> */}

      <Gallery></Gallery>

      <Footer></Footer>
    </>
  );
}

export default Flightscomp;
