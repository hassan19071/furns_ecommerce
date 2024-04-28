import "./style/cart-products.scss";
import { Link } from "react-router-dom";
import img from "../components/imgs/test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NoProducts from "./NoProducts";
export default function CartProducts() {
  // eslint-disable-next-line
  let [cartProducts, setCArtProducts] = useState(true);

  return (
    <div className="cart-products py-5">
      <div className="container px-lg-5 py-2">
        {cartProducts ? (
          <>
            <div className="table">
              <table className="w-100 text-center">
                <thead>
                  <tr>
                    <th>image</th>
                    <th>Product name</th>
                    <th>price</th>
                    <th>qty</th>
                    <th>total</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to={"/"}>
                        <img src={img} className="w-100" alt="product img" />
                      </Link>
                    </td>
                    <td>
                      <p className="mb-0">Product name</p>
                    </td>
                    <td>
                      <div className="price">
                        <p className="mb-0">233.00</p>
                      </div>
                    </td>
                    <td>
                      <div className="qty d-flex justify-content-center">
                        <div className="minus">
                          <FontAwesomeIcon icon="fa-solid fa-minus" />
                        </div>
                        <div className="num">2</div>
                        <div className="plus">
                          <FontAwesomeIcon icon="fa-solid fa-plus" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="total">
                        <p className="mb-0">1233.00</p>
                      </div>
                    </td>
                    <td>
                      <div className="actions d-flex justify-content-center">
                        <div className="edit">
                          <Link to={"/"}>
                            <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                          </Link>
                        </div>
                        <div className="delete ms-2">
                          <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to={"/"}>
                        <img src={img} className="w-100" alt="product img" />
                      </Link>
                    </td>
                    <td>
                      <p className="mb-0">Product name</p>
                    </td>
                    <td>
                      <div className="price">
                        <p className="mb-0">233.00</p>
                      </div>
                    </td>
                    <td>
                      <div className="qty d-flex justify-content-center">
                        <div className="minus">
                          <FontAwesomeIcon icon="fa-solid fa-minus" />
                        </div>
                        <div className="num">2</div>
                        <div className="plus">
                          <FontAwesomeIcon icon="fa-solid fa-plus" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="total">
                        <p className="mb-0">1233.00</p>
                      </div>
                    </td>
                    <td>
                      <div className="actions d-flex justify-content-center">
                        <div className="edit">
                          <Link to={"/"}>
                            <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                          </Link>
                        </div>
                        <div className="delete ms-2">
                          <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="text-end">
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colSpan={5}>
                      <p className="grand mb-0">
                        Grand total : <span>$2112.00</span>
                      </p>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="cart-procces row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col-sm-8 p-0">
                    <input
                      type="text"
                      placeholder="Enter your coupon code if ypu have one"
                      className="w-100"
                    />
                  </div>
                  <div className="col-sm-4 mt-sm-0 mt-4 p-0">
                    <button type="submit" className="w-100">
                      Apply Coupon
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-6 mt-4 mt-md-0 text-md-end">
                <div>
                  <button className="clear">Clear Cart</button>
                  <button className="checkout ms-md-3 mt-md-3 mt-lg-0">
                    procees to checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <NoProducts msg={"There are no products in your cart!"} />
        )}
      </div>
    </div>
  );
}
