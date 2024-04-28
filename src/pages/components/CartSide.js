import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./imgs/test.jpg";
import "./style/cart-side.scss";
import { useState } from "react";
import NoProducts from "./NoProducts";

export default function CartSide({ handleCartSide }) {
  // eslint-disable-next-line
  let [thereIsProducts, setThereIsProducts] = useState(true);
  return (
    <div
      className="cart-side"
      onClick={(e) => {
        if (e.target.id !== "cart-content") {
          handleCartSide();
        }
      }}
    >
      <div
        className="cart-content d-flex flex-column justify-content-between"
        onClick={(e) => {
          e.stopPropagation();
        }}
        id="cart-content"
      >
        <div className="top">
          <div className="head d-flex justify-content-between align-items-center">
            <div className="logo">
              <h3>Cart</h3>
            </div>
            <div className="x">
              <button
                type="button"
                onClick={handleCartSide}
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
          </div>
          {thereIsProducts ? (
            <>
              <div className="product-details d-flex ">
                <div className="img">
                  <img className="pro-img" src={img} alt="product" />
                </div>
                <div className="details">
                  <div className="title">
                    <h4>New badge product</h4>
                  </div>
                  <div className="color">
                    <span>color</span>
                  </div>
                  <div className="price">
                    <p>
                      1 x <span>$200.99</span>
                    </p>
                    <div className="count">
                      <div className="minus">
                        <FontAwesomeIcon icon="fa-solid fa-minus" />
                      </div>
                      <div className="num">2</div>
                      <div className="plus">
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-details d-flex ">
                <div className="img">
                  <img className="pro-img" src={img} alt="product" />
                </div>
                <div className="details">
                  <div className="title">
                    <h4>New badge product</h4>
                  </div>
                  <div className="color">
                    <span>color</span>
                  </div>
                  <div className="price">
                    <p>
                      1 x <span>$200.99</span>
                    </p>
                    <div className="count">
                      <div className="minus">
                        <FontAwesomeIcon icon="fa-solid fa-minus" />
                      </div>
                      <div className="num">2</div>
                      <div className="plus">
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <NoProducts msg="There is no products!" />
          )}
        </div>
        <div className="bottom text-center">
          <Link to={"/cart"} className="d-flex justify-content-between">
            <span>View Cart</span> <span>$229.00</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
