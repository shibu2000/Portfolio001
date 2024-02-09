import React from "react";
import "../Stylesheets/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills p-4 pt-20 overflow-hidden relative">
      <h1 className="uppercase text-white mb-16">Skills</h1>
      {/* =========Part 1=========== */}
      <div className="skill-container mt-8 flex justify-around md:flex-nowrap flex-wrap capitalize">
        <div className="skill_item">
          <div className="skill_details skill_detail-1">
            <h1 className="text-orange-400 text-2xl">JAVA</h1>
            <p className="text-sm text-zinc-300">continues the legacy</p>
          </div>
        </div>
        <div className="skill_item">
          <div className="skill_details skill_detail-2">
            <h1 className="text-green-400 text-2xl">MySQL</h1>
            <p className="text-sm text-zinc-300">
              important data needs to save
            </p>
          </div>
        </div>
        <div className="skill_item">
          <div className="skill_details skill_detail-3">
            <h1 className="text-sky-400 text-2xl">Reactjs</h1>
            <p className="text-sm text-zinc-300">
              Mordern problem needs mordern solution
            </p>
          </div>
        </div>
      </div>
      {/* ========Part 2================== */}
      <div className="skill-container mt-8 flex justify-evenly flex-nowrap capitalize">
        <div className="skill_item">
          <div className="skill_details skill_detail-4">
            <h1 className="text-red-400 text-2xl">HTML</h1>
            <p className="text-sm text-zinc-300">stracture matters</p>
          </div>
        </div>
        <div className="skill_item">
          <div className="skill_details skill_detail-5">
            <h1 className="text-teal-400 text-2xl">CSS</h1>
            <p className="text-sm text-zinc-300">
              to looks good let's apply some color
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
