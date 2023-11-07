import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // console.log(toggle)
//   console.log(window.innerWidth);
    if(window.innerWidth>500 && !toggle){
      setToggle(true);
    }

  return (
    <div className="header">
      <nav className="navbar">
        <h3>Mamoon</h3>
        <ul>
          {toggle && (
            <>
              <li className="link">
                <a href="#/">Home</a>
              </li>
              <li className="link">
                <a href="#about">About</a>
              </li>
              <li className="link">
                <a href="#project">Project</a>
              </li>
              <li className="link">
                <a href="#experience">Experience</a>
              </li>
            </>
          )}

          <div
            className="humberger"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
