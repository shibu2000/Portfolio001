import React from "react";
import "../Stylesheets/Biography.css";

const Biography = () => {
  return (
    <section
      id="biography"
      className="biography p-3 pt-20 flex md:flex-row flex-col"
    >
      {/* ----------Biography Started----------------- */}
      <div className="flex-1 text-white left relative">
        <p>BIOGRAPHY</p>
        <div className="innerLeft p-5">
          <h1 className="mb-4 text-4xl text-orange-400">ABOUT ME</h1>
          <p className="mb-4">I'm Shibu Dhara</p>
          <p className="text-justify">
            I am a Web Developer, and I'm very passionate and dedicated to my
            work, With 2 years of experience in Web development, I have acquired
            the skills and knowledge necessary to make your project a success.
          </p>
          <table className="mt-4 about-me-table">
            <tbody>
              <tr>
                <td>
                  <span>Birthday</span>: 12.04.2000
                </td>
                <td>
                  <span>Age</span>: {new Date().getFullYear() - 2000}
                </td>
              </tr>
              <tr>
                <td>
                  <span>Location</span>: Khirpai, West Bengal
                </td>
                <td>
                  <span>Interests</span>: Anime, Video Games
                </td>
              </tr>
              <tr>
                <td>
                  <span>Degree</span>: B.Tech
                </td>
                <td>
                  <span>College</span>: BBIT
                </td>
              </tr>
              <tr>
                <td>
                  <span>Mail</span>: shibudhara11@mail.com
                </td>
                <td>
                  <span>Phone</span>: +91 7407038247
                </td>
              </tr>
            </tbody>
          </table>
          <button className="bg-slate-500 py-2 px-4 mt-8 text-black font-bold rounded">
            Download CV
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 about-me-card flex justify-center items-center">
        <div className="about-me-img1 p-2 border border-orange-500">
          <img
            src="./PngItem_1086536.png"
            alt="my-image"
            className="my-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Biography;
