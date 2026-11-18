import React, { useEffect, useState } from "react";
import "./app.css";
import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Timeline from "./components/timeline/Timeline";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/contact";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeResumeSection, setActiveResumeSection] = useState("experience");
  const [timelineTarget, setTimelineTarget] = useState(null);

  useEffect(() => {
    const updateButtonVisibility = () => {
      setShowBackToTop(window.scrollY > 320);
    };

    window.addEventListener("scroll", updateButtonVisibility, { passive: true });
    updateButtonVisibility();
    return () => window.removeEventListener("scroll", updateButtonVisibility);
  }, []);

  useEffect(() => {
    if (!timelineTarget) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(timelineTarget)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimelineTarget(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeResumeSection, timelineTarget]);

  const handleTimelineNavigate = ({ targetId, section }) => {
    setTimelineTarget(targetId);
    if (section) {
      setActiveResumeSection(section);
    }
  };

  return (
    <div className="app">
      <TopBar />
      <main className="sections">
        <Intro />
        <Timeline onNavigate={handleTimelineNavigate} />
        <Resume
          activeSection={activeResumeSection}
          onSectionChange={setActiveResumeSection}
        />
        <Projects />
        <Contact />
      </main>
      {showBackToTop && (
        <button
          aria-label="Return to top"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
        >
          <span aria-hidden="true">↑</span> Top
        </button>
      )}
    </div>
  );
}

export default App;
