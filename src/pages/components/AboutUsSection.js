import aboutImg1 from "../components/imgs/_images_about_01.jpg";
import aboutImg2 from "../components/imgs/_images_about_02.jpg";
import "./style/about-section.scss";

export default function AboutUsSection() {
  return (
    <div className="about-us py-5">
      <div className="content py-4 px-3">
        <div className="head">
          Furns is a global furniture destination for somethings. We sell
          cutting-edge furniture and offer a wide variety of fashion-related
          content.
        </div>
        <div className="row mt-4">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="img">
              <img className="w-100" src={aboutImg1} alt="about" />
            </div>
            <div className="text">
              <h5>OUR STORES</h5>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit
                amet conse ctetur adipisicing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="img">
              <img className="w-100" src={aboutImg2} alt="about" />
            </div>
            <div className="text">
              <h5>OUR MISSION</h5>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit
                amet conse ctetur adipisicing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
