import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Biography from "./Components/Biography";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./App.css";
import SkillsV2 from "./Components/SkillsV2";
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Biography />
      <Education />
      {/* <Skills /> */}
      <SkillsV2 />
      <Projects />
      <GetInTouch />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </>
  );
};

export default App;
