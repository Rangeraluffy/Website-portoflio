
import "./portfolio.scss"

export default function Portfolio() {

  // const list = [
  //   {
  //     id: "personal",
  //     title: "Gravizen"
  //   },
  //   {
  //     id: "School",
  //     title: "Ruby On Rails"
  //   },
  //   {
  //     id: "personal",
  //     title: "React"
  //   },
  // ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>All</li>
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
