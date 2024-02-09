import React, { useEffect, useRef } from "react";
import "../Stylesheets/Header.css";
import { FaAngleLeft, FaAngleRight, FaBars } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenu, setIsMenu] = React.useState(false);

  const menuRef = useRef();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    if (windowSize.current[0] <= 640) {
      let handler = (e) => {
        console.log("Handler");
        if (!menuRef.current.contains(e.target)) {
          setIsMenu(false);
        }
      };
      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
      };
    } else {
      setIsMenu(true);
    }
  });

  return (
    <header className="px-4 py-1 flex md:flex-row flex-col z-50 text-xl fixed overflow-hidden">
      <div
        className={`font-bold text-xl text-white flex-1 flex justify-around ${
          isMenu ? " border-b" : "border-0"
        } md:border-0 py-2`}
      >
        <div>
          <FaAngleLeft className="inline-block text-orange-500" />
          <RxSlash className="inline-block" />
          <FaAngleRight className="inline-block text-green-500" />
          <Link to="/"> Shibu Dhara</Link>
        </div>
        <button onClick={() => (isMenu ? setIsMenu(false) : setIsMenu(true))}>
          <span className="md:hidden">
            <FaBars />
          </span>
        </button>
      </div>
      <div
        className={`nav-lists py-2 flex-1 ${
          isMenu ? "block" : "hidden"
        } flex flex-col md:flex-row md:justify-end text-center`}
        ref={menuRef}
      >
        <span>
          <Link to="/biography">Bio</Link>
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
