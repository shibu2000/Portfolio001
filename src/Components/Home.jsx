import React from "react";
import "../Stylesheets/Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container intro">
        <img
          src="./smiley-face-png-from-pngfre-10.png"
          alt="smiley-face"
          className="smiley-face my-4"
        />
        <div className="text-center text-xl">
          <h1 className="font-forte text-3xl">shibu dhara</h1>
          <p>I'm a coder, freelancer</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
