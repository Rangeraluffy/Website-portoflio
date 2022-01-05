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
    <div classname="teams" id="teams">
           <h1 classname="title">{t('Teams.6')}</h1>
             <div classname="services_section">
               <div className="image-wrapper">
                 <img src="assets/wordcloud.png" alt="" />
               </div>
             </div>
           </div>
  );
}
