import React from "react";
import "../Stylesheets/Header.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="px-4 py-3 flex sticky top-0 z-50"
      style={{
        height: "50px",
      }}
    >
      <div className="font-bold text-xl text-white flex-1">
        <FaAngleLeft className="inline-block text-orange-500" />
        <RxSlash className="inline-block" />
        <FaAngleRight className="inline-block text-green-500" />
        <a href="#home"> Shibu Dhara</a>
      </div>
      <div className="nav-lists">
        <span>
          <a href="#biography">Bio</a>
        </span>
        <span>
          <Link to="/education">Education</Link>
        </span>
        <span>
          <Link to="/skills">Skills</Link>
        </span>
        <span>
          <Link to="/projects">Projects</Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
