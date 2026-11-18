import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const body = new URLSearchParams({
      "form-name": "contact",
      ...form,
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <section className="contact section-shell" id="Contact">
      <div className="contact-title">
        <hr className="contact-divider" />
        <h2>Let’s connect</h2>
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
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
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
            {status && (
              <div aria-live="polite" className="contact-status">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
