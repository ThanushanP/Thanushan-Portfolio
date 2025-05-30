import React from "react";
import { useState } from "react";
import "./topbar.css";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open

  return (
    <div className="topBar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Thanushan Pirapakaran
          </a>
        </div>
        <div className="right">
          {/* Hamburger Menu Icon */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          {/* Navigation Links */}
          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <a href="#intro" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#resume" onClick={() => setMenuOpen(false)}>
              Resume
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
