import { Link, NavLink } from "react-router-dom";
import logo from "./imgs/_images_logo_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/mobile-nav-links.scss";

export default function MobileNavLinks({ handleMobileLinks }) {
  return (
    <div
      className="mobile-links d-lg-none"
      onClick={(e) => {
        if (e.target.id !== "links-content") {
          handleMobileLinks();
        }
      }}
    >
      <div
        className="links-content"
        id="links-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="head d-flex justify-content-between">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} width={"90px"} alt="logo" />
            </Link>
          </div>
          <div className="x">
            <button
              onClick={handleMobileLinks}
              type="button"
              class="btn-close"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div className="links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink>
            HOME FURNITURE <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          </NavLink>
          <div className="down">
            <NavLink to={"/collection/bedroom"}>Bedroom</NavLink>
            <NavLink to={"/collection/dining"}>Dining</NavLink>
            <NavLink to={"/collection/living"}>Living</NavLink>
          </div>
          <NavLink>
            Office FURNITURE <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          </NavLink>
          <div className="down">
            <NavLink to={"/collection/lounge"}>Lounge</NavLink>
            <NavLink to={"/collection/office-chair"}>Office Chair</NavLink>
            <NavLink to={"/collection/office-table"}>Office Table</NavLink>
          </div>
          <NavLink>
            Hospital FURNITURE <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          </NavLink>
          <div className="down">
            <NavLink to={"/collection/hospital-bed"}>Hospital Bed</NavLink>
            <NavLink to={"/collection/hospital-utility"}>
              Hospital Utility
            </NavLink>
          </div>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}
