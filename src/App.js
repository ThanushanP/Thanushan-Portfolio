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
export let school = [];
export let Freelance = [];
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

  school = [
    {
      title: resume[0].title,
      date: resume[0].date,
      location: resume[0].location,
      sub: resume[0].sub,
      one: resume[0].one,
      gpa: resume[0].gpa,
      courses: resume[0].courses,
    },
  ];
  if (resume[1] !== undefined) {
    RBI = [
      {
        title: resume[1].title,
        date: resume[1].date,
        location: resume[1].location,
        sub: resume[1].sub,
        one: resume[1].one,
        two: resume[1].two,
        three: resume[1].three,
      },
    ];
  }

  if (resume[2] !== undefined) {
    skills = [
      {
        title: resume[2].title,
        date: resume[2].date,
        location: resume[2].location,
        sub: resume[2].sub,
        Languages: resume[2].Languages,
        Frameworks: resume[2].Frameworks,
        Tools: resume[2].Tools,
        Soft: resume[2].Soft,
      },
    ];
  }

  if (resume[3] !== undefined) {
    Mitsubishi = [
      {
        title: resume[3].title,
        date: resume[3].date,
        location: resume[3].location,
        sub: resume[3].sub,
        one: resume[3].one,
        two: resume[3].two,
        three: resume[3].three,
      },
    ];
  }
  if (resume[4] !== undefined) {
    first = [
      {
        title: resume[4].title,
        name: resume[4].name,
        date: resume[4].date,
        location: resume[4].location,
        tech: resume[4].tech,
        sub: resume[4].sub,
        one: resume[4].one,
        two: resume[4].two,
        three: resume[4].three,
      },
    ];
  }
  if (resume[5] !== undefined) {
    second = [
      {
        title: resume[5].title,
        name: resume[5].name,
        tech: resume[5].tech,
        date: resume[5].date,
        location: resume[5].location,
        sub: resume[5].sub,
        one: resume[5].one,
        two: resume[5].two,
        three: resume[5].three,
      },
    ];
  }
  if (resume[6] !== undefined) {
    third = [
      {
        title: resume[6].title,
        date: resume[6].date,
        name: resume[6].name,
        tech: resume[6].tech,
        location: resume[6].location,
        sub: resume[6].sub,
        one: resume[6].one,
        two: resume[6].two,
        three: resume[6].three,
      },
    ];
  }
  if (resume[7] !== undefined) {
    fourth = [
      {
        title: resume[7].title,
        date: resume[7].date,
        name: resume[7].name,
        tech: resume[7].tech,
        location: resume[7].location,
        sub: resume[7].sub,
        one: resume[7].one,
        two: resume[7].two,
      },
    ];
  }
  if (resume[8] !== undefined) {
    fifth = [
      {
        title: resume[8].title,
        date: resume[8].date,
        name: resume[8].name,
        tech: resume[8].tech,
        location: resume[8].location,
        sub: resume[8].sub,
        one: resume[8].one,
        two: resume[8].two,
        three: resume[8].three,
      },
    ];
  }

  if (resume[9] !== undefined) {
    Freelance = [
      {
        title: resume[9].title,
        date: resume[9].date,
        location: resume[9].location,
        sub: resume[9].sub,
        one: resume[8].one,
        two: resume[9].two,
        three: resume[9].three,
        four: resume[9].four,
        five: resume[9].five,
        six: resume[9].six,
        seven: resume[9].seven,
        eight: resume[9].eight,
      },
    ];
  }

  return (
    <div className="app">
      <TopBar />
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
