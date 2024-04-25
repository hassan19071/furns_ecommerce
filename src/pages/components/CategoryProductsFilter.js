import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import test from "./imgs/test.jpg";
import { Link, useParams } from "react-router-dom";
import "./style/products.scss";
import { useEffect, useState } from "react";
import NoProducts from "./NoProducts";


let categoriesNames = ["dining","living","office-table","office-chair","lounge","bedroom","hospital-bed","hospital-utility"];
export default function CategoryProductsFilter() {
  let [thereArePros, setTherArePros] = useState(false);
  let [cats,setCats] = useState(categoriesNames);
  let categoryName = useParams();

  useEffect(()=>{
    if (cats.includes(categoryName.categoryName)){
        setTherArePros(true);
    }
  },[categoryName, cats])

  return (
    <div className="products-filter py-5">
      <div className="container px-lg-5 py-3">
        {thereArePros && (
          <>
            <div className="filter d-flex align-items-center justify-content-between">
              <div className="products-number">Showing {"8"} Products</div>
              <div className="sort d-flex align-items-center">
                <span>Sort by</span>
                <select className="ms-2">
                  <option>Relevance</option>
                  <option>Name (A - Z)</option>
                  <option>Name (Z - A)</option>
                  <option>Price (Low - High)</option>
                  <option>Price (High - Low)</option>
                </select>
              </div>
            </div>
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
                          <FontAwesomeIcon icon="fa-solid fa-cart-plus" /> Add
                          To Cart
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
                          <FontAwesomeIcon icon="fa-solid fa-cart-plus" /> Add
                          To Cart
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
            </div>{" "}
          </>
        )}
        {!thereArePros && <NoProducts />}
      </div>
    </div>
  );
}
