import { useEffect, useState } from "react";
import "./projects.css";
import { first, second, third, fourth, fifth } from "../../App";

export default function Projects() {
  const [activeSection, setActiveSection] = useState("first");
  const data =
    activeSection === "first"
      ? first
      : activeSection === "second"
      ? second
      : activeSection === "third"
      ? third
      : activeSection === "fourth"
      ? fourth
      : fifth;

  const sections = ["first", "second", "third", "fourth", "fifth"];

  const handleNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setActiveSection(sections[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = sections.indexOf(activeSection);
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    setActiveSection(sections[prevIndex]);
  };
  return (
    <div className="projects" id="projects">
      {/* Check if data is empty */}
      {data.length === 0 ? (
        <div className="loading">Loading...</div> // Show loading animation
      ) : (
        <>
          {/* Left Arrow */}
          <div className="arrow left" onClick={handlePrev}>
            &#9664; {/* Left arrow symbol */}
          </div>

          {/* Image Container */}
          <div className="image-wrapper">
            {data.map((d, index) => (
              <div
                key={index}
                className="image-container"
                style={{ backgroundImage: `url(${d.title})` }}
              >
                <div className="overlay">
                  <h2>{d.name}</h2>
                  <h4>{d.date}</h4>
                  <ul>
                    <li>{d.one}</li>
                    <li>{d.two}</li>
                    <li>{d.three}</li>
                    <li>
                      <a href={d.location} target="_blank">
                        GitHub Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <div className="arrow right" onClick={handleNext}>
            &#9654; {/* Right arrow symbol */}
          </div>
        </>
      )}
    </div>
  );
}
