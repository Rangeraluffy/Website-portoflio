import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Personal Project</li>
        <li>Project School</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&uspq=CAU" alt=""/>
          <h3>Project</h3>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&uspq=CAU" alt=""/>
          <h3>Project</h3>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&uspq=CAU" alt=""/>
          <h3>Project</h3>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&uspq=CAU" alt=""/>
          <h3>Project</h3>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&uspq=CAU" alt=""/>
          <h3>Project</h3>
        </div>
      </div>
    </div>
  )
}
