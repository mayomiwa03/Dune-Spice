import { WhySection } from "./style";
import img from "../imgs/whymain.png";
import whyimg1 from "../imgs/why1.png";
import whyimg2 from "../imgs/why2.png";
import whyimg3 from "../imgs/why3.png";
import whyimg4 from "../imgs/why4.png";

const Why = () => {
  return (
    <WhySection>
      <div className="textSide">
        <h1>
          Why choose us <span>&mdash;&mdash; </span>
        </h1>
        <div className="lists">
          <div className="list-item">
            <img src={whyimg1} alt="" />
            <p>
              {" "}
              <span>&bull; </span>Experienced staff and management.
            </p>
          </div>{" "}
          <div className="list-item">
            <img src={whyimg2} alt="" />
            <p>
              {" "}
              <span>&bull; </span>Offering clients competitive quotes.
            </p>
          </div>{" "}
          <div className="list-item">
            <img src={whyimg3} alt="" />
            <p>
              {" "}
              <span>&bull; </span> fulfilling Clients all requirements is our
              main aim.
            </p>
          </div>{" "}
          <div className="list-item">
            <img src={whyimg4} alt="" />
            <p>
              {" "}
              <span>&bull; </span> Delivery on time.
            </p>
          </div>
        </div>
      </div>
      <div className="imgSide">
        <img src={img} alt="" />
      </div>
    </WhySection>
  );
};

export default Why;
