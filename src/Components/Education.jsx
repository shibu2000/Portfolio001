import React from "react";
import "../Stylesheets/Education.css";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  const eduDetails = [
    {
      id: 1,
      institute_name: "Budge Budge Institute of Technology - Kolkata, WB, IN",
      dept: "Computer Science & Engineering - 9.1 GPA",
      poy: "2022",
    },
    {
      id: 2,
      institute_name: "Central Calcutta Polytechnic - Kolkata, WB, IN",
      dept: "Computer Science & Technology - 7.2 GPA",
      poy: "2019",
    },
    {
      id: 3,
      institute_name: "Jalsara Ramakrishna High School - Jalsara, WB, IN",
      dept: "Vocational - Diploma in Engineering & Technology(HS) - 78.8 %",
      poy: "2017",
    },
    {
      id: 4,
      institute_name: "khirpai High School - Khirpai, WB, IN",
      dept: "Secondary - 62 %",
      poy: "2015",
    },
  ];

  return (
    <section id="education" className="education-section overflow-hidden">
      <Fade direction="down" triggerOnce>
        <h1 className="uppercase text-center p-2 md:text-3xl text-xl">
          Education
        </h1>
      </Fade>
      <div className="container m-auto md:mt-2 mt-6 space-y-5">
        <Fade cascade damping={0.1} triggerOnce>
          {eduDetails.map((details) => {
            return <EducationDetails key={details.id} details={details} />;
          })}
        </Fade>
      </div>
    </section>
  );
};

const EducationDetails = ({ details }) => {
  return (
    <div className="edu-group lg:w-4/5 m-auto flex">
      <div className="edu-logo p-1 border-r border-r-slate-700 rounded">
        <img
          src="./graduation-hat.png"
          alt="education"
          className="h-full object-cover hidden md:block"
        />
      </div>
      <div className="edu-details flex-1 p-2 border-l  border-l-slate-700 rounded flex flex-col justify-evenly md:pl-5">
        <ul className="list-disc ">
          <li>
            <p className="lg:text-2xl md:text-2xl">{details.institute_name}</p>
          </li>
          <li>
            <p className="lg:text-lg md:text-lg">{details.dept}</p>
          </li>
          <li>
            <p className="lg:text-sm md:text-sm">{details.poy}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
