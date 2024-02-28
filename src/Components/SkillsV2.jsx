import React from "react";
import "../Stylesheets/SkillsV2.css";

const SkillsV2 = () => {
  return (
    <section id="skills">
      <h1 className="uppercase text-center border-b mx-20 pb-4 md:text-3xl  text-xl">skills</h1>

      <div className="container md:px-20 md:pt-15 pt-12 m-auto flex md:justify-center justify-around items-center md:space-x-8 flex-wrap px-8">
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
          <img src="./logo/java-logo.png" alt="java" />
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
