import React, { useEffect } from "react";
import "../Stylesheets/SkillsV2.css";
import data from "../skills_data.json";
import { Fade } from "react-awesome-reveal";

const SkillsV2 = () => {
  return (
    <section id="skills" className="overflow-hidden">
      <Fade direction="down" triggerOnce>
        <h1 className="uppercase text-center mx-20 pb-4 md:text-3xl text-xl">
          skills
        </h1>
      </Fade>
      <div className="container py-5 m-auto lg:px-40 flex flex-wrap justify-center gap-5">
        <Fade cascade damping={0.2} direction="up" triggerOnce className="w-1/5">
          {data.skills.map((skill) => (
            <img
              key={skill.id}
              src={`./skills_logo/${skill.file_name}`}
              className="skill-logo h-full lg:h-52 p-2 shadow-sm shadow-slate-700"
              alt={skill.name}
            />
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default SkillsV2;
