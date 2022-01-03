import React from 'react';
import './portfoliolist.scss';

export default function portfolioList({ id, title, active, setSelected }) {
  return (
    <li className={active ? 'portfolioList active' : 'portfolioList '}>
      <a href="/#" onClick={() => setSelected(id)}>
        {title}
      </a>
    </li>
  );
}
