import React from "react";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro" id="Home">
      <div className="intro-left">
        <img
          src="/pics/profile.jpg"
          alt="Thanushan Pirapakaran"
          className="intro-image"
        />
        <div className="intro-title">
          <span style={{ fontSize: "40px" }}>Thanushan Pirapakaran</span>
          <span>Full Stack Developer</span>
        </div>
      </div>
      <div className="intro-right">
        <span style={{ fontSize: "30px" }}>Software Engineering Portfolio</span>
        <span className="intro-desc">
          I’m Thanushan Pirapakaran, a Computer Science grad from Brock
          University with a strong foundation in full-stack development. I’ve
          led group projects using React, JavaScript, Java, and SQL, and have
          experience working in Agile Scrum environments. While I bring solid
          technical skills and real-world team experience, I’m always looking to
          learn and grow. I’m a quick, adaptable learner and excited to keep
          building both my technical and interpersonal skills in this role.
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
            <span>Github/ThanushanP</span>
          </a>
        </div>
      </div>
    </div>
  );
}
