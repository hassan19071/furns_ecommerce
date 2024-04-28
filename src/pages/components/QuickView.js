import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./imgs/test.jpg";
import img2 from "./imgs/testt.jpg";
import "./style/quick-view.scss";
import { useState } from "react";

export default function QuickView({ handleQuickView }) {
  let [mainImg, setMainImg] = useState(img);

  function handleImg(e) {
    setMainImg(e.target.src);
  }
  return (
    <div
      className="quick-views"
      onClick={(e) => {
        if (e.target.id !== "product-details") {
          handleQuickView();
        }
      }}
    >
      <div className="container px-lg-5 py-3">
        <div
          className="product-detailss py-4"
          id="product-details"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="row">
            <div className="col-md-4">
              <div className="imgs">
                <div className="main-img">
                  <img src={mainImg} alt="img" className="w-100" />
                </div>
                <div className="other d-flex justify-content-between mt-4">
                  <img src={img2} alt="img" onClick={handleImg} />
                  <img src={img} alt="img" onClick={handleImg} />
                  <img src={img2} alt="img" onClick={handleImg} />
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-lg-0 mt-4">
              <div className="details">
                <div className="name">
                  <h5>Product Name</h5>
                </div>
                <div className="price">
                  <del>$150.00</del> <span>$123.99</span>
                </div>
                <div className="des">
                  <p className="my-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia,
                  </p>
                </div>
                <div className="selects">
                  <div className="size">
                    <label>Size</label>
                    <select>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div className="color mt-4">
                    <label>Color</label>
                    <select>
                      <option>Red</option>
                      <option>Blue</option>
                      <option>Black</option>
                      <option>White</option>
                    </select>
                  </div>
                  <div className="qty my-4 d-flex justify-content-start align-items-center">
                    <div className="minus">
                      <FontAwesomeIcon icon="fa-solid fa-minus" />
                    </div>
                    <div className="num">2</div>
                    <div className="plus me-2">
                      <FontAwesomeIcon icon="fa-solid fa-plus" />
                    </div>
                    <button type="button">Add to Cart</button>
                  </div>
                  <div className="adds d-flex">
                    <div className="add-wishlist me-4">
                      <FontAwesomeIcon icon="fa-regular fa-heart" /> Add to
                      Wishlist
                    </div>
                    <div className="add-compare">
                      <FontAwesomeIcon icon="fa-solid fa-code-compare" /> Add to
                      Compare
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
