import { Link } from "react-router-dom";
import img from "../pages/components/imgs/404.png";
export default function NoPageFounded() {
  return (
    <div className="no-page">
      <div
        className="container px-lg-5 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="content text-center">
          <div className="img">
            <img src={img} alt="error page" width={"60%"} />
          </div>
          <h3
            style={{ fontSize: "24px", fontWeight: "bold", marginTop: "20px" }}
          >
            That Page Can’t be found!
          </h3>
          <p style={{ fontSize: "15px", fontWeight: "400" }}>
            It looks like nothing was found at this location.
          </p>
          <Link
            to={"/"}
            style={{
              background: "rgb(255, 112, 4)",
              color: "#fff",
              padding: "8px 15px",
              fontSize: "15px",
            }}
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
