import './about.scss';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function About() {
  const {t} = useTranslation();

  return (<div className="about" id="about">
    <div className="max-width">
      <div className="container">
        <h1 className="title">{t('About.1')}</h1>
        <div className="about-content">
          <div className="column left">
            <img src="assets/about.png" alt=""/>
          </div>
          <div className="column right">
            <div className="text">
              {t('About.2')}
              <span>{t('About.3')}</span>
            </div>
            <p>
              {t('About.4')}.
            </p>
            <a href="/assets/CV_Alexandre_Marolleau_EN.pdf" target="_blank">{t('About.5')}</a>
          </div>
        </div>
      </div>
    </div>
  </div>);
}
