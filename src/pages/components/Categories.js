import { Link } from "react-router-dom";
import category1 from "./imgs/category1.jpg";
import category2 from "./imgs/category2.jpg";
import category3 from "./imgs/category3.jpg";
import category4 from "./imgs/category4.jpg";
import category5 from "./imgs/category5.png";
import "./style/categories.scss";

export default function Categories() {
  return (
    <div className="categories py-5">
      <div className="container px-lg-5 py-2">
        <div className="row justify-content-center">
          <div className="col-lg col-md-4 col-6 mt-4">
            <div className="category text-center">
              <Link to={"/collection/dining"}>
                <div className="img">
                  <img src={category1} alt="category" />
                </div>
                <p className="mb-0 mt-3">Dining</p>
              </Link>
            </div>
          </div>
          <div className="col-lg col-md-4 col-6 mt-4">
            <div className="category text-center">
              <Link to={"/collection/dining"}>
                <div className="img">
                  <img src={category2} alt="category" />
                </div>
                <p className="mb-0 mt-3">Lounge</p>
              </Link>
            </div>
          </div>
          <div className="col-lg col-md-4 col-6 mt-4">
            <div className="category text-center">
              <Link to={"/collection/dining"}>
                <div className="img">
                  <img src={category3} alt="category" />
                </div>
                <p className="mb-0 mt-3">Office Chair</p>
              </Link>
            </div>
          </div>
          <div className="col-lg col-md-4 col-6 mt-4">
            <div className="category text-center">
              <Link to={"/collection/dining"}>
                <div className="img">
                  <img src={category4} alt="category" />
                </div>
                <p className="mb-0 mt-3">Bedroom</p>
              </Link>
            </div>
          </div>
          <div className="col-lg col-md-4 col-6 mt-4">
            <div className="category text-center">
              <Link to={"/collection/dining"}>
                <div className="img">
                  <img src={category5} alt="category" />
                </div>
                <p className="mb-0 mt-3">Living</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
