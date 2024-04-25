import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/mobile-user-links.scss";

export default function MobileUserLinks() {
  return (
    <div className="mobile-user-links d-lg-none position-fixed bottom-0 start-0 w-100 bg-dark text-white">
      <div className="container text-center">
        <div className="links d-flex justify-content-between">
          <Link to={"/whishlist"}>
            <FontAwesomeIcon icon="fa-solid fa-heart" />
            <span>Whishlist</span>
          </Link>
          <Link to={"/compare"}>
            <FontAwesomeIcon icon="fa-solid fa-code-compare" />
            <span>Compare</span>
          </Link>
          <Link to={"/"}>
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <span>Home</span>
          </Link>
          <Link to={"/cart"} className="position-relative">
            <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
            <span>Cart</span> <span className="num position-absolute">1</span>
          </Link>
          <Link to={"/signin"}>
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <span>Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
