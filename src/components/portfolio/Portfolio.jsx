import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {allPortfolio, schoolPortfolio, personnalPortfolio, webPortfolio} from "../../data";


export default function Portfolio() {
  const [selected,setSelected] = useState("all");
  const [data,setData] = useState([]);
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

  useEffect(()=>{
    switch(selected){
      case "all":
      setData(allPortfolio);
      break;
      case "school":
      setData(schoolPortfolio);
      break;
      case "personal":
      setData(personnalPortfolio);
      break;
      case "web":
      setData(webPortfolio);
    }
  },[selected])

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
          {data.map((d)=> (
            <div className="item">
              <img src={d.img} alt=""/>
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
    </div>
)
}
