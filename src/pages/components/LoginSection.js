import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style/user-signin.scss";
import { useState } from "react";

export default function LoginSection() {
  let [msgShown, setMsgShowen] = useState(false);
  let [loading, setLoading] = useState(false);

  function handleSignin(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMsgShowen(true);
      setLoading(false);
    }, 2000);
  }
  function removeMsg() {
    setMsgShowen(false);
  }
  return (
    <div className="login py-5">
      <div className="container px-lg-5 py-5">
        <div className="login-form">
          <form onSubmit={handleSignin}>
            <div className="row">
              <div className="col-12">
                <label>Email *</label>
                <input
                  type="email"
                  value="example@demo.com"
                  className="w-100"
                />
              </div>
              <div className="col-12 mt-4">
                <label>Password *</label>
                <input type="password" value="hassankhaled" className="w-100" />
              </div>
              <div className="col-12 mt-4">
                <button
                  type="submit"
                  className="d-flex align-items-center justify-content-center"
                >
                  Signin{" "}
                  {loading && (
                    <div className="spinner-border ms-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </button>
              </div>
              <div className="col-md-6 mt-4 text-center">
                <Link to={"/signup"} className="create link d-block">
                  create an account
                </Link>
              </div>
              <div className="col-md-6 mt-4 text-center">
                <Link to={"/"} className="forget link d-block">
                  Forget password?
                </Link>
              </div>
            </div>
          </form>
        </div>
        {msgShown && (
          <div className="msg d-flex align-items-center justify-content-between">
            <span>Unidentified customer</span>
            <div className="x" onClick={removeMsg}>
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
