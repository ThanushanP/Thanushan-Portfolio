import React from "react";
import "./intro.css";

export default function Intro() {
  return (
    <section className="intro" id="Home">
      <div className="intro-left">
        <img
          src="/pics/profile.jpg"
          alt="Thanushan Pirapakaran"
          className="intro-image"
          width="240"
          height="240"
        />
      </div>
      <div className="intro-right">
        <p className="eyebrow">Software engineering · industrial automation</p>
        <h1 className="intro-title">
          Hi, I’m <span>Thanushan Pirapakaran.</span>
        </h1>
        <h2 className="intro-role">Software &amp; Automation Engineer</h2>
        <span className="intro-desc">
          I’m a Computer Science graduate and software engineer with experience
          building full-stack and cross-platform applications, alongside
          hands-on industrial automation integration. My work spans React,
          Java, Python, cloud infrastructure, and connecting autonomous mobile
          robots, PLCs, SCADA, and industrial protocols. I enjoy solving
          problems end-to-end—from designing software systems and APIs to
          deploying reliable, efficient automation on the production floor.
        </span>
        <div className="socials-menu">
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span>ON, Canada</span>
          </span>
          <a
            href="https://www.linkedin.com/in/thanushanp"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn/ThanushanP</span>
          </a>
          <a
            href="https://github.com/ThanushanP"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i>
            <span>GitHub/ThanushanP</span>
          </a>
        </div>
      </div>
    </section>
  );
}
