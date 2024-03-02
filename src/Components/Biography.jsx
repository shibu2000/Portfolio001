import React from "react";
import "../Stylesheets/Biography.css";
import cv from "../assets/Shibu_Dhara_CV.pdf";
import { Fade } from "react-awesome-reveal";

const Biography = () => {
  return (
    <section id="biography">
      <Fade direction="down" triggerOnce>
        <h1 className="uppercase text-center p-2 md:text-3xl text-xl">
          biography
        </h1>
      </Fade>
      {/* ----------Biography Started----------------- */}
      <div className="container m-auto">
        <div className="p-5 text-justify space-y-7 text-lg lg:px-20">
          <Fade cascade triggerOnce>
            <p>
              I am Shibu Dhara, a passionate and dedicated individual with a
              strong foundation in computer science and a growing expertise in
              web development. Having graduated with a Bachelor of Technology
              degree in Computer Science and Engineering in 2022, I have spent
              few years actively honing my skills and expanding my knowledge in
              the ever-evolving field of web development. My journey into web
              development stems from a deep fascination with the potential of
              technology to create engaging and impactful experiences. I am
              driven by a desire to not only build websites, but to craft
              user-centric solutions that cater to specific needs and deliver
              exceptional value.
            </p>

            <h2 className="font-bold">Beyond Technical Skills: </h2>
            <ul className="list-disc">
              <li>
                <p className="font-mono">
                  Effective Communication and Presentation Skills:
                </p>
                <p>
                  I am a confident communicator, adept at conveying complex
                  technical concepts in a clear and concise manner. I believe in
                  the importance of collaboration and actively participate in
                  discussions, effectively sharing my ideas and receptively
                  considering feedback from others.
                </p>
              </li>
              <li>
                <p className="font-mono">
                  Self-Motivated and Lifelong Learner:
                </p>
                <p>
                  I am highly motivated and possess a strong desire to
                  continuously learn and improve. I am proactive in seeking out
                  new challenges and opportunities to expand my knowledge and
                  skillset. I stay updated with the latest trends and
                  advancements in the web development industry, ensuring that I
                  can give functional solutions.
                </p>
              </li>
            </ul>
          </Fade>
        </div>
        <Fade
          duration={1500}
          cascade
          triggerOnce
          className="flex flex-col items-center"
        >
          <table className="about-me-table lg:w-3/4">
            <tbody>
              <tr>
                <td>
                  <span>Birthday</span> : 12.04.2000
                </td>
                <td>
                  <span>Age</span> : {new Date().getFullYear() - 2000}
                </td>
              </tr>
              <tr>
                <td>
                  <span>Location</span> : Khirpai, West Bengal
                </td>
                <td>
                  <span>Interests</span> : Anime, Video Games
                </td>
              </tr>
              <tr>
                <td>
                  <span>Degree</span> : B.Tech
                </td>
                <td>
                  <span>College</span> : BBIT
                </td>
              </tr>
              <tr>
                <td>
                  <span>Mail</span> : passiontocode.contact@gmail.com
                </td>
                <td>
                  <span>Phone</span> : +91 9019248023
                </td>
              </tr>
            </tbody>
          </table>
          <a
            href="https://drive.google.com/file/d/1R0mhMVi9A0GwoFRUkfeEhIW07QAXtJGI/view?usp=drive_link"
            target="_blank"
            download="Shibu_Dhara_CV"
            className="download-Btn py-2 px-4 mt-8 font-bold rounded active:bg-slate-950 shadow-sm shadow-slate-600"
          >
            Download CV
          </a>
        </Fade>
      </div>
    </section>
  );
};

export default Biography;
