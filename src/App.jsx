import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Biography from "./Components/Biography";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import "./App.css";
import SkillsV2 from "./Components/SkillsV2";
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";
import PopupMessage from "./Components/PopupMessage";
import Intro from "./Components/Intro";

export const PopupContext = createContext();

const App = () => {
  const [popupMsg, setPopupMsg] = useState("");
  const [popupColor, setPopupColor] = useState("");
  const [isPopupActive, setIsPopupActive] = useState(false);

  const setPopMsg = (msg) => {
    setPopupMsg(() => msg);
  };
  const setPopColor = (color) => {
    setPopupColor(() => color);
  };
  const setPopActive = (value) => {
    setIsPopupActive(() => value);
  };

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(() => true);
    }, 3000);
  }, []);

  if (!isReady) {
    return <Intro />;
  } else {
    return (
      <>
        <Header />
        <Home />
        <Biography />
        <Education />
        <SkillsV2 />
        <Projects />
        <GetInTouch
          setPopMsg={setPopMsg}
          setPopColor={setPopColor}
          setPopActive={setPopActive}
        />
        <Footer />
        {isPopupActive && (
          <PopupMessage
            popupMsg={popupMsg}
            popupColor={popupColor}
            setPopActive={setPopActive}
          />
        )}
      </>
    );
  }
};

export default App;
