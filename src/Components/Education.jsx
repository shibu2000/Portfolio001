import React from "react";
import "../Stylesheets/Education.css";
import { GiGraduateCap } from "react-icons/gi";

const Education = () => {
  return (
    <section id="education" className="education-section overflow-hidden">
      <h1 className="uppercase text-center p-2 md:text-3xl text-xl">
        Education
      </h1>
      <div className="container m-auto md:mt-2 mt-6 md:space-y-5">
        {/* -------------------------------------------------------------------- */}
        <div className="edu-group lg:w-4/5 m-auto flex ">
          <div className="edu-logo p-1 border-r border-r-slate-700 rounded">
            <img
              src="./graduation-hat.png"
              alt="education"
              className="h-full object-cover hidden md:block"
            />
          </div>
          <div className="edu-details flex-1 p-2 capitalize border-l  border-l-slate-700 rounded flex flex-col justify-evenly md:pl-5">
            <ul className="list-disc ">
              <li>
                <p className="md:text-2xl">
                  budge bdge institute of technology - kolkata,{" "}
                  <span className="uppercase">wb, in</span>
                </p>
              </li>
              <li>
                <p className="md:text-lg">
                  computer science & engineering - 9.1{" "}
                  <span className="uppercase">gpa</span>
                </p>
              </li>
              <li>
                <p className="md:text-sm">2022</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="round-shape rounded-full md:hidden block" />
        {/* -------------------------------------------------------------------- */}
        <div className="edu-group lg:w-4/5 m-auto flex">
          <div className="edu-logo p-1 border-r border-r-slate-700 rounded">
            <img
              src="./graduation-hat.png"
              alt="education"
              className="h-full object-cover hidden md:block"
            />
          </div>
          <div className="edu-details flex-1 p-2 capitalize border-l border-l-slate-700 rounded flex flex-col justify-evenly md:pl-5">
            <ul className="list-disc">
              <li>
                <p className="md:text-2xl">
                  central calcutta polytechnic - kolkata,{" "}
                  <span className="uppercase">wb, in</span>
                </p>
              </li>
              <li>
                <p className="md:text-lg">
                  computer science & technology - 7.2{" "}
                  <span className="uppercase">gpa</span>
                </p>
              </li>
              <li>
                <p className="md:text-sm">2019</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="round-shape rounded-full lg:hidden block" />
        {/* -------------------------------------------------------------------- */}
        <div className="edu-group lg:w-4/5 m-auto flex">
          <div className="edu-logo p-1 border-r border-r-slate-700 rounded">
            <img
              src="./graduation-hat.png"
              alt="education"
              className="object-cover h-full hidden md:block"
            />
          </div>
          <div className="edu-details flex-1 p-2 capitalize border-l border-l-slate-700 rounded flex flex-col justify-evenly  md:pl-5">
            <ul className="list-disc">
              <li>
                <p className="md:text-2xl">
                  jalsara ramakrishna high school - jalsara,{" "}
                  <span className="uppercase">wb, in</span>
                </p>
              </li>
              <li>
                <p className="md:text-lg">
                  vocational - Diploma in engineering & technology (12
                  <sup className="lowercase">th</sup>) - 78.8{" "}
                  <span className="uppercase">%</span>
                </p>
              </li>
              <li>
                <p className="md:text-sm">2017</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="round-shape rounded-full lg:hidden block" />
        {/* ---------------------------------------------------------------------*/}
        <div className="edu-group lg:w-4/5 m-auto flex">
          <div className="edu-logo p-1 border-r border-r-slate-700 rounded">
            <img
              src="./graduation-hat.png"
              alt="education"
              className="object-cover h-full hidden md:block"
            />
          </div>
          <div className="edu-details flex-1 p-2 capitalize border-l border-l-slate-700 rounded flex flex-col justify-evenly md:pl-5">
            <ul className="list-disc">
              <li>
                <p className="md:text-2xl">
                  khirpai high school - khirpai,{" "}
                  <span className="uppercase">wb, in</span>
                </p>
              </li>
              <li>
                <p className="md:text-lg">
                  10<sup className="lowercase">th</sup> - 62
                  <span className="uppercase">%</span>
                </p>
              </li>
              <li>
                <p className="md:text-sm">2015</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
