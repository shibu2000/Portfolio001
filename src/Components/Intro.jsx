import React from "react";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <div
      className="absolute top-0 w-full h-full flex lg:flex-row flex-col lg:gap-1 md:gap-1 justify-center items-center text-4xl"
      style={{ zIndex: "999", backgroundColor: "#222233" }}
    >
      <Fade direction="up" cascade damping={0.1} duration={2000} >
        <p>Shibu Dhara</p>
        <p>Portfolio</p>
      </Fade>
    </div>
  );
};

export default Intro;
