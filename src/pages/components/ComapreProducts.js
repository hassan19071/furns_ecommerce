import "./style/cart-products.scss";
import img from "../components/imgs/test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NoProducts from "./NoProducts";
export default function CompareProducts() {
  // eslint-disable-next-line
  let [cartProducts, setCArtProducts] = useState(true);

  return (
    <div className="cart-products compare-products py-5">
      <div className="container px-lg-5 py-2">
        {cartProducts ? (
          <>
            <div className="table">
              <table class="w-100 text-center">
                <tr className="head">
                  <th>Action</th>
                  <td>
                    <div className="actions d-flex justify-content-center">
                      <div className="delete ms-2">
                        <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                      </div>
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
                <tr>
                  <th>Product</th>
                  <td>
                    <div className="product-img">
                      <img src={img} alt="img" />
                      <h5>Product name</h5>
                    </div>
                  </td>
                  <td>
                    <div className="product-img">
                      <img src={img} alt="img" />
                      <h5>Product name</h5>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Description</th>
                  <td>
                    <p className="mb-0 description">
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit.
                    </p>
                  </td>
                  <td>
                    <p className="mb-0 description">
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  <td>
                    <div className="price">$98.00</div>
                  </td>
                  <td>
                    <div className="price">$98.00</div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Stock</th>
                  <td>
                    <div className="stock">Avaliable</div>
                  </td>
                  <td>
                    <div className="stock">Avaliable</div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Add to Cart</th>
                  <td>
                    <div className="add-to-cart">
                      <button type="button">Add to Cart</button>
                    </div>
                  </td>
                  <td>
                    <div className="add-to-cart">
                      <button type="button">Add to Cart</button>
                    </div>
                  </td>
                </tr>
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
