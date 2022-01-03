import { useCallback } from 'react';
import './topbar.scss';
import { Person, Mail } from '@material-ui/icons/';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Topbar({ menuOpen, setMenuOpen }) {
  const { t, i18n } = useTranslation();

  const handleClick = useCallback((lang) => {
    i18n.changeLanguage(lang);
  }, []);

  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Alexandre <span>Marolleau</span>
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+33 6 59 08 60 95</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>alexandre.marolleau@hotmail.fr</span>
          </div>
          <div className="itemContainer">
            <button onClick={() => handleClick('en')}>English</button>
            <button onClick={() => handleClick('fr')}>French</button>
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
    </div>
  );
}
