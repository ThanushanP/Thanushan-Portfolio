import React, { useState } from "react";
import "./contact.css";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("Message sent!");
      else setStatus("Failed to send.");
    } catch {
      setStatus("Failed to send.");
    }
  };

  return (
    <div className="contact" id="Contact">
      <div className="contact-title">
        <hr className="contact-divider" />
        <h1>Lets Connnect!</h1>
        <h3>Feel free to reach out to me here or through the socials below</h3>
        <hr className="contact-divider" />
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/thanushanp"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/ThanushanP"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/thanushan_p/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            {status && <div>{status}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
