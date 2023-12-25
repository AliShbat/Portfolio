import "./about.css";
import about from "../../assets/nubelson-fernandes-gTs2w7bu3Qo-unsplash.jpg";
const About = () => {
  return (
    <div className="About-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h1 className="text-center pb-3">About me</h1>
            <img className="img-fluid" src={about} alt="" />
          </div>
          <div className="col-lg-3 right">
            <div className="About-item">
              <div className="About-first ">
                <h3>web design</h3>
                <h3>90%</h3>
              </div>
              <div className="botom1"></div>
            </div>
            <div className="About-item">
              <div className="About-first ">
                <h3>Ui / UX</h3>
                <h3>60%</h3>
              </div>
              <div className="botom2"></div>
            </div>
          </div>
        </div>
        <div className="row experienc">
          <div className="col-lg-4 col">
            <div className="fs-lg-3 fw-bold text-center first">
              <h4>02</h4>
              <p className="d-inline ">Years</p>
              <p>experience</p>
            </div>
          </div>
          <div className="col-lg-4 col">
            <div className="fs-lg-3 fw-bold text-center second">
              <h4>6+</h4>
              <p className="d-inline ">Projects</p>
              <p>web design</p>
            </div>
          </div>
          <div className="col-lg-4 col">
            <div className="fs-lg-3 fw-bold text-center thired">
              <h4>2+</h4>
              <p className="d-inline ">Projects</p>
              <p>UX / UI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
