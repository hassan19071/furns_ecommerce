import "./style/cart-products.scss";
import { Link } from "react-router-dom";
import img from "../components/imgs/test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NoProducts from "./NoProducts";
export default function WishlistProducts() {
  // eslint-disable-next-line
  let [cartProducts, setCArtProducts] = useState(false);

  return (
    <div className="cart-products wishlist-products py-5">
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
                    <th>add to cart</th>
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
                      <div className="add-to-cart">
                        <button type="button">Add to Cart</button>
                      </div>
                    </td>
                    <td>
                      <div className="actions d-flex justify-content-center">
                        <div className="delete ms-2">
                          <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <NoProducts msg={"There are no products in your wishlist!"} />
        )}
      </div>
    </div>
  );
}
