import React from "react";
import "../Stylesheets/Home.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
  return (
    <section id="home" className="md:flex md:justify-center md:items-center-">
      <div className="container md:m-auto md:px-40 flex flex-col-reverse md:flex-row gap-2 pt-20 md:pt-0">
        <div className="into md:flex-1 capitalize md:space-y-3 space-y-3 md:mt-8 md:text-left text-center">
          {/* Intro start */}
          <p className="font-forte md:text-6xl text-4xl">Shibu Dhara</p>
          <p className="md:text-2xl space-mono-regular">Welcome to my page</p>
          <p className="md:text-2xl space-mono-regular">
            I'm a coder, freelancer
          </p>
          <button className="bg-slate-700 rounded-full px-4 py-2 about-btn">
            About Me
          </button>
          <div className="social-icons flex py-3 space-x-4 md:justify-start justify-center">
            <BiLogoGmail className="icon bg-slate-950 text-4xl p-2 rounded-full cursor-pointer text-red-500" />
            <FaInstagram className="icon bg-slate-950 text-4xl p-2 rounded-full cursor-pointer text-pink-500" />
            <IoLogoWhatsapp className="icon bg-slate-950 text-4xl p-2 rounded-full cursor-pointer text-green-500" />
          </div>
        </div>
        <div className="md:flex-1">
          <img
            src="./profile-pic.png"
            alt="shibu_dhara"
            className="my-img my-4 m-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
