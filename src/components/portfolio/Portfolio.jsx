/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import './portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import PortfolioList from '../portfolioList/PortfolioList';
import allPortfolio from '../../data';

export default function Portfolio() {
  const { i18n } = useTranslation();

  const [portfolioModalState, setPortfolioModalState] = useState({
    open: false,
    data: null
  });

  const togglePortfolio = useCallback(
    (data) => {
      setPortfolioModalState({ open: !portfolioModalState.open, data });
    },
    [setPortfolioModalState, portfolioModalState.open]
  );

  const openPortfolioModal = useCallback((data) => {
    setPortfolioModalState({ open: true, data });
  }, []);

  const closePortfolioModal = useCallback(() => {
    setPortfolioModalState({
      open: false,
      data: null
    });
  }, []);

  useEffect(() => {
    if (portfolioModalState.open) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [portfolioModalState.open]);

  const [selected, setSelected] = useState('all');
  const [data, setData] = useState([]);
  const menuData = useMemo(
    () => [
      {
        id: 'all',
        title: 'All'
      },
      {
        id: 'school',
        title: 'School Project'
      },
      {
        id: 'personal',
        title: 'Personnal Project'
      },
      {
        id: 'web',
        title: 'Web application'
      }
    ],
    []
  );

  useEffect(() => {
    if (selected === 'all') {
      setData(allPortfolio);
    } else {
      setData(allPortfolio.filter((item) => item.category === selected));
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="title">Portfolio</h1>
      <ul>
        {menuData.map((menuItem) => (
          <PortfolioList
            key={`portfolio-list-${menuItem.id}`}
            title={menuItem.title}
            active={selected === menuItem.id}
            setSelected={setSelected}
            id={menuItem.id}
          />
        ))}
      </ul>

      {portfolioModalState.open ? (
        <div className="modal_portfolio">
          <div onClick={closePortfolioModal} className="overlay" />
          <div className="modal_content">
            <div className="modal_details">
              <h1>{portfolioModalState.data.languages[i18n.language].title}</h1>
              <h2>{portfolioModalState.data.github}</h2>
              <a href={portfolioModalState.data.url} target="_blank">{portfolioModalState.data.languages[i18n.language].clickLink}</a>
              <p className="modal_description">
                {portfolioModalState.data.languages[i18n.language].description}
              </p>
              <a href={portfolioModalState.data.gitHub} target="_blank">{portfolioModalState.data.languages[i18n.language].clickGit}</a>
            </div>
            <h1>{portfolioModalState.data.languages[i18n.language].firstTitleModal}</h1>
            <p className="modal_text">
              {portfolioModalState.data.languages[i18n.language].firstDescription}
            </p>
            <h1>{portfolioModalState.data.languages[i18n.language].projectGoal}</h1>
            <div className="modal_project_goal">
              <li className="modal_text">
                {portfolioModalState.data.languages[i18n.language].projectGoal1}
              </li >
              <li className="modal_text">
                {portfolioModalState.data.languages[i18n.language].projectGoal2}
              </li >
              <li className="modal_text">
                {portfolioModalState.data.languages[i18n.language].projectGoal3}
              </li >
              <li className="modal_text">
                {portfolioModalState.data.languages[i18n.language].projectGoal4}
              </li >
            </div>
            <button type="button" className="close_modal" onClick={togglePortfolio}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      ) : null}
      <div className="container2">
        {data.map((d) => (
          <div key={`data-portfolio-${d.id}`} className="card_portfolio">
            <h1 className="title_portfolio">{d.languages[i18n.language].title}</h1>
            <div className="cta-links">
              <button
                type="button"
                onClick={() => {
                  openPortfolioModal(d);
                }}
                className="btn-portfolio"
              >
                En savoir plus
              </button>
              <p className="tools">{d.tools}</p>
            </div>

            <img src={d.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
