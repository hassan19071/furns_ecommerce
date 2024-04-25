import { Link } from "react-router-dom";
import logo from "./imgs/_images_logo_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/settings-in-mobile.scss";

export default function SettingsInMobile({ handleSettings }) {
  return (
    <div
      className="settings-in-mobile d-lg-none"
      onClick={(e) => {
        if (e.target.id !== "settings-mobile") {
          handleSettings();
        }
      }}
    >
      <div
        className="settings-content d-flex flex-column justify-content-between"
        id="settings-mobile"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="top">
          <div className="head d-flex justify-content-between">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} width={"90px"} alt="logo" />
              </Link>
            </div>
            <div className="x">
              <button
                type="button"
                onClick={handleSettings}
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="settings">
            <div className="setting mt-4">
              <p>Language</p>
              <select>
                <option>English</option>
                <option>العربيه</option>
                <option>Italiano</option>
                <option>Francais</option>
              </select>
            </div>
            <div className="setting mt-3">
              <p>Currency</p>
              <select>
                <option>$ - USD</option>
                <option>€ - EUR</option>
                <option>£ - POUND </option>
                <option>₣ - FRANC</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bottom text-center">
          <p>
            <FontAwesomeIcon icon="fa-solid fa-phone" /> +201152205570
          </p>
          <p>&copy; 2021, Furns. Made With &hearts; by Hassan</p>
        </div>
      </div>
    </div>
  );
}
