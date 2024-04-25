import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import test from "./imgs/test.jpg";
import { Link } from "react-router-dom";
import "./style/products.scss";
import { useState } from "react";
import NoProducts from "./NoProducts";

export default function TrendingProducts() {
    let [thereArePros,setTherArePros] = useState(false);
    if (!thereArePros){
        return(
            <NoProducts/>
        )
    }
  return (
    <div className="products new-arrival">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs mt-4">
        <div className="product">
          <div className="img position-relative">
            <img src={test} alt="product" className="w-100" />
            <div className="more position-absolute">
              <div className="add-to-whishlist">
                <FontAwesomeIcon icon="fa-regular fa-heart" />
              </div>
              <div className="quick-view">
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
            <Link to={"/"}>Product name</Link>
            <div className="price">
              <span className="before-discount">$150.00</span>
              <span className="after-discount">$110.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs mt-4">
        <div className="product">
          <div className="img position-relative">
            <img src={test} alt="product" className="w-100" />
            <div className="more position-absolute">
              <div className="add-to-whishlist">
                <FontAwesomeIcon icon="fa-regular fa-heart" />
              </div>
              <div className="quick-view">
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
            <Link to={"/"}>Product name</Link>
            <div className="price">
              <span className="before-discount">$150.00</span>
              <span className="after-discount">$110.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
