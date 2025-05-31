import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./projects.css";
import { first, second, third, fourth, fifth } from "../../App";

export default function Projects() {
  const allSections = [first, second, third, fourth, fifth];
  const allProjects = allSections.flat();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  if (allProjects.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="projects" id="Projects">
      <div className="carousel-wrapper">
        <div
          className="arrow left"
          onClick={() =>
            setIndex((index - 1 + allProjects.length) % allProjects.length)
          }
        >
          &#x276E;
        </div>
        <Carousel
          activeIndex={index}
          className="carousel"
          onSelect={handleSelect}
          interval={null}
          wrap={true}
          indicators={true}
          controls={false}
        >
          {allProjects.map((d, idx) => (
            <Carousel.Item key={idx}>
              <div
                className="image-container"
                style={{
                  backgroundImage: `url(${d.title})`,
                }}
              >
                <div className="overlay">
                  <h2>{d.name}</h2>
                  <h4>{d.date}</h4>
                  <ul>
                    <li>{d.one}</li>
                    <li>{d.two}</li>
                    <li>{d.three}</li>
                    <li>
                      <a
                        href={d.location}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div
          className="arrow right"
          onClick={() => setIndex((index + 1) % allProjects.length)}
        >
          &#x276F;
        </div>
      </div>
    </div>
  );
}
