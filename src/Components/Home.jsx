import React from "react";
import "../Stylesheets/Home.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <section id="home" className="flex justify-center items-center ">
      <div className="container m-auto lg:px-40 flex flex-col-reverse lg:flex-row md:flex-row lg:justify-around md:justify-around">
        <div className="capitalize md:space-y-3 space-y-3 flex flex-col lg:justify-end lg:items-end md:justify-end md:items-end md:text-left items-center">
          {/* Intro start */}
          <Fade cascade damping={0.2}>
            <p className="font-forte md:text-6xl text-4xl">Shibu Dhara</p>
            <p className="md:text-2xl space-mono-regular">Welcome to my page</p>
            <p className="md:text-2xl space-mono-regular">
              I'm a coder, freelancer
            </p>
            <div className="about-btn-holder rounded-full px-1 py-1">
              <button
                className="bg-slate-700 px-4 py-2 rounded-full hover:no-underline"
                onClick={() => window.location.replace("#biography")}
              >
                About Me
              </button>
            </div>
          </Fade>
          <div className="social-icons flex py-3 space-x-4 md:justify-start justify-center">
            <Fade cascade direction="right" damping={0.2}>
              <a href="mailto:passiontocode.contact@gmail.com">
                <BiLogoGmail className="icon bg-slate-950 text-4xl p-2 rounded-full text-red-500" />
              </a>
              <a
                href="https://www.instagram.com/shibudhara11?utm_source=qr&igsh=engwY212cndramMz"
                target="_blank"
              >
                <FaInstagram className="icon bg-slate-950 text-4xl p-2 rounded-full cursor-pointer text-pink-500" />
              </a>
              <a href="https://wa.me/+919019248023" target="_blank">
                <IoLogoWhatsapp className="icon bg-slate-950 text-4xl p-2 rounded-full text-green-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/shibu-dhara-a1683226a"
                target="_blank"
              >
                <FaLinkedin className="icon bg-slate-950 text-4xl p-2 rounded-full cursor-pointer text-blue-600" />
              </a>
            </Fade>
          </div>
        </div>
        <div className="profile-img-holder">
          <Fade>
            <img
              src="./profile-pic.png"
              alt="shibu_dhara"
              className="my-img my-4 m-auto"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Home;
