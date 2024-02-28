import React, { useState, useEffect } from "react";
import "../Stylesheets/GetInTouch.css";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Boolean variables for checking weather fields are empty or not
  const [isName, setIsName] = useState(null);
  const NAME_REGEX = new RegExp(/^[a-zA-Z]+\s*[a-zA-Z]+$/);

  const [isEmail, setIsEmail] = useState(null);
  let EMAIL_REGEX = new RegExp(/\S+@\S+\.\S+/);

  const [isMessage, setIsMessage] = useState(null);

  const [isBtnActive, setIsBtnActive] = useState(true);

  useEffect(() => {
    isName && isEmail && isMessage
      ? setIsBtnActive((b) => true)
      : setIsBtnActive((b) => false);
  }, [isName, isEmail, isMessage]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
  };

  return (
    <section id="get-in-touch">
      <h1 className="uppercase text-center p-2 md:text-3xl  text-xl">
        get in touch
      </h1>
      <div className="container py-8 m-auto flex flex-col justify-center items-center">
        <form
          className="px-3 py-5 w-full lg:w-2/5 text-lg space-y-3 rounded-md"
          onSubmit={handleFormSubmit}
        >
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
              NAME_REGEX.test(name.trim()) ? setIsName(true) : setIsName(false);
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
              className={`formSubmitBtn uppercase rounded-md px-8 py-2 ${
                !isBtnActive ? "cursor-not-allowed" : ""
              }`}
            >
              send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
