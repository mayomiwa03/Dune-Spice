import { TouchSection } from "./style";
import img1 from "../imgs/GIT1.png";
import img2 from "../imgs/GIT2.png";
import img3 from "../imgs/GIT3.png";

const Touch = () => {
  return (
    <TouchSection>
      <div className="textSide">
        <div className="title">
          <h1>Get in Touch</h1>
          <p>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        <div className="contact">
          <div className="cl">
            <div className="icon">
              <img src={img1} alt="" />
            </div>
            <p>+91 99999 99999</p>
          </div>{" "}
          <div className="cl">
            <div className="icon">
              <img src={img2} alt="" />
            </div>
            <p>info.lakhanispices@gmail.com</p>
          </div>{" "}
          <div className="cl">
            <div className="icon">
              <img src={img3} alt="" />
            </div>
            <p>
              Near, Block "E" , Shop No. 448 Sumel 11, BAPS Cir, Shahibag,
              Ahmedabad, Gujarat 380004
            </p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <form>
          <div className="row">
            <div className="input-box">
              <div>
                <label>First Name</label>
              </div>
              <input type="text" placeholder="Enter First Name" />
            </div>

            <div className="input-box">
              <div>
                <label>Last Name</label>
              </div>
              <input type="text" placeholder="Enter Last Name" />
            </div>
          </div>

          <div className="input-box">
            <div>
              <label>Email Address</label>
            </div>
            <input type="email" placeholder="Enter Email Address" />
          </div>

          <div className="input-box">
            <div>
              <label>Message..</label>
            </div>
            <textarea type="text" placeholder="Type Your Message"></textarea>
          </div>

          <button type="submit">Send Message..</button>
        </form>
      </div>
    </TouchSection>
  );
};

export default Touch;
