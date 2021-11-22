import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"

export default function Portfolio() {
  const [selected,setSelected] = useState("all")
  const list = [
    {
      id: "all",
      title: "All"
    },
    {
      id: "school",
      title: "School Project"
    },
    {
      id: "personal",
      title: "Personnal Project"
    },
    {
      id: "web",
      title: "Web application"
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) =>(
        <PortfolioList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
        <div className="container">
          <div className="item">
            <img src="assets/project.webp" alt=""/>
            <h3>Web application</h3>
          </div>
          <div className="item">
            <img src="assets/project2.webp" alt=""/>
              <h3>Personnal Application</h3>
          </div>
          <div className="item">
            <img src="assets/project3.webp" alt=""/>
              <h3>School Project</h3>
          </div>
        </div>
    </div>
)
}
