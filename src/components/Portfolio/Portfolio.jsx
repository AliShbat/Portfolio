import "./Portfolio.css";
import Ecommerce from "../../assets/Ecommerce-app-with-React.jpg";
import todo from "../../assets/todo.png";
import filter from "../../assets/filter Search.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const Portfolio = () => {
  return (
    <div className="portfolio pt-5 text-center">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="">
          <p className="fs-9">
            Here you can see some of my completed <br /> work in various fields
            ... enjoy
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-sm-12">
            <div className="highlight" /* text-att="See Project" */>
              <img className="img-fluid" src={Ecommerce} alt="eco" />
              <h3>
                <a href="https://alishbat.github.io/E-commerce-website">See Project</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 align">
            <div className="highlight" text-att="See Project">
              <img className="img-fluid" src={todo} alt="eco" />
              <h3>
                <a href="https://alishbat.github.io/ToDoList">See Project</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="highlight" text-att="See Project">
              <img className="img-fluid" src={filter} alt="eco" />
              <h3>
                <a href=" https://alishbat.github.io/Fillter-Search-Bar">See Project</a>
              </h3>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4  col-sm-12">
            <div className="highlight">
              <img className="img-fluid img-project" src={project1} alt="eco" />
              <h3>
                <a href="https://alishbat.github.io/project3">See Project</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 align">
            <div className="highlight" text-att="See Project">
              <img className="img-fluid img-project" src={project2} alt="eco" />
              <h3>
                <a href="https://alishbat.github.io/project2">See Project</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="highlight" text-att="See Project">
              <img className="img-fluid img-project" src={project3} alt="eco" />
              <h3>
                <a href="https://alishbat.github.io/project">See Project</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
