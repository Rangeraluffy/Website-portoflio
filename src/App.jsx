import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Portfolio/>
        <Works/>
      </div>
    </div>
  );
}

export default App;
