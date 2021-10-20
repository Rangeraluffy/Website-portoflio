import "./portfolioList.scss"
import Portfolio from "../portfolio/Portfolio";
import { portfolio } from "../../data";

const PortfolioList = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div class="max-width">
        <div class="container">
          <div className="pl">
            <h1 class="title">Portfolio</h1>
              <div className="pl-texts">
                <h1 className="pl-title">This is my personal project or school project</h1>
                <p className="pl-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="pl-list">
                {portfolio.map(item=>(
                  <Portfolio key={item.id} img={item.img} link={item.link} />
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList
