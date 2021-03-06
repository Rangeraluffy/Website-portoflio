import React from 'react';
import {useTranslation} from 'react-i18next';
import './menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {

  const {t} = useTranslation();

  return (<div className={'menu ' + (
    menuOpen && 'active')}>
    <ul>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#intro">Home</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#about">{t('Menu.1')}</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#skills">{t('Menu.3')}</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#contact">{t('Contact.1')}</a>
      </li>
    </ul>
  </div>);
}
