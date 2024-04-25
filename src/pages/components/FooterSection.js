import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style/footer-section.scss";

export default function FooterSection(){
    return(
        <div className="footer">
            <div className="footer-links">
                <div className="container px-lg-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-4">
                            <div className="links">
                                <h3>About us</h3>
                                <p>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <div className="social-links">
                                    <a href="https://www.facebook.com"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                                    <a href="https://www.x.com"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                                    <a href="https://www.linkeding.com"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
                                    <a href="https://www.youtube.com"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4">
                            <div className="links">
                                <h3>Information</h3>
                                <div className="li">
                                    <Link to={"/"}>About Us</Link>
                                    <Link to={"/"}>Manufactures</Link>
                                    <Link to={"/"}>Tracking Order</Link>
                                    <Link to={"/"}>Privacy & Policy</Link>
                                    <Link to={"/"}>Terms & Conditions</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4">
                            <div className="links">
                                <h3>My Account</h3>
                                <div className="li">
                                    <Link to={"/"}>Login</Link>
                                    <Link to={"/"}>My Cart</Link>
                                    <Link to={"/"}>Whishlist</Link>
                                    <Link to={"/"}>Compare</Link>
                                    <Link to={"/"}>My Account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4">
                            <div className="links">
                                <h3>newsletter</h3>
                                <form>
                                    <input type="email" placeholder="Enter Your Email" required />
                                    <button type="submit"><FontAwesomeIcon icon="fa-solid fa-paper-plane" /> Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot">
                <div className="container px-lg-5">
                    <div className="text-center">
                        <p className="mb-0">&copy; 2024, Furns. Made With &hearts; by Hassan.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}