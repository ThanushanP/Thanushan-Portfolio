import React from "react";
import { projects } from "../../data/portfolioData";
import "./projects.css";

export default function Projects() {
  return (
    <section className="projects section-shell" id="Projects">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Things I’ve built</h2>
        <p>A few projects I’ve enjoyed bringing to life.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => {
          const preview = (
            <>
              <img
                alt={`${project.name} preview`}
                className="project-image"
                height="240"
                loading={index < 2 ? "eager" : "lazy"}
                src={project.image}
                width="480"
              />
              {project.url && (
                <span className="project-image-action">View project ↗</span>
              )}
            </>
          );

          return (
            <article
              className="project-card"
              id={project.anchorId}
              key={project.name}
            >
              {project.url ? (
                <a
                  aria-label={`View ${project.name} source code`}
                  className="project-image-link"
                  href={project.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {preview}
                </a>
              ) : (
                <div className="project-image-link">{preview}</div>
              )}
              <div className="project-copy">
                <p className="project-date">{project.date}</p>
                <h3>{project.name}</h3>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <p className="project-tech">{project.tech}</p>
                {project.liveUrl && (
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live site <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
