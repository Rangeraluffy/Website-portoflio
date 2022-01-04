import './teams.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintBrush,
  faCodeBranch,
  faLayerGroup,
  faMobileAlt,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Teams() {
  const { t } = useTranslation();
  return (
    <div className="teams" id="teams">
      <h1 className="title"> Teams Working </h1>
      <div className="services_section">
        <div className="inner_width">
          <div className="services_container">
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faPaintBrush}></FontAwesomeIcon>
              </div>
              <div className="service_title">Web Designs</div>
              <div className="service_descr">
                {t('Teams.1')}
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faPaintBrush}></FontAwesomeIcon>
              </div>
              <div className="service_title">Web Development</div>
              <div className="service_descr">
                {t('Teams.2')}
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faCodeBranch}></FontAwesomeIcon>
              </div>
              <div className="service_title">Team Working</div>
              <div className="service_descr">
                {t('Teams.3')}
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faBuilding}></FontAwesomeIcon>
              </div>
              <div className="service_title">Team Building</div>
              <div className="service_descr">
                {t('Teams.4')}
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faLayerGroup}></FontAwesomeIcon>
              </div>
              <div className="service_title">Web Designs</div>
              <div className="service_descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faMobileAlt}></FontAwesomeIcon>
              </div>
              <div className="service_title">Responsive Designs</div>
              <div className="service_descr">
                {t('Teams.5')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
