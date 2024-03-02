import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const PopupMessage = ({ popupMsg, popupColor, setPopActive }) => {
  useEffect(() => {
    setTimeout(() => {
      setPopActive(false);
    }, 4000);
  }, []);

  return (
    <Fade
      direction="up"
      className={` px-2 py-4 fixed bottom-10 right-4 lg:w-1/5 w-2/4 text-center rounded-lg ${popupColor}`}
    >
      {popupMsg}
    </Fade>
  );
};

export default PopupMessage;
