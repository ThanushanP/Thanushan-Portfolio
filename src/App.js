import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import "./app.css"


function App() {
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
