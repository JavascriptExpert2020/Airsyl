import React, { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "./Footer";

function VerifyAgents() {
  const [showProfile, setShowProfile] = useState(
    JSON.parse(localStorage.getItem("blogUser"))
  );
  const [users, setUsers] = useState([]);
  const [balance, setBalance] = useState(0);
  const [search, setSearch] = useState({ name: "", email: "", mobile: "" });
  const [tempBlog, settempBlog] = useState([]);
  const [loading, setloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState({ name: "", id: "" });
  const [userTableOnModal, setUserTableOnModal] = useState([]);

  function splitDate(x) {
    if (x) {
      let y = x.split("T");
      return y[0];
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
    if (e.target.id == "balance") {
      setBalance(e.target.value);
    }
  }
  function searchfunc(e) {
    e.preventDefault();
    setloading(true);
    if (search.name == "" && search.email == "" && search.mobile == "") {
      setloading(false);
      return;
    }
    if (search.name !== "") {
      setUsers(
        tempBlog.filter((result) => {
          setloading(false);
          return result.firstName
            .toLowerCase()
            .includes(search.name.toLowerCase());
        })
      );
    }
    if (search.email !== "") {
      setUsers(
        tempBlog.filter((result) => {
          setloading(false);
          return result.email
            .toLowerCase()
            .includes(search.email.toLowerCase());
        })
      );
    }
    if (search.mobile !== "") {
      setUsers(
        tempBlog.filter((result) => {
          setloading(false);
          return result.mobile.includes(search.mobile.toLowerCase());
        })
      );
    }
    if (search.email !== "" && search.name !== "") {
      setUsers(
        tempBlog.filter((result) => {
          setloading(false);
          return (
            result.email.toLowerCase().includes(search.email.toLowerCase()) &&
            result.firstName.toLowerCase().includes(search.name.toLowerCase())
          );
        })
      );
    }
    if (search.email !== "" && search.mobile !== "") {
      setUsers(
        tempBlog.filter((result) => {
          setloading(false);
          return (
            result.email.toLowerCase().includes(search.email.toLowerCase()) &&
            result.mobile.includes(search.mobile.toLowerCase())
          );
        })
      );
    }
    if (search.mobile !== "" && search.name !== "") {
      setUsers(
        tempBlog.filter((result) => {
          setloading(false);
          return (
            result.mobile.includes(search.mobile) &&
            result.firstName.toLowerCase().includes(search.name.toLowerCase())
          );
        })
      );
    }
    if (search.mobile !== "" && search.name !== "" && search.email !== "") {
      setUsers(
        tempBlog.filter((result) => {
          setloading(false);
          return (
            result.mobile.includes(search.mobile) &&
            result.firstName
              .toLowerCase()
              .includes(search.name.toLowerCase()) &&
            result.email.toLowerCase().includes(search.email.toLowerCase())
          );
        })
      );
    }
  }
  function sortByDesc(e) {
    setloading(true);
    e.preventDefault();
    if (e.target.value == 1) {
      const sortByName = [...users];
      sortByName.sort((a, b) => (a.name < b.name ? 1 : -1));
      setUsers(sortByName);
      setloading(false);
    } else {
      const sortByName = [...users];
      sortByName.sort((a, b) => (a.name > b.name ? 1 : -1));
      setUsers(sortByName);
      setloading(false);
    }
  }
  function clearSearch(e) {
    e.preventDefault();
    // window.location.reload();
    setUsers(tempBlog);
    setSearch({ email: "", name: "", mobile: "" });
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    // document.getElementById('title').value='';
  }

  function markVerified(e, id) {
    setloading(true);
    setShowModal(false);
    e.preventDefault();
    Axios.get(
      `${process.env.React_App_Api_Url}/api/user/verifyAgentByAdmin?id=${id}`
    ).then((res) => {
      getUsers();
    });
  }
  function markUnVerified(e, id) {
    setloading(true);
    setShowModal(false);
    e.preventDefault();
    Axios.get(
      `${process.env.React_App_Api_Url}/api/user/unverifyuser?id=${id}`
    ).then((res) => {
      getUsers();
    });
  }
  function getUsers() {
    Axios.get(`${process.env.React_App_Api_Url}/api/user/allmanagers`).then(
      (res) => {
        console.log(res);
        setUsers(res.data.usersList);
        settempBlog(res.data.usersList);
        setloading(false);
      }
    );
  }
  function updateBalance(e) {
    setloading(true);
    setShowModal(false);
    e.preventDefault();
    Axios.post(
      `${process.env.React_App_Api_Url}/api/agent_transation/create_transaction`,
      {
        agent_id: userName.id,
        agent_name: userName.name,
        admin_id: showProfile.id,
        admin_name: showProfile.firstName + " " + showProfile.lastName,
        balance: parseInt(balance),
      }
    )
      .then((res) => {
        //            setloading(false);
        setBalance(0);
        // setAddBalance(false);
        setUserName({ id: "", name: "" });
        getUsers();
      })
      .catch((err) => {
        setloading(false);
      });
  }
  function addBalance(e, name, id, index) {
    debugger;
    e.preventDefault();
    setShowModal(true);
    setUserName({ id: id, name: name });
    setUserTableOnModal(users[index]);
  }

  useEffect(() => {
    setloading(true);
    getUsers();
  }, []);

  return (
    <>
      {loading ? <div className="loading"></div> : ""}
      <section className="section">
        <div className="container">
          <div className="edit-profile" style={{ width: "100%" }}>
            <h3>Agents</h3>

            <div className="edit-details">
              <div className="p-history-head">
                <form>
                  {/* <div>

                        <p className="d-inline">Showing 1-9</p>
                        <input type="number" value="" name="pagination" />

                   </div>*/}

                  <div>
                    <div>
                      <input
                        type="text"
                        placeholder="search by name"
                        id="name"
                        onChange={onChange}
                      />
                      &nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        placeholder="search by email"
                        id="email"
                        onChange={onChange}
                      />
                      &nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        placeholder="search by mobile"
                        id="mobile"
                        onChange={onChange}
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
                  </div>
                </form>
              </div>

              <div className="table-responsive" style={{ marginTop: "5%" }}>
                <table className="order-table">
                  <tr>
                    <th>Agency Name</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    {/* <th>Agency Address</th> */}
                    <th>Balance</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>

                  {users.length !== 0
                    ? users.map((user, index) => {
                        return user.user_role !== "admin" ? (
                          <tr>
                            <td>{user.agencyName}</td>
                            <td>{user.firstName} </td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            {/* <td>{user.agency_address}</td> */}
                            <td>
                              {user.agent_balance > 0
                                ? user.agent_balance + " BDT"
                                : "0 BDT"}
                            </td>
                            <td>
                              {user.verifed == true ? "Verified" : "Unverified"}
                            </td>
                            {/* {user.verifed ? (
                              <td>
                                <a
                                  href="#"
                                  className="button-green"
                                  onClick={(e) => {
                                    markUnVerified(e, user.id);
                                  }}
                                >
                                  Mark UnVerified
                                </a>
                              </td>
                            ) : (
                              <td>
                                <a
                                  href="#"
                                  className="button-green"
                                  onClick={(e) => {
                                    markVerified(e, user.id);
                                  }}
                                >
                                  Mark Verified
                                </a>
                              </td>
                            )} */}
                            <td>
                              <a
                                href="#"
                                className="button-green"
                                onclick="showModal()"
                                onClick={(e) => {
                                  addBalance(e, user.firstName, user.id, index);
                                }}
                              >
                                View
                              </a>
                            </td>
                            {
                              // addbalance!=true?
                              // :''
                            }
                          </tr>
                        ) : (
                          // {
                          //     addbalance?
                          //     <tr>
                          //         <td ><input placeholder="Enter amount to add balance" type="number" id="balance" onChange={onChange} style={{padding:"10px",borderRadius:"8px",border:"2px solid #aab8ba"}}/></td>
                          //         <td><a href="#" className="button-green" onClick={(e)=>{updateBalance(e,user.id,user.name)}}>Update Balance</a></td>
                          //         <td><a href="#" className="button-green" onClick={(e)=>{e.preventDefault();setAddBalance(false)}}>Cancel</a></td>
                          //     </tr>:''
                          // }
                          ""
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
      {showModal == true ? (
        <div
          className="modal fade show"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          style={{ paddingRight: "17px", display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content change-password">
              <div
                style={{
                  textAlign: "right",
                  marginTop: "3%",
                  marginRight: "5%",
                }}
              >
                <a
                  href="javascript:void(0)"
                  class="closebtn"
                  onclick="closeNav()"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(false);
                  }}
                  style={{ color: "#fff" }}
                >
                  &times;
                </a>
              </div>
              <div className="modal-body">
                <div className="container-fluid modal-right reset-password">
                  <h4 style={{ color: "#fff", textTransform: "uppercase" }}>
                    {userName.name}
                  </h4>
                  {/* <p>Enter amount to add balance</p> */}

                  <div className="table-responsive" style={{ marginTop: "5%" }}>
                    <table className="order-table">
                      <tr>
                        {/* <th>Name</th> */}
                        <th>Agency Name</th>
                        <th>Agency Address</th>
                        <th>Balance</th>
                        <th>Mark Verify/Unverify</th>
                      </tr>
                      <tr>
                        {/* <td>
                          {userTableOnModal.firstName +
                            " " +
                            userTableOnModal.lastName}
                        </td> */}
                        <td>{userTableOnModal.agencyName}</td>
                        <td>{userTableOnModal.agency_address}</td>
                        <td>
                          {userTableOnModal.agent_balance > 0
                            ? userTableOnModal.agent_balance + " BDT"
                            : "0 BDT"}
                        </td>
                        {userTableOnModal.verifed ? (
                          <td>
                            <a
                              href="#"
                              className="button-green"
                              onClick={(e) => {
                                markUnVerified(e, userTableOnModal.id);
                              }}
                            >
                              Mark UnVerified
                            </a>
                          </td>
                        ) : (
                          <td>
                            <a
                              href="#"
                              className="button-green"
                              onClick={(e) => {
                                markVerified(e, userTableOnModal.id);
                              }}
                            >
                              Mark Verified
                            </a>
                          </td>
                        )}
                      </tr>
                    </table>
                  </div>

                  <form>
                    <div
                      className="col-lg-12 col-12 sign-up-fields"
                      style={{ marginBottom: "3%" }}
                    >
                      <input
                        type="number"
                        placeholder="Enter amount to add balance"
                        id="balance"
                        onChange={onChange}
                        style={{
                          width: "50%",
                          padding: "10px",
                          borderRadius: "10px",
                        }}
                      />
                    </div>

                    <a
                      href="#"
                      className="button-green"
                      onClick={(e) => {
                        updateBalance(e);
                      }}
                    >
                      Update Balance
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default VerifyAgents;
