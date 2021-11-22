import "./portfoliolist.scss"

export default function portfolioList({title,active,setSelected }) {
  return (
    <li className={active ? "portfolioList active" :  "portfolioList "}>
      {title}
    </li>
  )
}
