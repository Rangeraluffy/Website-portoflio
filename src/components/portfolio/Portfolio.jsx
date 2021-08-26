import { useEffect, useState } from "react";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import {
  allProject,
  webPortfolio,
  personalProject,
  schoolProject,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All project",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "Personal Project",
    },
    {
      id: "school",
      title: "School project",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allProject);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(personalProject);
        break;
      case "school":
        setData(schoolProject);
        break;
      default:
        setData(allProject);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
