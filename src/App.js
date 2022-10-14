import "./app.css";
import { useEffect, useState } from "react";
import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
export let school = [{
  title: " ",
  date: " ",
  location: " ",
  sub:" ",
  one: " ",
  }];
export let RBI =[{
  title: " ",
  date: " ",
  location: " ",
  sub: " ",
  one: " ",
  two: " ",
  three: " ",
}];
export let skills =[{
  title: " ",
  date: " ",
  location: " ",
  sub: " ",
  one: " ",
  two: " ",
  three: " ",
}];
export let Mitsubishi=[{
  title: " ",
  date: " ",
  location: " ",
  sub: " ",
  one: " ",
  two: " ",
  three: " ",
}];
export let first =[{
  title: " ",
  date: " ",
  location: " ",
  sub: " ",
  one: " ",
  two: " ",
  three: " ",
}]; 
export let second =[{
  title: " ",
  date: " ",
  location: " ",
  sub: " ",
  one: " ",
  two: " ",
  three: " ",
}];
export let third =[{
  title: " ",
  date: " ",
  location: " ",
  sub: " ",
  one: " ",
  two: " ",
  three: " ",
}];
export let fourth=[{
  title: " ",
  date: " ",
  location: " ",
  sub: " ",
  one: " ",
  two: " ",
  three: " ",
}];
export let fifth=[{
  title: " ",
  date: " ",
  location: " ",
  sub: " ",
  one: " ",
  two: " ",
  three: " ",
}];

function App() {
  const [resume,setRes] = useState([
    {
    title: "",
    date: "",
    location: "",
    sub: "",
    one: "",
    two: "",
    three: "",
    four:"",
    }
  ])
  useEffect(()=>{
    fetch("https://thanushanportfolio.herokuapp.com")
      .then((res) => res.json())
      .then((jsonRes) => setRes(jsonRes));
  }, []);

  useEffect(()=>{
    console.log(resume);
  },[resume]);
  
  school = [
        {
          title: resume[0].title,
          date: resume[0].date,
          location: resume[0].location,
          sub: resume[0].sub,
          one: resume[0].one
        }
    ];
    if (resume[1] !== undefined){
      RBI =[{
          title: resume[1].title,
          date: resume[1].date,
          location: resume[1].location,
          sub: resume[1].sub,
          one: resume[1].one,
          two: resume[1].two,
          three: resume[1].three
        }];
  }

  if (resume[2] !==undefined){
    skills =[{
      title: resume[2].title,
      date: resume[2].date,
      location: resume[2].location,
      sub: resume[2].sub,
      one: resume[2].one,
      two: resume[2].two,
      three: resume[2].three
    }];
  }

  if (resume[3] !==undefined){
    Mitsubishi =[{
      title: resume[3].title,
      date: resume[3].date,
      location: resume[3].location,
      sub: resume[3].sub,
      one: resume[3].one,
      two: resume[3].two,
      three: resume[3].three,
    }];
  }
  if (resume[4] !==undefined){
    first =[{
      title: resume[4].title,
      date: resume[4].date,
      location: resume[4].location,
      sub: resume[4].sub,
      one: resume[4].one,
      two: resume[4].two,
      three: resume[4].three,
    }];
  }
  if (resume[5] !==undefined){
    second =[{
      title: resume[5].title,
      date: resume[5].date,
      location: resume[5].location,
      sub: resume[5].sub,
      one: resume[5].one,
      two: resume[5].two,
      three: resume[5].three,
    }];
  }
  if (resume[6] !==undefined){
    third =[{
      title: resume[6].title,
      date: resume[6].date,
      location: resume[6].location,
      sub: resume[6].sub,
      one: resume[6].one,
      two: resume[6].two,
      three: resume[6].three,
    }];
  }
  if (resume[7] !==undefined){
    fourth =[{
      title: resume[7].title,
      date: resume[7].date,
      location: resume[7].location,
      sub: resume[7].sub,
      one: resume[7].one,
      two: resume[7].two,
    }];
  }
  if (resume[8] !==undefined){
    fifth =[{
      title: resume[8].title,
      date: resume[8].date,
      location: resume[8].location,
      sub: resume[8].sub,
      one: resume[8].one,
      two: resume[8].two,
      three: resume[8].three,
    }];
  }

  return (
    <div className="app">
      <TopBar/>
      <div className="sections">
        <Intro/> 
        <Resume/>
        <Projects/>   
      </div>
    </div>
  );
}

export default App;
