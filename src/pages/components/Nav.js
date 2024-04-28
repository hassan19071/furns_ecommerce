import { Link, NavLink, useParams } from "react-router-dom";
import logo from "./imgs/_images_logo_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/nav.scss";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import CartSide from "./CartSide";
import MobileUserLinks from "./MobileUserLinks";
import SettingsInMobile from "./SettingsInMobile";
import MobileNavLinks from "./MobileNavLinks";

export default function Nav() {
  let [navSectionsHidden, setNavSectionHidden] = useState({
    search: false,
    userShopping: false,
    cartSide: false,
    settings: false,
    mobileLinks: false,
  });

  let params = useParams();

  useEffect(() => {
    setNavSectionHidden({
      search: false,
      userShopping: false,
      cartSide: false,
      settings: false,
      mobileLinks: false,
    });
  }, [params]);

  function handleSearch() {
    setNavSectionHidden({
      ...navSectionsHidden,
      search: !navSectionsHidden.search,
    });
  }
  function handleCartSide() {
    setNavSectionHidden({
      ...navSectionsHidden,
      cartSide: !navSectionsHidden.cartSide,
    });
  }
  function handleSettings() {
    setNavSectionHidden({
      ...navSectionsHidden,
      settings: !navSectionsHidden.settings,
    });
  }
  function handleUserShoppingIcons() {
    setNavSectionHidden({
      ...navSectionsHidden,
      userShopping: !navSectionsHidden.userShopping,
    });
  }
  function handleMobileLinks() {
    setNavSectionHidden({
      ...navSectionsHidden,
      mobileLinks: !navSectionsHidden.mobileLinks,
    });
  }
  if (
    navSectionsHidden.search ||
    navSectionsHidden.settings ||
    navSectionsHidden.cartSide ||
    navSectionsHidden.mobileLinks
  ) {
    document.body.style.height = "100vh ";
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.height = "fit-content";
    document.body.style.overflowY = "visible";
  }
  return (
    <div className="header">
      <div className="top-head d-lg-block d-none">
        <div className="container px-lg-5">
          <div className="top-head-content d-flex align-items-center justify-content-between">
            <div className="welcome-msg">Default Welcome Message</div>
            <div className="settings d-flex align-items-center ">
              <div className="langs">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="active dropdown-item">English</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">العربيه</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">Italiano</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">Francais</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="currency">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Currency
                  </button>
                  <ul
                    className=" dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="active dropdown-item">$ - USD</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">€ - EUR</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">£ - POUND </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">₣ - FRANC</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar py-lg-4 py-2">
        <div className="container px-lg-5">
          <div className="navbar-content w-100 d-flex align-items-center justify-content-between">
            <div className="burger-icon d-lg-none" onClick={handleMobileLinks}>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="icons">
              <ul className="mb-0 list-unstyled d-flex">
                <li className="borderr">
                  <span onClick={handleSearch}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                  </span>
                </li>
                <li className="borderr d-none d-lg-block">
                  {" "}
                  <span onClick={handleUserShoppingIcons}>
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </span>
                  <div
                    className={
                      navSectionsHidden.userShopping
                        ? "user-shopping drob-links active"
                        : "user-shopping drob-links"
                    }
                  >
                    <Link to={"/signin"}>Sign in</Link>
                    <Link to={"/cart"}>Cart</Link>
                    <Link to={"/wishlist"}>Wishlist</Link>
                    <Link to={"/compare"}>Compare</Link>
                  </div>
                </li>
                <li className="d-none d-lg-block">
                  <span onClick={handleCartSide}>
                    <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />{" "}
                    <span className="num">1</span>
                  </span>
                </li>
                <li className="d-lg-none">
                  <span onClick={handleSettings}>
                    <FontAwesomeIcon icon="fa-solid fa-gear" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-links d-none d-lg-block">
        <div className="container">
          <div className="links d-flex justify-content-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="">
              Home Furniture <FontAwesomeIcon icon="fa-solid fa-angle-down" />
              <div className="drob-links">
                <NavLink to={"/collection/bedroom"}>Bedroom</NavLink>
                <NavLink to={"/collection/dining"}>Dining</NavLink>
                <NavLink to={"/collection/living"}>Living</NavLink>
              </div>
            </NavLink>
            <NavLink to="">
              Office Furniture <FontAwesomeIcon icon="fa-solid fa-angle-down" />
              <div className="drob-links">
                <NavLink to={"/collection/lounge"}>Lounge</NavLink>
                <NavLink to={"/collection/office-chair"}>Office Chair</NavLink>
                <NavLink to={"/collection/office-table"}>Office Table</NavLink>
              </div>
            </NavLink>
            <NavLink to="">
              Hospital Furniture{" "}
              <FontAwesomeIcon icon="fa-solid fa-angle-down" />
              <div className="drob-links">
                <NavLink to={"/collection/hospital-bed"}>Hospital Bed</NavLink>
                <NavLink to={"/collection/hospital-utility"}>
                  Hospital Utility
                </NavLink>
              </div>
            </NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
      {navSectionsHidden.search && <SearchBar handleSearch={handleSearch} />}
      {navSectionsHidden.cartSide && (
        <CartSide handleCartSide={handleCartSide} />
      )}
      <MobileUserLinks />
      {navSectionsHidden.settings && (
        <SettingsInMobile handleSettings={handleSettings} />
      )}
      {navSectionsHidden.mobileLinks && (
        <MobileNavLinks handleMobileLinks={handleMobileLinks} />
      )}
    </div>
  );
}
