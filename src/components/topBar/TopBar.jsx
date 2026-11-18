import React from "react";
import { useState } from "react";
import "./topbar.css";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topBar">
      <div className="wrapper">
        <a href="#Home" className="logo">
          Thanushan Pirapakaran
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <nav
          aria-label="Main navigation"
          className={`menu ${menuOpen ? "active" : ""}`}
        >
          <a href="#Home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#Timeline" onClick={() => setMenuOpen(false)}>
            Timeline
          </a>
          <a href="#Resume" onClick={() => setMenuOpen(false)}>
            Resume
          </a>
          <a href="#Projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#Contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
