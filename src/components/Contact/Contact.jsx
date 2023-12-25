import "./Contact.css";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact text-center py-5">
      <div className="container">
        <h1>Contact</h1>
        <p>Lets Say Hi!</p>
        <div className="row">
          <div className="col-lg-12 col1  ">
            <div className="icons">
              <i>
                <CgMail />{" "}
              </i>
              <a href="mailto:Ali.shbat96@gmail.com">Ali.shbat96@gmail.com</a>
            </div>
            <div className="icons">
              <i>
                <FaGithub />{" "}
              </i>
              <a href="https://github.com/AliShbat">Ali Shbat</a>{" "}
            </div>
            <div className="icons">
              <i>
                <FaFacebook />{" "}
              </i>
              <a href="https://www.facebook.com/ali.shbat.353">Ali Shbat</a>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col1">
            <div className="icons">
              <i>
                <FaWhatsapp />{" "}
              </i>
              <a href="https://wa.me/963934999036">+963 934999036</a>
            </div>
            <div className="icons">
              <i>
                <SiMicrosoftoutlook />{" "}
              </i>
              <a href="https://Alishbat13@hotmail.com">
                Alishbat13@hotmail.com
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col1 pb-5">
            <div className="icons">
              <i>
                <CgMail />{" "}
              </i>
              <a href="https://github.com/AliShbat">AliShbat</a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
