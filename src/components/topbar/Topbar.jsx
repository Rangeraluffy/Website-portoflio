import {useCallback} from 'react';
import './topbar.scss';
import {Mail} from '@material-ui/icons/';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

export default function Topbar({menuOpen, setMenuOpen}) {
  const {i18n} = useTranslation();

  const handleClick = useCallback((lang) => {
    i18n.changeLanguage(lang);
  }, []);

  return (<div className={'topbar ' + (
    menuOpen && 'active')}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">
          Alexandre
          <span>Marolleau</span>
        </a>
        <div className="itemContainer">
          <Mail className="icon"/>
          <span>alexandre.web.dev.74@gmail.com</span>
        </div>
        <div className="top_bar_langages">
          <button className="btn_top_bar" onClick={() => handleClick('en')}>English</button>
          <button className="btn_top_bar" onClick={() => handleClick('fr')}>French</button>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  </div>);
}
