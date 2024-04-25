import { Link } from "react-router-dom";
import ImgOne from "./imgs/slider-1.png";
import ImgTwo from "./imgs/slider-2.png";
import "./style/main-hero.scss";

export default function MainHero() {
  return (
    <div className="main-hero">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="container px-lg-5">
            <div className="carousel-item active">
              <div className="row align-items-center flex-column-reverse flex-lg-row">
                <div className="col-lg-6">
                  <div className="text pe-lg-3">
                    <h3>New Products</h3>
                    <h1>Flexible Chair</h1>
                    <p className="pe-lg-5">
                      Torem ipsum dolor sit amet, consectetur adipisicing
                      elitsed do eiusmo tempor incididunt ut labore et dolore
                      magna
                    </p>
                    <Link to="/shop">Shop Now</Link>
                  </div>
                </div>
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="img text-lg-end text-center">
                    <img src={ImgOne} alt="slider img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center flex-column-reverse flex-lg-row">
                <div className="col-lg-6">
                  <div className="text pe-lg-3">
                    <h3>Best Seller</h3>
                    <h1>Creative Sofa</h1>
                    <p className="pe-lg-5">
                      Torem ipsum dolor sit amet, consectetur adipisicing
                      elitsed do eiusmo tempor incididunt ut labore et dolore
                      magna
                    </p>
                    <Link to="/shop">Shop Now</Link>
                  </div>
                </div>
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="img text-lg-end text-center">
                    <img src={ImgTwo} alt="slider img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev d-lg-inline d-none"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-lg-inline d-none"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
