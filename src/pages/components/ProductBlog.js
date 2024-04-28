import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import test from "./imgs/test.jpg";
import "./style/product.scss";
import QuickView from "./QuickView";
import { useState } from "react";
export default function ProductBlog() {
  let [quickView, setQuickView] = useState(false);

  function handleQuickView() {
    setQuickView(!quickView);
  }

  return (
    <>
      {quickView && <QuickView handleQuickView={handleQuickView} />}
      <div className="product">
        <div className="img position-relative">
          <img src={test} alt="product" className="w-100" />
          <div className="more position-absolute">
            <div className="add-to-whishlist">
              <FontAwesomeIcon icon="fa-regular fa-heart" />
            </div>
            <div className="quick-view" onClick={handleQuickView}>
              <FontAwesomeIcon icon="fa-regular fa-eye" />
            </div>
            <div className="add-to-compare">
              <FontAwesomeIcon icon="fa-solid fa-code-compare" />
            </div>
          </div>
          <div className="add-to-cart position-absolute">
            <button className="button" type="button">
              <FontAwesomeIcon icon="fa-solid fa-cart-plus" /> Add To Cart
            </button>
          </div>
        </div>
        <div className="text text-center">
          <Link to={"/product/product-details"}>Product name</Link>
          <div className="price">
            <span className="before-discount">$150.00</span>
            <span className="after-discount">$110.00</span>
          </div>
        </div>
      </div>
    </>
  );
}
