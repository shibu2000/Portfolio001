import React, { useState, useEffect } from "react";
import "../Stylesheets/Header.css";
import { FaAngleLeft, FaAngleRight, FaBars } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

const NavLinks = () => {
  return (
    <>
      <a href="#biography">Bio</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#get-in-touch">Contact</a>
    </>
  );
};

const NavLinks02 = ({ toggleNavbar }) => {
  return (
    <Fade direction="right" cascade damping={0.1}>
      <a href="#biography" onClick={toggleNavbar}>
        Bio
      </a>
      <a href="#education " onClick={toggleNavbar}>
        Education
      </a>
      <a href="#skills" onClick={toggleNavbar}>
        Skills
      </a>
      <a href="#projects" onClick={toggleNavbar}>
        Projects
      </a>
      <a href="#get-in-touch" onClick={toggleNavbar}>
        Contact
      </a>
    </Fade>
  );
};

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleNavbar = () => {
    isMenu ? setIsMenu((m) => false) : setIsMenu((m) => true);
  };

  return (
    <nav className="lg:flex md:flex lg:flex-row md:flex-row flex-col justify-around items-center fixed top-0 w-full z-50 py-3">
      {/* left-side */}
      <div className={`font-bold text-xl text-white flex justify-around`}>
        <div>
          <FaAngleLeft className="inline-block text-orange-500" />
          <RxSlash className="inline-block" />
          <FaAngleRight className="inline-block text-green-500" />
          <a
            href="#home"
            onClick={() => {
              if (isMenu) {
                setIsMenu((m) => false);
              }
            }}
            className="text-decoration-none"
          >
            Shibu Dhara
          </a>
        </div>
        <button className="lg:hidden md:hidden block" onClick={toggleNavbar}>
          {isMenu ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
      {/* Right Side */}
      <div
        className={`space-x-5 font-bold text-xl text-slate-50 items-center lg:block md:block hidden`}
      >
        <NavLinks />
      </div>
      {isMenu && (
        <>
          <hr className="my-4" />
          <div
            direction="right"
            cascade
            id="nav-items"
            className={`lg:hidden md:hidden font-bold text-xl flex flex-col items-center overflow-hidden text-slate-50 gap-2`}
          >
            <NavLinks02 toggleNavbar={toggleNavbar} />
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
