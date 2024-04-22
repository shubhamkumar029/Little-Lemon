import FooterImg from "../images/logos/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>SITEMAP</h4>
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/about">
              About
            </Link>
            <Link className="block" to="/menu">
              Menu
            </Link>
            <Link className="block" to="/reserve">
              Reserve
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
              54 London Wall Street
              <br />
              Norway, NW 50987
            </address>
            <a className="footer-block" href="tel:+568385578967">
              +56-838-557-8967
            </a>
            <br />
            <a className="footer-block" href="mailto:littlelemon@shubham.com">
              littlelemon@shubham.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2023 The Little Lemon Project.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
