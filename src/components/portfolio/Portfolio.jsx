import { useEffect, useState, useMemo, useCallback } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {allPortfolio} from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from '@fortawesome/free-solid-svg-icons';


export default function Portfolio() {

  const [portfolioModalState, setPortfolioModalState] = useState({
    open: false,
    data: null,
  });

  const togglePortfolio = useCallback((data) => {
    setPortfolioModalState({open: !portfolioModalState.open, data: data});
  }, [setPortfolioModalState, portfolioModalState.open]);

  const openPortfolioModal = useCallback((data) => {
    setPortfolioModalState({open: true, data: data})
  }, []);

  const closePortfolioModal = useCallback(() => {
    setPortfolioModalState({
      open: false,
      data: null,
    })
  }, []);

  useEffect(() => {
    if(portfolioModalState.open) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  }, [portfolioModalState.open]);

  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const menuData = useMemo(() => [
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
  ], []);

  useEffect(()=>{
    if(selected === 'all'){
      setData(allPortfolio);
    }
    else {
      setData(allPortfolio.filter((item) => item.category === selected));
    }
  },[selected]);

  return (

    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {menuData.map((menuItem) =>(
        <PortfolioList
          title={menuItem.title}
          active={selected === menuItem.id}
          setSelected={setSelected}
          id={menuItem.id}
          />
        ))}
      </ul>

      {portfolioModalState.open ? (
        <div className="modal_portfolio">
          <div onClick={closePortfolioModal} className="overlay"></div>
          <div className="modal_content">
            <div class="modal_details">
              <h1>{portfolioModalState.data.title}</h1>
              <p class="modal_description">{portfolioModalState.data.description}</p>
            </div>

            <p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.</p>
            <button className="close_modal" onClick={togglePortfolio}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      ) : null}
        <div className="container2">
          {data.map((d)=> (
            <div className="card_portfolio">
              <h1 className="title_portfolio">{d.title}</h1>
              <div className="cta-links">
                <button onClick={() => {
                    openPortfolioModal(d);
                  }} className="btn-portfolio">En savoir plus ></button>
                <p>{d.description}</p>
              </div>
              <p className="formation_portfolio">{d.formation}</p>
              <img src={d.img} alt=""/>
            </div>
          ))}
        </div>
    </div>
)
}
