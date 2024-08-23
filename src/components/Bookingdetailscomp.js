import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { parse, stringify, toJSON, fromJSON } from "flatted";
import { toast } from "react-toastify";
import "./header-nav.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

toast.configure();
function Bookingdetailscomp() {
  const params = useParams();
  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("blogUser"))
  );
  const [loading, setloading] = useState(false);
  const [previewTicket, setPreviewTicket] = useState(false);
  const [email, setEmail] = useState("");
  const [bookingdetails, setdetails] = useState([]);
  const history = useHistory();
  const [flightDetails, setflightDetails] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [bookingStatus, setBookingStatus] = useState("");
  const [totalamount, setTotalAmount] = useState(0);
  function splitDate(x) {
    if (x) {
      let y = x.split("T");
      return y[0];
    }
  }
  function splitTime(x) {
    if (x) {
      let y = x.split("T");
      return y[1];
    }
  }
  function calculateFivePercent(price) {
    let discount = price * 0.05;
    return price - discount;
  }
  function CancelBooking(e) {
    setloading(true);
    e.preventDefault();
    var c;
    Axios.post(`${process.env.React_App_Api_Url}/api/flight/AirCancel`, {
      bookingId: params.bookingId,
    })
      .then((res) => {
        c = parse(res.data.flightdetails);
        console.log("AirTicketing", c.data);
        // setloading(false);
        if (c.data.Error) {
          toast.error(`${c.data.Error.ErrorMessage}`);
        } else {
          getFlightDetails();
        }
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function downloadTicket(e) {
    setloading(true);
    e.preventDefault();
    var d;
    Axios.post(`${process.env.React_App_Api_Url}/api/flight/DownloadTicket`, {
      bookingId: params.bookingId,
    })
      .then((res) => {
        d = parse(res.data.flightdetails);
        console.log("AirTicketing", d.data);
        setloading(false);
        if (d.data.Error) {
          toast.error(`${d.data.Error.ErrorMessage}`);
        } else {
          getFlightDetails();
        }
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function downloadInvoice(e) {
    setloading(true);
    e.preventDefault();
    var d;
    Axios.post(`${process.env.React_App_Api_Url}/api/flight/DownloadInvoice`, {
      bookingId: params.bookingId,
    })
      .then((res) => {
        d = parse(res.data.flightdetails);
        console.log("AirTicketing", d.data);
        setloading(false);
        if (d.data.Error) {
          toast.error(`${d.data.Error.ErrorMessage}`);
        } else {
          getFlightDetails();
        }
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function generateTicket(e) {
    setloading(true);
    e.preventDefault();
    debugger;
    if (userProfile.user_role == "manager") {
      Axios.post(
        `${process.env.React_App_Api_Url}/api/flight/CheckManagerBalance`,
        {
          amount: totalamount.toFixed(0),
          id: userProfile.id,
        }
      )
        .then((res) => {
          //  setloading(false)
          // if (showProfile.user_role === "manager") {
          if (res.data.message === "Amount Deducted Successfully.") {
            var y;
            Axios.post(
              `${process.env.React_App_Api_Url}/api/flight/AirTicketing`,
              {
                bookingId: params.bookingId,
                IsAcceptedPriceChangeandIssueTicket: true,
              }
            )
              .then((respo) => {
                y = parse(respo.data.flightdetails);
                console.log("AirTicketing", y.data);
                if (y.data.Error) {
                  toast.error(`${y.data.Error.ErrorMessage}`);
                  Axios.post(
                    `${process.env.React_App_Api_Url}/api/flight/RevertManagerBalance`,
                    {
                      amount: totalamount.toFixed(0),
                      id: userProfile.id,
                    }
                  ).then((res) => {
                    setloading(false);
                  });
                } else {
                  history.replace(
                    `/bookingdetails/preview/${params.id}/${params.bookingId}`
                  );
                  window.location.reload();
                  // getFlightDetails();
                }
              })
              .catch((err) => {
                setloading(false);
              });

            // createAirBook();
          } else {
            toast.error("Insufficient Balance.");
            setloading(false);
          }
          // }
        })
        .catch((err) => {
          setloading(false);
          console.log(err);
        });
    } else {
      Axios.get(
        `${process.env.React_App_Api_Url}/api/sslcommerz/ssl-request-ticket?orderID=${params.id}&bookingID=${params.bookingId}&currency="BDT"&totalamount=${flightDetails.TotalFare}`
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
  }
  function getFlightDetails() {
    setloading(true);
    var x;
    Axios.post(`${process.env.React_App_Api_Url}/api/flight/AirRetrieve`, {
      bookingId: params.bookingId,
    })
      .then(async (res) => {
        // setloading(false);
        x = parse(res.data.flightdetails);
        console.log(x.data);
        await setflightDetails(x.data.Results[0]);
        await setPassengerDetails(x.data.Passengers);
        await setBookingStatus(x.data.BookingStatus);
        let discount = x.data.Results[0]["TotalFare"] * 0.05;
        setTotalAmount(x.data.Results[0].TotalFare - discount);
        await updateBookingStatus(
          x.data.BookingStatus,
          x.data.Results[0].segments[0].AirlinePNR
        );
        // debugger;
        // if (flightDetails.length != 0 && bookingdetails.length != 0) {
        // }
        //        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function updateBookingStatus(status, pnr) {
    debugger;
    Axios.post(
      `${process.env.React_App_Api_Url}/api/booking/updateBookingStatus`,
      {
        orderId: params.id,
        status: status,
        pnr: pnr,
      }
    )
      .then((res) => {
        // setloading(false);
        debugger;
        if (window.location.href.includes("/preview")) {
          setloading(true);
          generatePDF();
        } else {
          setloading(false);
        }
        // setdetails(res.data.bookingsList);
        // console.log(bookingdetails);
      })
      .catch((err) => {
        setloading(false);
      });
  }

  function getBlogByIdSamePage() {
    Axios.get(
      `${process.env.React_App_Api_Url}/api/booking/get_booking_by_id?orderId=${params.id}`
    )
      .then(async (res) => {
        // setloading(false);
        debugger;
        await setdetails(res.data.bookingsList);
        await setEmail(res.data.bookingsList[0].Passenger.User.email);
        console.log(bookingdetails);
        getFlightDetails();
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  }
  function generatePDF() {
    // e.preventDefault();
    setloading(true);
    html2canvas(document.querySelector("#capture"), { scale: 1 }).then(
      (canvas) => {
        var imgWidth = 210;
        var pageHeight = 290;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;

        var doc = new jsPDF("p", "mm", "a4");
        var position = 0;
        var pageData = canvas.toDataURL("image/png", 1.0);
        var imgData = encodeURIComponent(pageData);
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        doc.setLineWidth(5);
        doc.setDrawColor(255, 255, 255);
        doc.rect(0, 0, 210, 295);
        heightLeft -= pageHeight;
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          doc.setLineWidth(5);
          doc.setDrawColor(255, 255, 255);
          doc.rect(0, 0, 210, 295);
          heightLeft -= pageHeight;
        }
        doc.save(`AirlineTicket--${params.bookingId}.pdf`);
        let dataUrl = doc.output("datauristring");
        const blob = DataURIToBlob(dataUrl);
        let formData = new FormData();
        formData.append("file", blob);
        Axios.post(
          `${process.env.React_App_Api_Url}/api/aws/file?email=admin-uploads`,
          formData
        )
          .then((res) => {
            debugger;
            Axios.post(
              `${process.env.React_App_Api_Url}/api/user/sendTicketEmail`,
              {
                url: res.data.url,
                email: userProfile.email,
              }
            ).then((resp) => {
              history.replace(
                `/bookingdetails/${params.id}/${params.bookingId}`
              );
              window.location.reload();
            });
          })
          .catch((err) => {
            console.log(err);
          });

        // this.ss.uploadPDF(formData, 'admin-uploads').then(
        //   (response: any) => {
        //     // this.ss.uploadKycPDF(response.url, this.signupData.user.cId).subscribe(
        //     //   (res) => {
        //     //     this.loader.close();
        //     //     this.warehousePDF();
        //     //   },
        //     //   (err) => {
        //     //     this.loader.close();
        //     //   }
        //     // );
        //   },
        //   (err) => {
        //     this.loader.close();
        //   }
        // );
        //this.loader.close();
      }
    );
  }

  useEffect(async () => {
    setloading(true);
    if (window.location.href.includes("/preview")) {
      await setPreviewTicket(false);
    } else {
      await setPreviewTicket(true);
    }
    getBlogByIdSamePage();
    //  getFlightDetails();
  }, []);
  return (
    <>
      {loading ? <div className="loading"></div> : ""}
      {previewTicket ? (
        <section>
          <div className="container">
            <div className="table-responsive" style={{ marginTop: "5%" }}>
              <table className="order-table">
                <tr>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>User Mobile</th>
                  <th>User Role</th>
                </tr>
                {bookingdetails.length != 0 ? (
                  bookingdetails[0].Passenger != undefined ||
                  bookingdetails[0].Passenger != null ? (
                    <tr>
                      <td>
                        {bookingdetails[0].Passenger.User.firstName +
                          " " +
                          bookingdetails[0].Passenger.User.lastName}
                      </td>
                      <td>{bookingdetails[0].Passenger.User.email}</td>
                      <td>{bookingdetails[0].Passenger.User.mobile}</td>
                      <td>
                        {bookingdetails[0].Passenger.User.user_role == "manager"
                          ? "Agent"
                          : bookingdetails[0].Passenger.User.user_role}
                      </td>
                    </tr>
                  ) : (
                    "No User Found."
                  )
                ) : (
                  ""
                )}
              </table>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row checkout">
              <div className="col-lg-8 col-12 col-md-8 checkout-left">
                {bookingdetails.length != 0
                  ? bookingdetails.map((booking, index) => {
                      return (
                        <form
                          id="regForm"
                          action=""
                          style={{ marginBottom: "50%" }}
                        >
                          <div>
                            <div className="form-field">
                              <div className="form-field-flex">
                                <label>
                                  {index + 1 + ":"}&nbsp;&nbsp;Contact
                                  Information *
                                </label>
                              </div>

                              <input
                                value={
                                  booking.Passenger != undefined ||
                                  booking.Passenger != null
                                    ? booking.Passenger.User.email
                                    : ""
                                }
                                readOnly
                              />
                            </div>

                            <div className="sign-title">
                              <h2>Passenger Information</h2>
                            </div>

                            <div className="form-field">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 dual-width">
                                  <label>First Name *</label>
                                  <input
                                    value={
                                      booking.Passenger != undefined ||
                                      booking.Passenger != null
                                        ? booking.Passenger.first_name
                                        : ""
                                    }
                                    readOnly
                                  />
                                </div>

                                <div className="col-lg-6 col-md-6 col-12 dual-width">
                                  <label>Second Name *</label>
                                  <input
                                    value={
                                      booking.Passenger != undefined ||
                                      booking.Passenger != null
                                        ? booking.Passenger.last_name
                                        : ""
                                    }
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-field">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 dual-width">
                                  <label>Email *</label>
                                  <input
                                    value={
                                      booking.Passenger != undefined ||
                                      booking.Passenger != null
                                        ? booking.Passenger.email
                                        : ""
                                    }
                                    readOnly
                                  />
                                </div>

                                <div className="col-lg-6 col-md-6 col-12 dual-width">
                                  <label>Phone *</label>
                                  <input
                                    value={
                                      booking.Passenger != undefined ||
                                      booking.Passenger != null
                                        ? booking.Passenger.contact_number
                                        : ""
                                    }
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="form-field">
                              <label>Address *</label>
                              <input
                                value={
                                  booking.Passenger != undefined ||
                                  booking.Passenger != null
                                    ? booking.Passenger.address
                                    : ""
                                }
                                readOnly
                              />
                            </div>

                            <div className="form-field">
                              <label>Apartment, Suite, etc *</label>
                              <input
                                value={
                                  booking.Passenger != undefined ||
                                  booking.Passenger != null
                                    ? booking.Passenger.apartment
                                    : ""
                                }
                                readOnly
                              />
                            </div>

                            {/*<div className="form-field">
                            <label>City *</label>
                            <input value={booking.Passenger!=undefined || booking.Passenger!=null?booking.Passenger.city:''} readOnly/>
                    </div>*/}

                            <div className="form-field">
                              <label for="countries">Country/Region *</label>

                              <select
                                name="countries"
                                value={
                                  booking.Passenger != undefined ||
                                  booking.Passenger != null
                                    ? booking.Passenger.country
                                    : ""
                                }
                              >
                                <option value="" disabled selected>
                                  Country/Region
                                </option>
                                <option value="PK">Pakistan</option>
                                <option value="india">India</option>
                                <option value="BD">Bangladesh</option>
                                <option value="sri-lanka">Sri Lanka</option>
                              </select>
                            </div>

                            {/* <div className="col-6">
                                <label>Postal Code *</label>
                                <input value={booking.Passenger!=undefined || booking.Passenger!=null?booking.Passenger.postal_code:''} readOnly/>
                  </div>*/}

                            <div className="form-field">
                              <label>NIC Number (For Domestic Flights)</label>
                              <input
                                value={
                                  booking.Passenger != undefined ||
                                  booking.Passenger != null
                                    ? booking.Passenger.nic_number
                                    : ""
                                }
                                readOnly
                              />
                            </div>

                            <div className="form-field">
                              <label>
                                Passport Number (For International Flights)
                              </label>
                              <input
                                value={
                                  booking.Passenger != undefined ||
                                  booking.Passenger != null
                                    ? booking.Passenger.passport_number
                                    : ""
                                }
                                readOnly
                              />
                            </div>
                          </div>

                          <div
                            style={{ textAlign: "center", marginTop: "40px" }}
                          >
                            <span className="step"></span>
                            <span className="step"></span>
                          </div>
                          {/* {bookingStatus !== "Booked" &&
                          bookingStatus !== "Cancelled" ? (
                            <div>
                              <button
                                type="button"
                                className="button-green"
                                onClick={(e) => {
                                  downloadInvoice(e);
                                }}
                                disabled={bookingStatus === "InProcess"}
                              >
                                Download Invoice
                              </button>
                              <button
                                type="button"
                                className="button-green"
                                onClick={(e) => {
                                  downloadTicket(e);
                                }}
                                style={{ float: "right" }}
                                disabled={bookingStatus === "InProcess"}
                              >
                                Download Ticket
                              </button>
                            </div>
                          ) : (
                            ""
                          )} */}
                        </form>
                      );
                    })
                  : ""}
                {/* {bookingStatus === "Ticketed" ? ( */}
                {/* <button
                  type="button"
                  className="button-green"
                  onClick={() => {
                    setPreviewTicket(false);
                  }}
                >
                  Preview Ticket
                </button> */}
                {/* ) : (
                  ""
                )} */}
                {bookingStatus === "Booked" ? (
                  <div>
                    <button
                      type="button"
                      className="button-green"
                      onClick={(e) => {
                        generateTicket(e);
                      }}
                      // onClick={(e) => {
                      //   setPreviewTicket(true);
                      // }}
                    >
                      Generate Ticket
                    </button>
                    {userProfile ? (
                      userProfile.user_role == "manager" ? (
                        <button
                          type="button"
                          className="button-green"
                          onClick={(e) => {
                            CancelBooking(e);
                          }}
                          style={{ float: "right" }}
                          disabled={bookingStatus === "InProcess"}
                        >
                          Cancel Booking
                        </button>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
                <br></br>
                <div style={{ overflow: "auto" }}>
                  <div style={{ float: "right" }}>
                    <button
                      type="button"
                      className="button-green"
                      onClick={(e) => {
                        if (userProfile.user_role === "admin") {
                          history.replace("/admin-booking");
                        } else {
                          history.replace("/edit-profile");
                        }
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 col-md-4 checkout-right">
                <div className="green-overlay"></div>

                <div style={{ position: "sticky", top: "10px" }}>
                  <div className="reserve">
                    <h2>Reservation Summary</h2>
                  </div>
                  <div className="flights">
                    {/* <i className="fa-solid fa-plane"></i> */}
                    <h4 style={{ color: "#fff" }}>
                      Status: &nbsp;&nbsp;
                      {flightDetails
                        ? flightDetails.length != 0
                          ? bookingStatus
                          : ""
                        : ""}
                    </h4>
                  </div>

                  {flightDetails
                    ? flightDetails.length !== 0
                      ? flightDetails.segments.map((detail, index) => {
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
                                  <p>Cabin : {detail.Airline.CabinClass}</p>
                                </div>
                                <div className="fare-basis">
                                  <p>
                                    Airline Name : {detail.Airline.AirlineName}
                                  </p>
                                </div>
                                {/* <div className="fare-basis">
                                  <p>Booking Status : {bookingStatus}</p>
                                </div> */}
                                <div className="fare-basis">
                                  <p>
                                    Cabin :
                                    {detail.baggageDetails[0]
                                      ? detail.baggageDetails[0].Cabin
                                      : "---"}
                                  </p>
                                  <p>
                                    Checkin :
                                    {detail.baggageDetails[0]
                                      ? detail.baggageDetails[0].Checkin
                                      : "---"}
                                  </p>
                                </div>

                                {index === flightDetails.segments.length - 1 ? (
                                  <>
                                    <div className="total-price">
                                      <p>Gross Amount</p>
                                      <p>
                                        {flightDetails.TotalFare}
                                        {flightDetails.Currency}
                                      </p>
                                    </div>
                                    <div className="total-price">
                                      <p>Invoice Amount</p>
                                      <p>
                                        {userProfile
                                          ? userProfile.user_role === "manager"
                                            ? calculateFivePercent(
                                                flightDetails.TotalFare
                                              )
                                            : flightDetails.TotalFare
                                          : flightDetails.TotalFare}
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
        </section>
      ) : (
        <section>
          {/* <button
            type="button"
            className="button-green"
            style={{ marginTop: "5%", marginLeft: "5%" }}
            onClick={(e) => {
              generatePDF(e);
            }}
          >
            Generate PDF
          </button>
          <button
            type="button"
            className="button-green"
            style={{ marginTop: "5%", marginLeft: "10%" }}
            onClick={(e) => {
              setPreviewTicket(true);
            }}
          >
            Cancel
          </button> */}
          <body
            bgcolor="#A0A0A0"
            vlink="blue"
            link="blue"
            id="capture"
            style={{
              marginTop: "5%",
              maxWidth: "1000px",
              margin: "auto",
            }}
          >
            {flightDetails
              ? flightDetails.length !== 0
                ? flightDetails.segments.map((detail, index) => {
                    return (
                      <>
                        <img
                          src="images/Airhub Final logo.png"
                          alt=""
                          style={{
                            display: "block",
                            margin: "auto",
                            width: "15%",
                          }}
                        />

                        <div
                          id="page1-div"
                          style={{
                            position: "relative",
                            width: "892px",
                            height: "1263px",
                          }}
                        >
                          <img
                            width="892"
                            height="1263"
                            src="images/target001.png"
                            alt="background image"
                          />
                          <p
                            style={{
                              position: "absolute",
                              top: "201px",
                              left: "306px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft10"
                          >
                            REFERENCE&#160;ID
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "201px",
                              left: "427px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft11"
                          >
                            <b>{params.bookingId}</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "231px",
                              left: "306px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft10"
                          >
                            A-PNR
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "231px",
                              left: "427px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft11"
                          >
                            <b>{bookingdetails[0].bookingPNR}</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "260px",
                              left: "306px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft10"
                          >
                            FLIGHT&#160;TYPE
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "260px",
                              left: "427px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft11"
                          >
                            <b>DOMESTIC&#160;|&#160;ONE&#160;WAY</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "289px",
                              left: "306px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft10"
                          >
                            STATUS
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "289px",
                              left: "427px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft11"
                          >
                            <b>{bookingdetails[0].bookingStatus}</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "318px",
                              left: "306px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft10"
                          >
                            ISSUE&#160;DATE
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "318px",
                              left: "427px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft11"
                          >
                            <b>{bookingdetails[0].createdAt.split("T")[0]}</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "48px",
                              left: "371px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft12"
                          >
                            e-Ticket
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "51px",
                              left: "620px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft13"
                          >
                            Reference&#160;ID:&#160;<b>{params.bookingId}</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "114px",
                              left: "65px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft11"
                          >
                            <b>
                              {userProfile.agencyName}
                              {/* {bookingdetails[0].Passenger.User.firstName +
                                " " +
                                bookingdetails[0].Passenger.User.lastName} */}
                            </b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "133px",
                              left: "65px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft114"
                          >
                            {bookingdetails[0].Passenger.User.user_role ==
                            "manager"
                              ? bookingdetails[0].Passenger.User.agency_address
                              : "AirSyl"}
                            {/* 30&#160;Sylhet&#160;Millinium&#160;1st&#160;Floor,&#160;Zallarpar&#160;Road
                <br />
                Zindabazar,&#160;Sylhet,&#160;Sylhet&#160;&#160;&#160;3100 */}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "122px",
                              left: "471px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft10"
                          >
                            &#160;<b>Helpline</b>&#160;
                            {bookingdetails[0].Passenger.User.user_role ==
                            "manager"
                              ? bookingdetails[0].Passenger.User.mobile
                              : "(+880) 01712909113"}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "139px",
                              left: "471px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft10"
                          >
                            &#160;<b>Write&#160;to&#160;us,&#160;visit</b>
                            &#160;
                            {bookingdetails[0].Passenger.User.user_role ==
                            "manager"
                              ? bookingdetails[0].Passenger.User.email
                              : "info@airsyl.com"}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "202px",
                              left: "51px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft16"
                          >
                            <b>Passenger&#160;Name</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "202px",
                              left: "209px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft16"
                          >
                            <b>Ticket&#160;Number</b>
                          </p>
                          {passengerDetails
                            ? passengerDetails.length !== 0
                              ? passengerDetails.map((detail, index) => {
                                  return (
                                    <>
                                      <p
                                        style={{
                                          position: "absolute",
                                          top: "226px",
                                          left: "51px",
                                          whiteSpace: "nowrap",
                                        }}
                                        class="ft17"
                                      >
                                        {detail.Title}&#160;{detail.FirstName}
                                        {/* MR&#160;SAIFUR&#160;RAHMAN */}
                                      </p>
                                      <p
                                        style={{
                                          position: "absolute",
                                          top: "242px",
                                          left: "51px",
                                          whiteSpace: "nowrap",
                                        }}
                                        class="ft17"
                                      >
                                        {detail.LastName}
                                      </p>
                                      <p
                                        style={{
                                          position: "absolute",
                                          top: "234px",
                                          left: "209px",
                                          whiteSpace: "nowrap",
                                        }}
                                        class="ft17"
                                      >
                                        {detail.Ticket}
                                      </p>
                                    </>
                                  );
                                })
                              : ""
                            : ""}
                          {/* <p
                style={{
                  position: "absolute",
                  top: "264px",
                  left: "51px",
                  whiteSpace: "nowrap",
                }}
                class="ft17"
              >
                MS&#160;RUSHNA&#160;RAHMAN
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "281px",
                  left: "51px",
                  whiteSpace: "nowrap",
                }}
                class="ft17"
              >
                CHOWDHURY
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "272px",
                  left: "209px",
                  whiteSpace: "nowrap",
                }}
                class="ft17"
              >
                9973917786451
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "302px",
                  left: "51px",
                  whiteSpace: "nowrap",
                }}
                class="ft17"
              >
                MR&#160;KAMRAN&#160;AZIZ
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "319px",
                  left: "51px",
                  whiteSpace: "nowrap",
                }}
                class="ft17"
              >
                CHOWDHURY
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "311px",
                  left: "209px",
                  whiteSpace: "nowrap",
                }}
                class="ft17"
              >
                9973917786450
              </p> */}
                          <p
                            style={{
                              position: "absolute",
                              top: "378px",
                              left: "62px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft14"
                          >
                            <b>FLIGHT&#160;ITINERARIES&#160;</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "444px",
                              left: "104px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft10"
                          >
                            &#160;
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "475px",
                              left: "63px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft18"
                          >
                            {detail.Origin.Airport.AirportCode}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "501px",
                              left: "63px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft19"
                          >
                            {detail.Origin.DepTime.split("T")[1]}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "523px",
                              left: "63px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft17"
                          >
                            {detail.Origin.DepTime.split("T")[0]}
                            {/* 23&#160;Aug,&#160;2022 */}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "518px",
                              left: "191px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft110"
                          >
                            {detail.JourneyDuration}&#160;mins
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "475px",
                              left: "292px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft18"
                          >
                            {detail.Destination.Airport.AirportCode}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "501px",
                              left: "292px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft19"
                          >
                            {detail.Destination.ArrTime.split("T")[1]}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "523px",
                              left: "292px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft17"
                          >
                            {detail.Destination.ArrTime.split("T")[0]}
                            {/* 23&#160;Aug,&#160;2022 */}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "419px",
                              left: "385px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft111"
                          >
                            {detail.Airline.AirlineCode}&#160;
                            {detail.Airline.FlightNumber}
                            &#160;•&#160;ECONOMY&#160;/&#160;
                            {detail.Airline.BookingClass}&#160;•&#160;
                            {detail.Airline.FlightNumber}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "449px",
                              left: "385px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft112"
                          >
                            DEPARTS
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "451px",
                              left: "465px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft17"
                          >
                            {detail.Origin.Airport.CityName},&#160;
                            {detail.Origin.Airport.AirportName},&#160;
                            {detail.Origin.Airport.Terminal}
                            {/* Sylhet,&#160;Osmani&#160;International&#160;Airport&#160;(ZYL) */}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "479px",
                              left: "385px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft112"
                          >
                            LANDS&#160;IN
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "480px",
                              left: "465px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft17"
                          >
                            {detail.Destination.Airport.CityName},&#160;
                            {detail.Destination.Airport.AirportName},&#160;
                            {detail.Destination.Airport.Terminal}
                            {/* Dhaka,&#160;Shahjalal&#160;intl.&#160;Airport&#160;(DAC)&#160;,&#160;Terminal&#160;D */}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "508px",
                              left: "385px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft112"
                          >
                            BAGGAGE
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "509px",
                              left: "465px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft17"
                          >
                            {detail.Baggage}&#160;Cabin:&#160;
                            {detail.baggageDetails[0].Cabin}
                            {/* Adult&#160;-&#160;Check&#160;in:&#160;20&#160;K&#160;Cabin:&#160;SB */}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "537px",
                              left: "385px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft112"
                          >
                            A-PNR
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "538px",
                              left: "465px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft17"
                          >
                            {detail.AirlinePNR}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "578px",
                              left: "62px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft14"
                          >
                            <b>
                              CONDITIONS&#160;AND&#160;IMPORTANT&#160;NOTICE:
                            </b>
                          </p>
                          {/* <p
                style={{
                  position: "absolute",
                  top: "302px",
                  left: "51px",
                  whiteSpace: "nowrap",
                }}
                class="ft113"
              >
                <b>E-Ticket&#160;Notice:</b>
              </p> */}
                          <p
                            style={{
                              position: "absolute",
                              top: "640px",
                              left: "62px",
                              whiteSpace: "nowrap",
                              marginTop: "-3%",
                            }}
                            class="ft115"
                          >
                            <span className="ft113">
                              <b>E-Ticket&#160;Notice:</b>
                            </span>
                            <br />
                            Carriage&#160;and&#160;other&#160;services&#160;provided&#160;by&#160;the&#160;carrier&#160;are&#160;subject&#160;to&#160;conditions&#160;of&#160;carriage&#160;which&#160;are&#160;hereby&#160;incorporated&#160;by&#160;reference.&#160;These
                            <br />
                            conditions&#160;may&#160;be&#160;obtained&#160;from&#160;the&#160;issuing&#160;carrier.
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "683px",
                              left: "62px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft113"
                          >
                            <b>Passport/Visa/Health&#160;:</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "707px",
                              left: "62px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft115"
                          >
                            Please&#160;ensure&#160;that&#160;you&#160;have&#160;all&#160;the&#160;required&#160;travel&#160;documents&#160;for&#160;your&#160;entire&#160;journey&#160;-&#160;i.e.&#160;valid&#160;passport&#160;&amp;necessary&#160;visas&#160;-&#160;and&#160;that&#160;you&#160;have
                            <br />
                            had&#160;the&#160;recommended&#160;inoculations&#160;for&#160;your&#160;destination(s).
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "750px",
                              left: "62px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft113"
                          >
                            <b>Reconfirmation&#160;of&#160;flights&#160;:</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "774px",
                              left: "62px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft115"
                          >
                            Please&#160;reconfirm&#160;all&#160;flights&#160;at&#160;least&#160;72&#160;hours&#160;in&#160;advance&#160;direct&#160;with&#160;the&#160;airline&#160;concerned.&#160;Failure&#160;to&#160;do&#160;so&#160;could&#160;result&#160;in&#160;the&#160;cancellation&#160;of&#160;your
                            <br />
                            reservation&#160;and&#160;possible&#160;`no-show`&#160;charges.
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "817px",
                              left: "62px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft113"
                          >
                            <b>Insurance&#160;:</b>
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "840px",
                              left: "62px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft112"
                          >
                            We&#160;strongly&#160;recommend&#160;that&#160;you&#160;take&#160;out&#160;travel&#160;insurance&#160;for&#160;the&#160;whole&#160;of&#160;your&#160;journey.
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "440px",
                              left: "107px",
                              whiteSpace: "nowrap",
                            }}
                            class="ft17"
                          >
                            {detail.Airline.AirlineName}
                          </p>
                        </div>
                      </>
                    );
                  })
                : ""
              : ""}
            <div
              style={{
                display: "block",
                clear: "both",
                pageBreakAfter: "always",
              }}
            ></div>
          </body>
        </section>
      )}
    </>
  );
}

export default Bookingdetailscomp;
