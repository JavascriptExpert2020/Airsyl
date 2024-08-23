import React, { useState } from "react";
import { Link } from "react-router-dom";

function Adminpayments() {
  const [loading, setloading] = useState(false);

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
                <i className="fa-solid fa-clock-rotate-left"></i>
                BKASH Transactions
              </button>
              <button
                className="nav-link tabs-btn"
                id="v-pills-nagad-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-nagad"
                type="button"
                role="tab"
                aria-controls="v-pills-nagad"
                aria-selected="false"
              >
                <i className="fa-solid fa-clock-rotate-left"></i>
                NAGAD Transactions
              </button>
              <button
                className="nav-link tabs-btn "
                id="v-pills-tap-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-tap"
                type="button"
                role="tab"
                aria-controls="v-pills-tap"
                aria-selected="false"
              >
                <i className="fa-solid fa-clock-rotate-left"></i>
                TAP Transactions
              </button>
            </div>
            <div className="tab-content tabs-right" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <h3>BKASH Transactions</h3>

                <div className="edit-details">
                  <div className="p-history-head">
                    {/* <form>
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
                    </form> */}
                  </div>

                  <div className="table-responsive">
                    <table className="order-table" style={{ marginTop: "5%" }}>
                      <tr>
                        <th>Passenger Name</th>
                        <th>Passenger CNIC</th>
                        <th>Passenger Email</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Details</th>
                      </tr>
                      <tr>
                        <td>Shuja</td>
                        <td>12345678</td>
                        <td>abcd@gmail.com</td>
                        <td>1000 BDT</td>
                        <td>Successfull</td>
                        <td>10-10-2022</td>
                        <td>
                          <Link href="#" className="button-green" to="">
                            Details
                          </Link>
                        </td>
                      </tr>
                      {/* {purchaseHistory
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
                        : ""} */}
                    </table>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade "
                id="v-pills-nagad"
                role="tabpanel"
                aria-labelledby="v-pills-nagad-tab"
              >
                <h3>NAGAD Transactions</h3>

                <div className="edit-details">
                  <div className="p-history-head">
                    {/* <form>
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
                    </form> */}
                  </div>

                  <div className="table-responsive">
                    <table className="order-table" style={{ marginTop: "5%" }}>
                      <tr>
                        <th>Passenger Name</th>
                        <th>Passenger CNIC</th>
                        <th>Passenger Email</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Details</th>
                      </tr>
                      <tr>
                        <td>Shuja</td>
                        <td>12345678</td>
                        <td>abcd@gmail.com</td>
                        <td>1000 BDT</td>
                        <td>Successfull</td>
                        <td>10-10-2022</td>
                        <td>
                          <Link href="#" className="button-green" to="">
                            Details
                          </Link>
                        </td>
                      </tr>
                      {/* {purchaseHistory
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
                        : ""} */}
                    </table>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade "
                id="v-pills-tap"
                role="tabpanel"
                aria-labelledby="v-pills-tap-tab"
              >
                <h3>TAP Transactions</h3>

                <div className="edit-details">
                  <div className="p-history-head">
                    {/* <form>
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
                    </form> */}
                  </div>

                  <div className="table-responsive">
                    <table className="order-table" style={{ marginTop: "5%" }}>
                      <tr>
                        <th>Passenger Name</th>
                        <th>Passenger CNIC</th>
                        <th>Passenger Email</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Details</th>
                      </tr>
                      <tr>
                        <td>Shuja</td>
                        <td>12345678</td>
                        <td>abcd@gmail.com</td>
                        <td>1000 BDT</td>
                        <td>Successfull</td>
                        <td>10-10-2022</td>
                        <td>
                          <Link href="#" className="button-green" to="">
                            Details
                          </Link>
                        </td>
                      </tr>
                      {/* {purchaseHistory
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
                        : ""} */}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Adminpayments;
