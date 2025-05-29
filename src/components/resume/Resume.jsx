import "./resume.css";
import React, { useState } from "react";
import { school, RBI, skills, Mitsubishi, Freelance } from "../../App";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("education");

  const renderContent = () => {
    switch (activeSection) {
      case "education":
        if (school.length === 0) {
          return <div className="loading">Loading...</div>; // Show loading animation
        }
        return (
          <div className="resume_info_content">
            {school.map((item, index) => (
              <div className="body" key={index}>
                <h3 className="title">{item.title}</h3>
                <h3 className="sub">{item.sub}</h3>
                <h3 className="small">{item.date}</h3>
                <h3 className="small">{item.location}</h3>
                <ul>
                  <li>
                    <span className="label">Awards:</span> {item.one}
                  </li>
                  <li>
                    <span className="label">GPA:</span> {item.gpa}
                  </li>
                  <li>
                    <span className="label">Courses:</span> {item.courses}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        );
      case "experience":
        if (
          Freelance.length === 0 &&
          RBI.length === 0 &&
          Mitsubishi.length === 0
        ) {
          return <div className="loading">Loading...</div>; // Show loading animation
        }
        return (
          <div className="resume_info_content">
            {Freelance.map((item, index) => (
              <div className="body" key={index}>
                <h3 className="title">{item.title}</h3>
                <h3 className="sub">{item.sub}</h3>
                <h3 className="small">{item.date}</h3>
                <h3 className="small">{item.location}</h3>
                <ul>
                  <li>{item.one}</li>
                  <li>{item.two}</li>
                  <li>{item.three}</li>
                  <li>{item.four}</li>
                  <li>{item.five}</li>
                  <li>{item.six}</li>
                  <li>{item.seven}</li>
                  <li>{item.eight}</li>
                </ul>
              </div>
            ))}
            {RBI.map((item, index) => (
              <div className="body" key={index}>
                <h3 className="title">{item.title}</h3>
                <h3 className="sub">{item.sub}</h3>
                <h3 className="small">{item.date}</h3>
                <h3 className="small">{item.location}</h3>
                <ul>
                  <li>{item.one}</li>
                  <li>{item.two}</li>
                  <li>{item.three}</li>
                </ul>
              </div>
            ))}
            {Mitsubishi.map((item, index) => (
              <div className="body" key={index}>
                <h3 className="title">{item.title}</h3>
                <h3 className="sub">{item.sub}</h3>
                <h3 className="small">{item.date}</h3>
                <h3 className="small">{item.location}</h3>
                <ul>
                  <li>{item.one}</li>
                  <li>{item.two}</li>
                  <li>{item.three}</li>
                  <li>{item.four}</li>
                </ul>
              </div>
            ))}
          </div>
        );
      case "skills":
        if (skills.length === 0) {
          return <div className="loading">Loading...</div>; // Show loading animation
        }
        return (
          <div className="resume_info_content">
            {skills.map((item, index) => (
              <div className="body" key={index}>
                <ul>
                  <li>
                    <span className="label">Languages:</span> {item.Languages}
                  </li>
                  <li>
                    <span className="label">Frameworks:</span> {item.Frameworks}
                  </li>
                  <li>
                    <span className="label">Tools:</span> {item.Tools}
                  </li>
                  <li>
                    <span className="label">Soft Skills:</span> {item.Soft}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="resume" id="resume">
      <div className="resume_buttons">
        <button
          className={`res_but ${activeSection === "education" ? "active" : ""}`}
          onClick={() => setActiveSection("education")}
        >
          <i className="fas fa-graduation-cap"></i>
          <span>Education</span>
        </button>
        <button
          className={`res_but ${
            activeSection === "experience" ? "active" : ""
          }`}
          onClick={() => setActiveSection("experience")}
        >
          <i className="fas fa-briefcase"></i>
          <span>Experience</span>
        </button>
        <button
          className={`res_but ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => setActiveSection("skills")}
        >
          <i className="fas fa-pencil-alt"></i>
          <span>Skills</span>
        </button>
      </div>
      <div
        className={`resume_info ${
          activeSection === "education"
            ? "education-bg"
            : activeSection === "experience"
            ? "experience-bg"
            : "skills-bg"
        }`}
      >
        {activeSection && (
          <div className="resume_info_box">{renderContent()}</div>
        )}
      </div>
    </div>
  );
}
