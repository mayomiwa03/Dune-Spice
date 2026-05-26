import { AboutSection } from "./style";
import about from "../imgs/about.png";
import bg1 from "../imgs/back1.png";
import bg2 from "../imgs/back2.png";

const About = () => {
  return (
    <AboutSection>
      <div className="imgSide">
        <img src={about} alt="" />
        <span className="bg1">
          <img src={bg1} alt="" />
        </span>
        <span className="bg2">
          <img src={bg2} alt="" />
        </span>
      </div>
      <div className="textSide">
        <h3>
          About us <span>&mdash;&mdash; </span>{" "}
        </h3>
        <h1>global spices exporter & supplier</h1>
        <p>
          <span>dune spices Pvt. Ltd.</span> is a leading Manufacturer, Exporter
          and Supplier of SPICES AND OIL SEEDS such as CUMIN SEEDS, SESAME
          SEEDS, FENNEL SEEDS, PEANUTS, and GROUNDNUTS etc. <br /> <br />
          Based in the Spice City of India - UNJHA, We at Sheth Overseas
          directly procure spices and oil seeds from Farmer and process at our
          Manufacturing Unit, which results into pure and clean quality of Final
          products. We always deliver more than expected.
        </p>
        <button>know more</button>
      </div>
    </AboutSection>
  );
};

export default About;
