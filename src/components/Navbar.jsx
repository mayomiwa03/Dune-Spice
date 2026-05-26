import { NavSection } from "./style";
import logo from "../imgs/logo.png";
import hamburger from "../imgs/hamburger.png";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <NavSection>
      <div className="navL">
        <img src={logo} alt="logo image" />
        <p>Dune Spices</p>
      </div>
      <nav className={active ? "active" : ""}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Quality</a>
          </li>
          <li>
            <a href="#">Harvest chart</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className="navR">
        <button>Order Now</button>
        <img onClick={() => setActive(!active)} src={hamburger} alt="" />
      </div>
    </NavSection>
  );
};

export default Navbar;
