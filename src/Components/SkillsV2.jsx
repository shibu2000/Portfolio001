import React from "react";
import "../Stylesheets/SkillsV2.css";

const SkillsV2 = () => {
  return (
    <section id="skills">
      <div className="heading flex justify-center items-center">
        <div className="line-shape"></div>
        <h1 className="uppercase text-center p-2 md:text-3xl text-orange-300 text-2xl">
          skills
        </h1>
        <div className="line-shape" />
      </div>
      <div className="container md:px-20 md:pt-16 m-auto flex md:justify-center justify-evenly items-center md:space-x-6 flex-wrap">
        <div className="logo">
          <img src="./logo/html5-logo.png" alt="html5" />
        </div>
        <div className="logo">
          <img src="./logo/css-logo.png" alt="css3" />
        </div>
        <div className="logo">
          <img src="./logo/javascript-logo.png" alt="javascript" />
        </div>
        <div className="logo">
          <img src="./logo/reactjs-logo.png" alt="reactjs" />
        </div>
        <div className="logo">
          <img src="./logo/tailwindcss-logo.png" alt="" />
        </div>
        <div className="logo">
          <img src="./logo/nodejs-logo.png" alt="nodejs" />
        </div>
        <div className="logo">
          <img src="./logo/mysql-logo.png" alt="mysql" />
        </div>
      </div>
    </section>
  );
};

export default SkillsV2;
