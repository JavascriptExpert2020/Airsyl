import React, { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "./Footer";

function Stats() {
  const [loading, setloading] = useState(false);
  const [count, setCount] = useState(0);
  const [c_count, setCCount] = useState(0);
  const [m_count, setMCount] = useState(0);
  const [m_rows, setMRows] = useState([]);
  const [search, setSearch] = useState({ name: "", email: "", mobile: "" });
  const [tempBlog, settempBlog] = useState([]);
  const [status_count, setStatusCount] = useState({
    booked: 0,
    pending: 0,
    tickted: 0,
    cancelled: 0,
    unconfirmed: 0,
  });

  function getCount() {
    Axios.get(`${process.env.React_App_Api_Url}/api/booking/get_booking_count`)
      .then((res) => {
        console.log(res);
        setCount(res.data.count);
        setCCount(res.data.c_count.count);
        setMCount(res.data.m_count.count);
        setMRows(res.data.m_count.rows);
        setStatusCount({
          booked: res.data.bookedCount.count,
          pending: res.data.pendingCount.count,
          tickted: res.data.ticketedCount.count,
          cancelled: res.data.cancelledCount.count,
          unconfirmed: res.data.unConfirmedCount.count,
        });
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function clearSearch(e) {
    e.preventDefault();
    setloading(true);
    // window.location.reload();
    //    setPurchaseHistory(tempBlog);
    setSearch({ email: "", name: "", mobile: "" });
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    getCount();
    // document.getElementById("mobile").value = "";
    // document.getElementById('title').value='';
  }
  function searchfunc(e) {
    e.preventDefault();
    setloading(true);
    if (search.name !== "" && search.email !== "") {
      Axios.get(
        `${process.env.React_App_Api_Url}/api/booking/get_booking_count_date?startedDate=${search.name}&endDate=${search.email}`
      ).then((res) => {
        console.log(res);
        setCount(res.data.count);
        setCCount(res.data.c_count.count);
        setMCount(res.data.m_count.count);
        setMRows(res.data.m_count.rows);
        setStatusCount({
          booked: res.data.bookedCount.count,
          pending: res.data.pendingCount.count,
          tickted: res.data.ticketedCount.count,
          cancelled: res.data.cancelledCount.count,
          unconfirmed: res.data.unConfirmedCount.count,
        });
        setloading(false);
      });
    }
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
  }

  useEffect(() => {
    setloading(true);
    getCount();
  }, []);

  return (
    <>
      {loading ? <div className="loading"></div> : ""}
      <section className="section">
        <div className="container">
          <div className="edit-profile" style={{ width: "100%" }}>
            <h3>Stats</h3>

            <div className="edit-details">
              <div className="p-history-head" style={{ width: "100%" }}>
                <form>
                  <div>
                    <input
                      type="date"
                      placeholder="Start Date"
                      id="name"
                      onChange={onChange}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <input
                      type="date"
                      placeholder="End Date"
                      id="email"
                      onChange={onChange}
                    />
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
              </div>
              <div className="table-responsive" style={{ marginTop: "5%" }}>
                <table className="order-table">
                  <tr>
                    <th>Number Of Tickets Booked</th>
                    <th>Tickets Booked By Agent</th>
                    <th>Tickets Booked By Customers</th>
                    <th>Pending Tickets</th>
                    <th>Booked Tickets</th>
                    <th>Ticketed Tickets</th>
                    <th>Cancelled Tickets</th>
                    <th>Unconfirmed Tickets</th>
                  </tr>
                  <tr>
                    <td>{count}</td>
                    <td>{m_count}</td>
                    <td>{c_count}</td>
                    <td>{status_count.pending}</td>
                    <td>{status_count.booked}</td>
                    <td>{status_count.tickted}</td>
                    <td>{status_count.cancelled}</td>
                    <td>{status_count.unconfirmed}</td>
                  </tr>
                </table>
                {/*
                <h3>Agents Name & Tickets Booked</h3>
                <table className="order-table">
                <tr>
                    <th>Name</th>
                    <th>Tickets Booked By Agent</th>
                </tr>
                <tr>
                    {
                        m_rows ? m_rows.length!=0 ?
                        m_rows.map(row=>{
                            return(
                                <td>{row.User.firstName+' '+row.User.lastName}</td>
                                <td>{}</td>            
                            )
                        }):'':''
                    }
                </tr>
                </table>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Stats;
