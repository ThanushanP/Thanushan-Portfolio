/*npm start
git add .
git commit -m "update
git push -u origin main" */
import React from "react";
import "./app.css";
import { useEffect, useState } from "react";
import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/contact";
// import Chat from "./components/chatbot/chat";
export let school = [];
export let Freelance = [];
export let FemmeCo = [];
export let RBI = [];
export let skills = [];
export let Mitsubishi = [];
export let first = [];
export let second = [];
export let third = [];
export let fourth = [];
export let fifth = [];

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const [resume, setRes] = useState([
    {
      title: "",
      date: "",
      location: "",
      sub: "",
      one: "",
    },
  ]);
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonRes) => {
        const parsedData = jsonRes.map((item) => ({
          ...item,
          gpa: item.gpa ? parseFloat(item.gpa.$numberDecimal) : null,
        }));
        setRes(parsedData);
      });
  }, []);

  school = [resume.find((item) => item.title === "Brock University") || {}];
  RBI = [resume.find((item) => item.sub === "Mestek RBI") || {}];
  skills = [resume.find((item) => item.sub === "skills") || {}];
  Mitsubishi = [resume.find((item) => item.sub === "Mitsubishi") || {}];
  Freelance = [resume.find((item) => item.sub === "Freelance") || {}];
  FemmeCo = [resume.find((item) => item.sub === "Femme & Co") || {}];

  // Get all projects by type
  const projectItems = resume.filter((item) => item.type === "project");

  // Randomly assign projects to first, second, third, fourth, fifth
  [first, second, third, fourth, fifth] = projectItems;

  // If there are fewer than 5 projects, fill with empty objects
  first = [first || {}];
  second = [second || {}];
  third = [third || {}];
  fourth = [fourth || {}];
  fifth = [fifth || {}];

  return (
    <div className="app">
      <TopBar />
      {/* <Chat /> */}
      <div className="sections">
        <Intro />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
