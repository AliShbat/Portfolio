import { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
// import {FaBars} from "react-icons/fa"

const Header = () => {
  const [click, setClick] = useState(false);
  const item = () => {
    setClick(!click);
  };
  return (
    <div className="Header-section sticky sticky-top">
      <div className="container">
        <div className="nav-item d-flex justify-content-between p-3">
          <h3>A.Sh</h3>

          <div className={click ? "nav-list " : "nav-list click"}>
            <ul>
              <li>
                <span>Home</span>
              </li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
            </ul>
          </div>
          {/*  <button className="nav-list btn">Contact</button> */}
          <div className="bars" onClick={item}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
