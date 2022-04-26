import "./resume.css"
import {school, RBI, skills, Mitsubishi}from "../../ResumeData";


export default function Resume() {
  return (
    <div className='resume' id="resume">
        <h1>Resume</h1>
          <ul className="container">
            <li className="list">
              <h2>Education</h2>
                {school.map(item=>(
                  <div className="body">
                    <h3 className="title">{item.title}</h3>
                    <h3 className="sub">{item.sub}</h3>
                    <h3 className="small">{item.date}</h3>
                    <h3 className="small">{item.location}</h3>
                    <ul>
                      <li>{item.one}</li>
                      <li> </li>
                    </ul>
                  </div>
                ))}
                <h2>Technical Skills</h2>
              {skills.map(item=>(
                  <div className="body">
                    <ul>
                      <li>{item.one}</li>
                      <li>{item.two}</li>
                    </ul>
                  </div>
                ))}
            </li>
            <li className="list">
              <h2>Work Experiance</h2>
              {RBI.map(item=>(
                  <div className="body">
                    <h3 className="title">{item.title}</h3>
                    <h3 className="sub">{item.sub}</h3>
                    <h3 className="small">{item.date}</h3>
                    <h3 className="small">{item.location}</h3>
                    <ul>
                      <li>{item.one}</li>
                      <li>{item.two}</li>
                      <li>{item.three}</li>
                    </ul>
                  </div>
                ))}
            </li>
            <li className="list">
            {Mitsubishi.map(item=>(
                  <div className="body">
                    <h3 className="title">{item.title}</h3>
                    <h3 className="sub">{item.sub}</h3>
                    <h3 className="small">{item.date}</h3>
                    <h3 className="small">{item.location}</h3>
                    <ul>
                      <li>{item.one}</li>
                      <li>{item.two}</li>
                      <li>{item.three}</li>
                      <li>{item.four}</li>
                    </ul>
                  </div>
                ))}
            </li>
          </ul>
    </div>
  )
}
