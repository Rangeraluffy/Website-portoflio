import "./topbar.scss"
import {Person, Mail} from '@material-ui/icons/';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">Alexandre Marolleau</a>
            <div className="itemContainer">
              <Person className="icon"/>
              <span>+33 6 59 08 60 95</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon"/>
              <span>alexandre.marolleau@hotmail.fr</span>
            </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
