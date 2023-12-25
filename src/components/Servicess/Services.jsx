import "./Services.css";
import servi from "../../assets/webLap.png";
const Services = () => {
  return (
    <div className="Services text-center py-5">
      <div className="container">
        <h1 className="pb-5">Services</h1>
        <div className="row mb-5">
          <div className="col-lg-12 mb-5">
            <div className="services-item py-5">
              <img src={servi} alt="sor" className="photo-ser" />
            </div>
            <div className="serice-decs ">
              <h2>Web design</h2>
              <p>
                I can program the front end of your site with the highest
                efficiency using the latest technologies
              </p>
              <div className="d-flex justify-content-between">
                <button>
                  <a href="mailto:Ali.shbat96@gmail.com">Contact</a>
                </button>
                <button>
                  <a href="https://github.com/AliShbat">See Project</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 mb-5">
            <div className="services-item py-5">
              <img src={servi} alt="sor" className="photo-ser" />
            </div>
            <div className="serice-decs1">
              <h2>Web design</h2>
              <p>
                I can program the front end of your site with the highest
                efficiency using the latest technologies
              </p>
              <div className="d-flex justify-content-between">
                <button>
                  <a href="mailto:Ali.shbat96@gmail.com">Contact</a>
                </button>
                <button>
                  {" "}
                  <a href="https://github.com/AliShbat">See Project</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
