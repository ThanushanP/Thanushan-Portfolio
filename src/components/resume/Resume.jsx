import React, { useRef } from "react";
import { education, experience, skills } from "../../data/portfolioData";
import "./resume.css";

const sections = ["education", "experience", "skills"];

export default function Resume({ activeSection, onSectionChange }) {
  const resumeHeading = useRef(null);

  const handleSectionChange = (section) => {
    onSectionChange(section);
    resumeHeading.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="resume section-shell" id="Resume">
      <div className="section-heading" ref={resumeHeading}>
        <p className="eyebrow">A little about my journey</p>
        <h2>Experience &amp; education</h2>
        <p>What I’ve learned, where I’ve worked, and the tools I use.</p>
      </div>
      <div className="resume-layout">
        <div className="resume-tabs" role="tablist" aria-label="Resume sections">
          {sections.map((section) => (
            <button
              aria-selected={activeSection === section}
              className={`resume-tab ${
                activeSection === section ? "active" : ""
              }`}
              id={`resume-tab-${section}`}
              key={section}
              onClick={() => handleSectionChange(section)}
              role="tab"
              type="button"
            >
              {section}
            </button>
          ))}
        </div>
        <div
          aria-labelledby={`resume-tab-${activeSection}`}
          className="resume-content"
          id="resume-panel"
          role="tabpanel"
        >
          {activeSection === "education" && (
            <article className="resume-card" id={education.anchorId}>
              <div className="resume-card-heading">
                <div>
                  <h3>{education.school}</h3>
                  <p>{education.degree}</p>
                </div>
                <span className="resume-date">{education.date}</span>
              </div>
              <p className="resume-meta">
                {education.location} <span>·</span> GPA {education.gpa}
              </p>
              <p className="resume-highlight">{education.award}</p>
              <h4>Selected coursework</h4>
              <div className="skill-list">
                {education.courses.map((course) => (
                  <span className="skill-chip" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </article>
          )}
          {activeSection === "experience" && (
            <div className="experience-list">
              {experience.map((job) => (
                <article
                  className="resume-card"
                  id={job.anchorId}
                  key={`${job.company}-${job.title}`}
                >
                  <div className="resume-card-heading">
                    <div>
                      <h3>{job.title}</h3>
                      <p>{job.company}</p>
                    </div>
                    <span className="resume-date">{job.date}</span>
                  </div>
                  <p className="resume-meta">{job.location}</p>
                  <ul>
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                    {job.websites && (
                      <li>
                        Built and maintain two company websites —{" "}
                        {job.websites.map((website, index) => (
                          <React.Fragment key={website.url}>
                            {index > 0 && " and "}
                            <a
                              href={website.url}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {website.name}
                            </a>
                          </React.Fragment>
                        ))}{" "}
                        — developing and updating service pages to keep each
                        brand’s information clear and current.
                      </li>
                    )}
                  </ul>
                  {job.tech && (
                    <>
                      <h4>Technologies</h4>
                      <div className="skill-list">
                        {job.tech.map((technology) => (
                          <span className="skill-chip" key={technology}>
                            {technology}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </article>
              ))}
            </div>
          )}
          {activeSection === "skills" && (
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <article className="resume-card" key={category}>
                  <h3>{category}</h3>
                  <div className="skill-list">
                    {items.map((item) => (
                      <span className="skill-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
