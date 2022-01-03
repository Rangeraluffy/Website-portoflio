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

export default function Teams() {
  return (
    <div className="teams" id="teams">
      <h1> Teams Working </h1>
      <div className="services_section">
        <div className="inner_width">
          <div className="services_container">
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faPaintBrush}></FontAwesomeIcon>
              </div>
              <div className="service_title">Web Designs</div>
              <div className="service_descr">
                Web design are a quality for me in Game design i used a lot UI UX for game
                development and use some tools like photoshop. So i have a good perception to create
                a design.
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faPaintBrush}></FontAwesomeIcon>
              </div>
              <div className="service_title">Web Development</div>
              <div className="service_descr">
                Learned during my years of Web application with the EPFL , on 5 project , how to
                start how to think, how to solve some problems.
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faCodeBranch}></FontAwesomeIcon>
              </div>
              <div className="service_title">Team Working</div>
              <div className="service_descr">
                Professional team working with my experiences in Real Estate. Communicate with the
                team about property to sell , prospecting in team , help others sellers on difficult
                contract.
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faBuilding}></FontAwesomeIcon>
              </div>
              <div className="service_title">Team Building</div>
              <div className="service_descr">
                Working with team during my 3 years of Bachelor Game design with a lead on all
                project.
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faLayerGroup}></FontAwesomeIcon>
              </div>
              <div className="service_title">Web Designs</div>
              <div className="service_descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem{' '}
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">
                <FontAwesomeIcon className="icon_top" icon={faMobileAlt}></FontAwesomeIcon>
              </div>
              <div className="service_title">Responsive Designs</div>
              <div className="service_descr">
                Because the smartphone has become our first screen, a mobile-optimized website is
                one of the best practices in digital marketing. This is the first thing i learned
                during my studies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
