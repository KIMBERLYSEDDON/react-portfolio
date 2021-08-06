import React from "react";
import emailjs from "emailjs-com";

// import './ContactUs.css';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="w-50 p-5 m-auto">
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@email.com"
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
          id="text-area"
          rows="3"
        ></textarea>
      </div>
      <input className="button" style={{backgroundColor: "#89388C", color: "white"}} type="submit" value="Send" />
    </form>

    /* <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */
  );
}

// export default function Contact() {
//     return (
// <p>CONTACT INFO HERE</p>
//     )
// }
