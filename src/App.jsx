import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Biography from "./Components/Biography";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Biography />
      <Skills />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Biography />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </>
  );
};

export default App;
