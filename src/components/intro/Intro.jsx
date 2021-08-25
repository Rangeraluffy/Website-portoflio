import "./intro.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2500,
      backSpeed:40,
      strings: ["Meticulous", "Independent", "Skilful", "Enthusiast", "Passionate"],
    });
  }, []);

  const textRef2 = useRef();

  useEffect(() => {
    init(textRef2.current, {
      showCursor: true,
      backDelay: 3000,
      backSpeed:300,
      strings: ["EPFL", "Lausanne"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profil.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Alexandre Marolleau</h1>
          <h3>Student <span ref={textRef}></span></h3>
          <h3>Learn at <span ref={textRef2}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
