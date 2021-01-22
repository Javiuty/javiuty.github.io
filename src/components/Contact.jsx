import React, { useState } from "react";
import emailjs from "emailjs-com";
import Error from "./Error";

const Contact = () => {
  const [template, setTemplate] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Fn for reading content
  const updateForm = (e) => {
    setTemplate({ ...template, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = template;

    // Add handling errors

    if (
      name &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) &&
      message
    ) {
      setError(false);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, [5000]);

      emailjs.init("user_E2oidtUarfJoc3ZRc1i3R");

      emailjs.send("default_service", "form_website", template).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    } else {
      setError(true);
    }

    // Reset form
    setTemplate({
      name: "",
      email: "",
      message: "",
    });

    document.querySelector("#form").reset();
  };

  return (
    <section className="contact" id="contact">
      <h3 className="contact__title">Contact</h3>
      <h4 className="contact__subtitle">
        Have a question or want to work together?
      </h4>
      <div className="contact__container">
        <form id="form" onSubmit={sendEmail}>
          {error && <Error mensaje={"Fill all the inputs"} type={"fail"} />}
          {success && (
            <Error
              mensaje={"Your message was successfully sent!"}
              type={"success"}
            />
          )}
          <label htmlFor="name">
            {" "}
            Name
            <input
              className="name"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={updateForm}
            />
          </label>
          <label htmlFor="email">
            {" "}
            Email
            <input
              className="email"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={updateForm}
            />
          </label>
          <label htmlFor="message">
            {" "}
            Message
            <textarea
              className="message"
              placeholder="Your message"
              name="message"
              id="message"
              onChange={updateForm}
            ></textarea>
          </label>

          <input type="submit" value="Submit" className="btn btn-submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
