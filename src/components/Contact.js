import React from "react";
import emailjs from "emailjs-com";

// import './ContactUs.css';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_psp1nji", "template_19y4inc", e.target, "user_kxYh4G8UDV0zUULHRNOf6")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        window.location.reload(true)
      );
  }

  return (

    <form className="contact-form w-50 p-5 m-auto" onSubmit={sendEmail}>
            <div className="mb-3">
        <label className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="name@email.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          name="message"
          rows="3"
        ></textarea>
      </div>
      <input type="submit" value="Send" style={{backgroundColor: "#89388C", color: "white"}} />
    </form> 
  );
}


