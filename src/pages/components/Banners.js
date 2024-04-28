import { Link } from "react-router-dom";
import "./style/banners.scss";

export default function Banners() {
  return (
    <div className="banners py-5">
      <div className="container px-lg-5">
        <div className="row">
          <div className="col-lg-6 mt-4">
            <div className="banner">
              <Link to={"/shop"} className="left">
                <h3>Sale Furniture For Summer</h3>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="banner">
              <Link to={"/shop"} className="right">
                <h3>Office Chair For Best Offer</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
