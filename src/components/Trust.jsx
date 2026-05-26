import { TrustSection } from "./style";
import img1 from "../imgs/trust1.png";
import img2 from "../imgs/trust2.png";
import img3 from "../imgs/trust3.png";
import img4 from "../imgs/trust4.png";
import img5 from "../imgs/trustmain.png";

const Trust = () => {
  return (
    <TrustSection>
      <div className="textSide">
        <h1>we are trusted by more than 5k clients.</h1>
        <div className="trustGrid">
          <div className="trustCard">
            <img src={img1} alt="" />
            <p>premium quality assurance</p>
          </div>
          <div className="trustCard">
            <img src={img2} alt="" />
            <p>Automated machinery</p>
          </div>
          <div className="trustCard">
            <img src={img3} alt="" />
            <p>Best Infrastructure</p>
          </div>
          <div className="trustCard">
            <img src={img4} alt="" />
            <p>Satisfied customers</p>
          </div>
        </div>
      </div>
      <div className="imgSide">
        <img src={img5} alt="" />
      </div>
    </TrustSection>
  );
};

export default Trust;
