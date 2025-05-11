import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactSection" id="contact">
      <h2>Contact Me</h2>
      <p className="contactIntro">
        Have a project idea, collaboration, or just want to connect? Drop me a message!
      </p>
      <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
