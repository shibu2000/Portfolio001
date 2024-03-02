import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <section
      className="p-3 flex lg:flex-row md:flex-row flex-col justify-evenly items-center"
      style={{
        backgroundColor: "#161620",
      }}
    >
      <Fade direction="left" cascade>
        <div className="uppercase text-center">
          <p>
            made with <span className="text-red-600">❤</span> and passion @2024
          </p>
          <p>🙏 thank you 🙏</p>
        </div>
        <div>
          <p>passiontocode.contact@gmail.com</p>
        </div>
      </Fade>
    </section>
  );
};

export default Footer;
