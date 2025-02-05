import React from "react";
import { useForm } from "react-hook-form";
import "../styles/contact.css";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted successfully!");
    console.log(data);
  };

  return (
    <main>
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          
          <div className="input-field">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="input-field">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="input-field">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Write your message..."
              {...register("message", { required: "Message cannot be empty" })}
            ></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>

          <button type="submit" className="submit-btn">Send Message</button>

          <div className="contact-info">
            <div>
              <i className="material-icons">phone</i>
              <p>(704) 979-1230</p>
            </div>
            <div>
              <i className="material-icons">email</i>
              <p>contact@sportsplus.com</p>
            </div>
            <div>
              <i className="material-icons">location_on</i>
              <p>54 Sports Lane Rd, Charlotte, US</p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
