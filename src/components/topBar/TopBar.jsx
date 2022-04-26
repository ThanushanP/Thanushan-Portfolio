import "./topbar.css"

export default function TopBar() {
  return (
    <div className='topBar'>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Thanushan Pirapakaran</a>
            </div>
            <div className="right">
                <a href="#intro" className="menu">Home</a>
                <a href="#resume" className="menu">Resume</a>
                <a href="#projects" className="menu">Projects</a>
                <a href="https://www.linkedin.com/in/thanushan-pirapakaran-790144212/" target="_blank" className="menu">LinkedIn</a>
                <a href="https://github.com/ThanushanP" target="_blank" className="menu">GitHub</a>
            </div>
        </div>
    </div>
  )
}
