import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
toast.configure();

function Homecomponent() {
  const [showdropdown, setdropdown] = useState(false);
  const [showdropdown1, setdropdown1] = useState(false);
  const [showdropdown2, setdropdown2] = useState(false);
  const [numberofadult, setnumberofAdult] = useState(0);
  const [flyingfromsearch, setflyingFromSearch] = useState([]);
  const [flyingFrom, setflyingFrom] = useState("");
  const [flyingTo, setflyingTo] = useState("");
  const [numberofkids, setnumberofkids] = useState(0);
  const [numberofinfants, setnumberofinfants] = useState(0);
  const [cabinclass, setcabinclass] = useState("1");
  const [departuredate, setdeparturedate] = useState("");
  const [returndate, setReturnDate] = useState("");
  const [journeyType, setJourneyType] = useState("2");
  const [settype, setType] = useState("text");
  const [settype1, setType1] = useState("text");
  const [initialAirPorts, setInitialAirPorts] = useState([]);
  const [multiCity, setMultiCity] = useState([]);
  const [loading, setloading] = useState(false);
  const [today, setToday] = useState("");
  var y = [];
  const history = useHistory();
  function getAuthenticate() {
    Axios.post(
      `${process.env.React_App_Api_Url}/api/flight/get_authenticate_api`
    )
      .then((blogs) => {
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function tocomponentB(e) {
    debugger;
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
  function onChangeFlyingFrom(e) {
    // setflyingFromSearch( initialAirPorts.filter((result)=>{
    //     return result.name.toLowerCase().includes(e.target.value.toLowerCase())
    // }))
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
  function myFunction(e) {
    if (e.code === "Escape") {
      setdropdown1(false);
      setdropdown2(false);
      setdropdown(false);
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
  function onChangeCabinClass(e) {
    setcabinclass(e.target.value);
    // setdropdown1(false)
  }
  function onChangeDepartureDate(e) {
    setdeparturedate(e.target.value);
  }
  function onChangeReturnDate(e) {
    setReturnDate(e.target.value);
  }
  function onChangeJourneyType(e) {
    setJourneyType(e.target.value);
  }
  function sortAirports(airport) {
    if (airport)
      setInitialAirPorts(airport.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }
  function pushMultiCity(e, submitss) {
    e.preventDefault();
    var arr = [];
    debugger;
    // if(multiCity.length == 1)
    // {
    //  var array = [...multiCity]; // make a separate copy of the array
    // array[multiCity.length-1].flyingFrom=flyingFrom;
    // array[multiCity.length-1].flyingTo=flyingTo;
    // array[multiCity.length-1].departuredate=departuredate;
    // array[multiCity.length-1].cabinclass=cabinclass;
    // setMultiCity(array);

    // }
    // else
    // {
    //     var x = {flyingFrom:'',flyingTo:'',departuredate:'',cabinclass:''};
    //     arr.push(x)
    //     const newarray = [...multiCity,...arr]
    //     setMultiCity(newarray);
    // }
    if (submitss == "b") {
      tocomponentB(e);
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
  useEffect(async () => {
    window.scrollTo(0, 0);
    setloading(true);
    getAuthenticate();
    const airports = await require("../airports.json");
    // setInitialAirPorts(airports);
    sortAirports(airports);
    pushFirstMultiCity();
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
    // .max = new Date().toISOString().split("T")[0];
  }, []);
  return (
    <>
      <div className="bg"></div>

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

                <div className="col-lg-2 col-12 no-padding ">
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
                <div
                  className="col-lg-2 col-12 no-padding room-select"
                  // onBlur={() => {
                  //   setdropdown(false);
                  // }}
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

                  {/* <span className="set-text" id="kids">
                    {numberofkids} KIDS
                  </span> */}
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
                  {/* <span className="set-text" id="kids">
                    {numberofinfants} INFANTS
                  </span> */}
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
                            setType1("text");
                          }}
                          placeholder="Return Date"
                          onChange={(e) => {
                            onChangeReturnDate(e);
                          }}
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
                        tocomponentB(e);
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
                            <div className="row" style={{ marginBottom: "1%" }}>
                              <div className="col-lg-3 col-12 no-padding">
                                <input
                                  type="text"
                                  list="listid1"
                                  placeholder="Flying From *"
                                  onChange={(e) => {
                                    onChangeFlyingFromMultiCity(e, index);
                                  }}
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
                                    onChangeDepartureDateMultiCity(e, index);
                                  }}
                                  id="datePickerId"
                                />
                              </div>

                              <div className="col-lg-2 col-12 no-padding ">
                                <select
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
                          tocomponentB(e, "b");
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
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 orders">
              <div className="box">
                <a href="#">
                  <img src="images/plane1.jpg" alt="" />

                  <div className="flight-des">
                    <div className="flight-name">
                      <p>ECONOMY</p>
                      <p>৳ 70</p>
                    </div>

                    <div className="flight-name">
                      <span>Flight</span>
                      <span>/ Upcoming</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 orders">
              <div className="box">
                <a href="#">
                  <img src="images/plane2.jpg" alt="" />

                  <div className="flight-des">
                    <div className="flight-name">
                      <p>ECONOMY</p>
                      <p>৳ 70</p>
                    </div>

                    <div className="flight-name">
                      <span>Flight</span>
                      <span>/ Upcoming</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 orders">
              <div className="box">
                <a href="#">
                  <img src="images/plane3.jpg" alt="" />

                  <div className="flight-des">
                    <div className="flight-name">
                      <p>ECONOMY</p>
                      <p>৳ 70</p>
                    </div>

                    <div className="flight-name">
                      <span>Flight</span>
                      <span>/ Upcoming</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 order1">
              <div className="popular-flights">
                <h2>Popular Flights</h2>
                <img src="images/underlin.png" className="underline" />

                <p>
                  AirSyl offers deals on the most sought-after flights to
                  destinations around the world.{" "}
                </p>

                <a href="#" className="button-dark">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="icon-box">
                <img src="images/team.jpg" alt="" />

                <i className="fa-solid fa-lock"></i>

                <div className="box-des" style={{ height: "400px" }}>
                  <h5>Trust & Safety</h5>
                  <p>
                    With AirSyl you can expect secure dealings. Your safety is
                    of the utmost priority which is why our company ensure the
                    provision of risk-free and reliable services. Trust AirSyl
                    to make your journey comfortable and pleasant.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="icon-box">
                <img src="images/team.jpg" alt="" />

                <i className="fa-solid fa-dollar-sign"></i>

                <div className="box-des" style={{ height: "400px" }}>
                  <h5>Lower Rates</h5>
                  <p>
                    Having trouble locating flights that meet your budget? Worry
                    not! Register with AirSyl and select the best match for you.
                    We provide flight options from hundreds of airlines. Select
                    the one that is within your price range and have a great
                    trip!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="icon-box">
                <img src="images/team.jpg" alt="" />

                <i className="fa-solid fa-plane"></i>

                <div className="box-des" style={{ height: "400px" }}>
                  <h5>Multiple Bookings</h5>
                  <p>
                    At AirSyl you can book a full-fledged tour with multiple
                    bookings to your bucket list destinations. We have the
                    resources to connect you with the best itinerary in regards
                    with your travel plans. Just select your tour destinations
                    and let us do the grunt work of finding the best flights for
                    you.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="icon-box">
                <img src="images/team.jpg" alt="" />

                <i className="fa-solid fa-thumbs-up"></i>

                <div className="box-des" style={{ height: "400px" }}>
                  <h5>Counseling Facility</h5>
                  <p>
                    If you are having difficulty and need assistance, our agents
                    are present to guide you in any way necessary. Our employees
                    are well versed and experience, and will be able to aid you
                    through any hindrances or question that you are facing.
                    Moreover, you can opt for our counseling facility to help
                    you plan your entire flight schedule. At AirSyl, we have
                    your back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <h2>Why Choose AirSyl</h2>
            <img src="images/underlin.png" className="underline" />
          </div>

          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="icon-box2">
                <i className="fa-solid fa-car"></i>

                <h5>Local and International</h5>
                <p>
                  AirSyl is offering the nation an exceptional experience. You
                  can now book both national and international flights that make
                  travelling part of your journey. Travel with AirSyl and have
                  the experience of a lifetime.
                </p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="icon-box2">
                <i className="fa-solid fa-users"></i>

                <h5>Meeting Expectations</h5>
                <p>
                  When you book nationally or internationally with AirSyl, it
                  becomes our duty to provide you with an experience that meets
                  your expectations. From flight schedules to in-flight affairs,
                  we will strive to make your travels an adventure.
                </p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="icon-box2">
                <i className="fa-solid fa-headphones-simple"></i>

                <h5>24/7 Customer Service</h5>
                <p>
                  Since we prioritize our clients, we have made our customer
                  service support available round the clock. So, regardless of
                  the time, you can contact us with any queries or issues and be
                  sure that we will strive to provide apt solutions.
                </p>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="icon-box2">
                <i className="fa-solid fa-helmet-safety"></i>

                <h5>Great Value for Lower Costs</h5>
                <p>
                  Find the lowest fares for your next flight through AirSyl’s
                  flight locator. Even if you are on a budget, with AirSyl, a
                  grand travel experience is a guarantee. Be it international or
                  national, your travel adventures awaits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery></Gallery>

      <section className="section">
        <div className="container">
          <div className="reviews">
            <div className="slick-slider">
              <div className="slider-parent">
                <div className="review-slide">
                  <i className="fa-solid fa-quote-left"></i>

                  <p>
                    I recently booked a flight through this website and was
                    blown away by the ease of use and the great prices. I would
                    definitely recommend it to anyone looking to book their next
                    trip
                  </p>

                  <div className="slide-person">
                    {/* <img src="images/Layer 1.png" /> */}
                    <h5>Farhana Rehman</h5>
                    {/* <span>Heeps Tech, CEO</span> */}
                  </div>
                </div>
              </div>

              <div className="slider-parent">
                <div className="review-slide">
                  <i className="fa-solid fa-quote-left"></i>

                  <p>
                    I stumbled upon this website while searching for flights and
                    I'm so glad I did. The booking process was quick and simple,
                    and I was able to find a great deal on my flight. I'll
                    definitely be using this site again in the future
                  </p>

                  <div className="slide-person">
                    {/* <img src="images/Layer 1.png" /> */}
                    <h5>Ayesha Begum</h5>
                    {/* <span>Heeps Tech, CEO</span> */}
                  </div>
                </div>
              </div>

              <div className="slider-parent">
                <div className="review-slide">
                  <i className="fa-solid fa-quote-left"></i>

                  <p>
                    I've been using this website for years to book my flights
                    and have never been disappointed. The customer service is
                    top-notch and the prices are unbeatable. I wouldn't use any
                    other site!
                  </p>

                  <div className="slide-person">
                    {/* <img src="images/Layer 1.png" /> */}
                    <h5>Mohammad Ali</h5>
                    {/* <span>Heeps Tech, CEO</span> */}
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

export default Homecomponent;
