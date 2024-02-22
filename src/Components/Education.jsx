import React from "react";
import "../Stylesheets/Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section md:pt-20 pt-16">
      <div className="container m-auto education-container">
        <div className="heading flex justify-center items-center">
          <div className="line-shape"></div>
          <h1 className="uppercase text-center p-2 md:text-4xl text-orange-300 text-2xl">
            Education
          </h1>
          <div className="line-shape"></div>
        </div>

        <div className="container m-auto mt-2 space-y-5">
          {/* -------------------------------------------------------------------- */}
          <div className="edu-group flex md:px-60 ">
            <div className="edu-logo p-1 border-r border-r-slate-700 rounded">
              <img
                src="./graduation-hat.png"
                alt="education"
                className="h-full object-cover"
              />
            </div>
            <div className="edu-details flex-1 p-2 capitalize border-l border-l-slate-700 rounded flex flex-col justify-evenly">
              <p className="md:text-2xl">
                budge bdge institute of technology - kolkata,{" "}
                <span className="uppercase">wb, in</span>
              </p>
              <p className="md:text-lg">
                computer science & engineering - 9.1{" "}
                <span className="uppercase">gpa</span>
              </p>
              <p className="md:text-sm">2022</p>
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
          <div className="edu-group md:px-60 flex">
            <div className="edu-logo p-1 border-r border-r-slate-700 rounded">
              <img
                src="./graduation-hat.png"
                alt="education"
                className="h-full object-cover"
              />
            </div>
            <div className="edu-details flex-1 p-2 capitalize border-l border-l-slate-700 rounded flex flex-col justify-evenly">
              <p className="md:text-2xl">
                central calcutta polytechnic - kolkata,{" "}
                <span className="uppercase">wb, in</span>
              </p>
              <p className="md:text-lg">
                computer science & technology - 7.2{" "}
                <span className="uppercase">gpa</span>
              </p>
              <p className="md:text-sm">2019</p>
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
          <div className="edu-group md:px-60 flex">
            <div className="edu-logo p-1 border-r border-r-slate-700 rounded">
              <img
                src="./graduation-hat.png"
                alt="education"
                className="object-cover h-full"
              />
            </div>
            <div className="edu-details flex-1 p-2 capitalize border-l border-l-slate-700 rounded flex flex-col justify-evenly">
              <p className="md:text-2xl">
                jalsara ramakrishna high school - jalsara,{" "}
                <span className="uppercase">wb, in</span>
              </p>
              <p className="md:text-lg">
                vocational - Diploma in engineering & technology (12
                <sup className="lowercase">th</sup>) - 78.8{" "}
                <span className="uppercase">%</span>
              </p>
              <p className="md:text-sm">2017</p>
            </div>
          </div>
          {/* ---------------------------------------------------------------------*/}
          <div className="edu-group md:last:px-60 flex">
            <div className="edu-logo p-1 border-r border-r-slate-700 rounded">
              <img
                src="./graduation-hat.png"
                alt="education"
                className="object-cover h-full"
              />
            </div>
            <div className="edu-details flex-1 p-2 capitalize border-l border-l-slate-700 rounded flex flex-col justify-evenly">
              <p className="md:last:text-2xl">
                khirpai high school - khirpai
                <span className="uppercase">wb, in</span>
              </p>
              <p className="md:last:text-lg">
                10<sup className="lowercase">th</sup> - 62
                <span className="uppercase">%</span>
              </p>
              <p className="md:last:text-sm">2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
