import './about.scss';
import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 40,
      strings: [t('Intro.1'), 'Looking for a new', 'Job']
    });
  }, [t]);

  return (
    <div className="about" id="about">
      <div className="max-width">
        <div className="container">
          <h1 className="title">About me</h1>
          <div className="about-content">
            <div className="column left">
              <img src="assets/profil.png" alt="" />
            </div>
            <div className="column right">
              <div className="text">
                I&apos;m Alexandre and I
                <span ref={textRef} />
              </div>
              <p>
                Hello there my Name is Alexandre Marolleau I am 26 years. Originaly from
                Haute-Savoie. I looking a new opportunity in Web developmen.Holder of a Bachelor in
                Game Design acquired at Bellecour Ecole (Lyon – France), Recently graduated at the
                Ecole Polytechnique Fédérale de Lausanne (EPFL) Extension School with a
                specialisation in web development application to obtain my Certificate of Open
                Studies (COS).
              </p>
              <a href="/assets/CV_Alexandre_Marolleau_EN.pdf" target="_blank">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
