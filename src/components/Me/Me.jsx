import "./Me.css";
import ali from "../../assets/aloosh.jpg"
const Me = () => {
  return (
    <div className="Me-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 left pb-3">
            <h3>Hi, I'm Ali Shbat</h3>
            <p>
              I'm a <span>Front-End Developer</span>
            </p>
            <p className="pt-5">
              <span className="italic">High level
              experience in web design, development <br /> knowladge
              ,and problem solving</span>
            </p>
            <button className="btnn">Download CV</button>
          </div>
          <div className="col-lg-7 col-md-12 m-auto pt-4">
            <img className="img-fluid" src={ali} alt="Me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
