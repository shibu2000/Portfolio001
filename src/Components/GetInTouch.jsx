import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import "../Stylesheets/GetInTouch.css";
import { Fade } from "react-awesome-reveal";
import { ImSpinner9 } from "react-icons/im";
import { PopupContext } from "../App";

const GetInTouch = ({ setPopMsg, setPopColor, setPopActive }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Boolean variables for checking weather fields are empty or not
  const [isName, setIsName] = useState(null);
  const NAME_REGEX = new RegExp(/^[a-zA-Z]+\s*[a-zA-Z]+$/);

  const [isEmail, setIsEmail] = useState(null);
  let EMAIL_REGEX = new RegExp(/\S+@\S+\.\S+/);

  const [isMessage, setIsMessage] = useState(null);

  const [isClicked, setIsClicked] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isName && isEmail && isMessage) {
      setIsClicked((c) => true);

      emailjs
        .sendForm(
          import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(
          () => {
            setName((n) => "");
            setEmail((e) => "");
            setMessage((m) => "");
            setIsClicked((c) => false);
            setPopMsg("SUCCESS");
            setPopColor("bg-green-700");
            setPopActive(true);
          },
          (error) => {
            setIsClicked((c) => false);
            setPopMsg("Failed! Try Again");
            setPopColor("bg-orange-800");
            setPopActive(true);
          }
        );
    }
  };

  return (
    <section id="get-in-touch">
      <Fade direction="down" triggerOnce>
        <h1 className="uppercase text-center p-2 md:text-3xl text-xl">
          get in touch
        </h1>
      </Fade>
      <div className="container py-8 px-5 md:px-0 m-auto flex flex-col justify-center items-center">
        <form
          ref={form}
          className="px-3 py-5 w-full lg:w-2/5 text-lg space-y-3 rounded-md shadow-md shadow-slate-700"
          onSubmit={handleFormSubmit}
        >
          <Fade cascade damping={0.1} triggerOnce>
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={`bg-transparent w-full h-10 outline-0 border p-1 rounded-md ${
                isName === false ? "border-red-500" : ""
              }`}
              placeholder="Shibu Dhara"
              required
              onChange={(e) => setName((n) => e.target.value)}
              onBlur={() => {
                setName((n) => name.trim());
                NAME_REGEX.test(name.trim())
                  ? setIsName(true)
                  : setIsName(false);
              }}
              value={name}
            />
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`bg-transparent w-full h-10 outline-0 border p-1 rounded-md ${
                isEmail === false ? "border-red-500" : ""
              }`}
              placeholder="passiontocode.contact@gmail.com"
              required
              onChange={(e) => setEmail((n) => e.target.value)}
              onBlur={() => {
                setEmail((e) => email.trim());
                EMAIL_REGEX.test(email.trim())
                  ? setIsEmail(true)
                  : setIsEmail(false);
              }}
              value={email}
            />
            <label htmlFor="message" className="block">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className={`bg-transparent w-full outline-0 border p-1 rounded-md ${
                isMessage === false ? "border-red-500" : ""
              }`}
              placeholder="Let's do some chit-chat..."
              cols="30"
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage((m) => e.target.value)}
              onBlur={() =>
                message.trim().length > 0
                  ? setIsMessage((m) => true)
                  : setIsMessage((m) => false)
              }
            />
            <div className="form-btn text-center">
              <button
                type="submit"
                className={`formSubmitBtn uppercase rounded-md text-center`}
              >
                {isClicked ? <ImSpinner9 className="spin m-auto" /> : "send"}
              </button>
            </div>
          </Fade>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
