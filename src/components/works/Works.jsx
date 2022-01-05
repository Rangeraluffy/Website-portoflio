import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faCss3,
  faPhp,
  faJs,
  faHtml5,
  faReact,
  faNode,
  faWordpress,
  faGitlab
} from '@fortawesome/free-brands-svg-icons';
import {faStar as faStarRegular, faGem} from '@fortawesome/free-regular-svg-icons';
import {faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import './works.scss';
import {useTranslation} from 'react-i18next';

library.add(faStarRegular);

export default function Works() {
  const {t} = useTranslation();
  
  return (<div className="skills" id="skills">
    <h1 className="title">{t('Skills.1')}</h1>
    <div className="section">
      <div className="container">
        <div className="wall">
          <div className="v-boxes">
            <div className="box">
              <span className="tooltip">CSS</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon className="svg_path" icon={faCss3}></FontAwesomeIcon>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">JavaScript</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Node JS</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faNode}></FontAwesomeIcon>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">WordPress</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faWordpress}></FontAwesomeIcon>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes second">
            <div className="box">
              <span className="tooltip">HTML</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">PHP</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">GitLab</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faGitlab}></FontAwesomeIcon>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStarHalfAlt}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes third">
            <div className="box">
              <span className="tooltip">Ruby ROR</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faGem}></FontAwesomeIcon>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">React</span>
              <div className="box-face">
                <div className="box-text">
                  <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={['far', 'star']}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes forth">
            <div className="box link">
              <div className="box-face">
                <div className="box-text">
                  <a href="https://github.com/Rangeraluffy" target="_blank">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}
