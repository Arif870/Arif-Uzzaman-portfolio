import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_YHzxAW5obSbWmI2IsYvgs");

export const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_myr15r4",
        "template_nqytnmj",
        form.current,
        "user_YHzxAW5obSbWmI2IsYvgs"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontFamily: "lobster",
          fontSize: "50px",
        }}
      >
        Get in Touch
      </h1>
      <form ref={form} onSubmit={sendEmail} className="w-75 mx-auto">
        <div className="form-group mb-4 mt-5">
          <label>Name</label>
          <input className="form-control" type="text" name="name" />
        </div>

        <div className="form-group mb-4">
          <label>Email</label>
          <input className="form-control" type="email" name="email" />
        </div>
        <div className="form-group mb-4">
          <label>Message</label>
          <textarea className="form-control" name="message" />
        </div>
        <input
          className="btn btn-success mx-auto d-block mb-5"
          style={{ width: "200px" }}
          type="submit"
          value="Send"
        />
      </form>
    </>
  );
};
