import { FooterSection } from "./style";
import logo from "../imgs/logo.png";
import foot1 from "../imgs/location (2).png";
import foot2 from "../imgs/mob.png";
import foot3 from "../imgs/mes.png";

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={logo} alt="" />
            <p>Dune Spices</p>
          </div>
          <div className="center">
            <div>
              <h5>Popular Products</h5>
              <p>
                <span>Coriander seeds</span>
              </p>
              <p>Fennel seeds</p>
              <p>sesame seeds</p>
              <p>flex seeds</p>
            </div>
            <div>
              <h5>quick links</h5>
              <p>
                <span>home</span>
              </p>
              <p>about</p>
              <p>products</p>
              <p>contact us</p>
            </div>
          </div>

          <div className="right">
            <h5>Contact Us</h5>
            <div>
              <img src={foot1} alt="" />
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for
              </p>
            </div>{" "}
            <div>
              <img src={foot2} alt="" />
              <p>
                +91 88888 11111, <span>+91 99999 22222 </span>{" "}
              </p>
            </div>{" "}
            <div>
              <img src={foot3} alt="" />
              <p>info@spices.com</p>
            </div>
          </div>
        </div>
        <div className="btm">
          <p>Copyright &copy; - 2026. Dune Spices. All right reserved.</p>
          <p>
            Developed by{" "}
            <span>
              <a href="#">Mayomiwa.</a>
            </span>
          </p>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
