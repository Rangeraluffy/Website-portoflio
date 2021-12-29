import "./intro.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Intro() {
  const { t, i18 } = useTranslation();
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2500,
      backSpeed:40,
      strings: ["Meticulous", "Independent", "Pragmatic", "Enthusiast", "Passionate", "Autonomous"],
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
          <h2>{t('Intro.1')}</h2>
          <h1>Alexandre Marolleau</h1>
          <h3>I am <span ref={textRef}></span></h3>
          <h3>Graduated from <span ref={textRef2}></span></h3>
        </div>
        <a href="#contact">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
