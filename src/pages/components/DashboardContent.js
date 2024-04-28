import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./style/dashboard.scss";
import NewAddress from "./NewAddress";

export default function DashboardContent() {
  // eslint-disable-next-line
  let [active, setActive] = useState(3);
  let [loading, setLoading] = useState(false);
  let [address, setAddress] = useState(false);
  function handleSignin(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  function handleActivePros(index) {
    setActive(index);
  }

  function handleNewAddress() {
    setAddress(!address);
  }

  return (
    <div className="dashboard py-5">
      {address && <NewAddress handleNewAddress={handleNewAddress} />}
      <div className="container py-2 px-lg-5">
        <div className="content">
          <div className="row">
            <div className="col-md-3">
              <div className="personal-settings">
                <ul className="list-unstyled d-flex flex-column">
                  <li
                    className={active === 0 ? "active" : ""}
                    onClick={() => {
                      handleActivePros(0);
                    }}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-gauge-high"
                      className="me-1"
                    />{" "}
                    Dashboard
                  </li>
                  <li
                    className={active === 1 ? "active" : ""}
                    onClick={() => {
                      handleActivePros(1);
                    }}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-bag-shopping"
                      className="me-1"
                    />{" "}
                    Orders
                  </li>
                  <li
                    className={active === 2 ? "active" : ""}
                    onClick={() => {
                      handleActivePros(2);
                    }}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-address-card"
                      className="me-1"
                    />{" "}
                    Address
                  </li>
                  <li
                    className={active === 3 ? "active" : ""}
                    onClick={() => {
                      handleActivePros(3);
                    }}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-gear" className="me-1" />{" "}
                    Settings
                  </li>
                  <li className={active === 4 ? "active" : ""}>
                    <FontAwesomeIcon
                      icon="fa-solid fa-right-from-bracket"
                      className="me-1"
                    />
                    Logout
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 mt-md-0 mt-4">
              <div className="details">
                {active === 0 && (
                  <div>
                    <h4>Dashboard</h4>
                    <div className="hello">
                      Hello, <span>Hassan</span>
                    </div>
                    <p className="mb-0">
                      From your account dashboard. you can easily check & view
                      your recent orders, manage your shipping and billing
                      addresses and edit your password and account details.
                    </p>
                  </div>
                )}
                {active === 1 && (
                  <div>
                    <h4>Orders</h4>
                    <div className="orders">You have no orders!</div>
                  </div>
                )}
                {active === 2 && (
                  <div>
                    <div className="d-flex justify-content-between align-items-center border-el">
                      <h4 className="pb-0">Address</h4>
                      <button className="add" onClick={handleNewAddress}>
                        Add
                      </button>
                    </div>
                    <div className="orders">You have no saved address!</div>
                  </div>
                )}
                {active === 3 && (
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>Address</h4>
                    </div>
                    <div className="personal-info">
                      <h2>Personal Info</h2>
                      <form onSubmit={handleSignin}>
                        <div className="row">
                          <div className="col-12">
                            <label>Full Name</label>
                            <input type="text" className="w-100" />
                          </div>
                          <div className="col-12 mt-4">
                            <label>Email</label>
                            <input
                              type="email"
                              value="example@demo.com"
                              className="w-100"
                            />
                          </div>
                          <div className="col-12 mt-4">
                            <label>Phone Number</label>
                            <input type="text" className="w-100" />
                          </div>
                          <h2 className="mt-4">Password Update</h2>
                          <div className="col-12 mt-2">
                            <label>Cuurent Password</label>
                            <input type="password" className="w-100" />
                          </div>
                          <div className="col-md-6 mt-4">
                            <label>New Password</label>
                            <input type="password" className="w-100" />
                          </div>
                          <div className="col-md-6 mt-4">
                            <label>Confirm Password</label>
                            <input type="password" className="w-100" />
                          </div>
                          <div className="col-12 mt-4">
                            <button
                              type="submit"
                              className="d-flex align-items-center justify-content-center w-100 mt-2"
                            >
                              Save Changes{" "}
                              {loading && (
                                <div
                                  className="spinner-border ms-2"
                                  role="status"
                                >
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              )}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
