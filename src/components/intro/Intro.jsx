import './intro.scss';
import {init} from 'ityped';
import React, {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';

export default function Intro() {
  const {t} = useTranslation();
  const textRef = useRef();
  const textRef2 = useRef();

  useEffect(() => {
    init(textRef2.current, {
      showCursor: true,
      backDelay: 3000,
      backSpeed: 300,
      strings: ['EPFL', 'Lausanne']
    });
  }, []);

  return (<div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="assets/profil.png" alt=""/>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>{t('Intro.1')}</h2>
        <h1>Alexandre Marolleau</h1>
        <h3>
          {t('Intro.2')}<span ref={textRef}/>
        </h3>
        <h3>
          {t('Intro.3')}<span ref={textRef2}/>
        </h3>
      </div>
      <a href="#contact">
        <img src="assets/down.png" alt=""/>
      </a>
    </div>
  </div>);
}
