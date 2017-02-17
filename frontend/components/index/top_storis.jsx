import React from 'react';
import { Link } from 'react-router';
import { values } from 'lodash';

const TopStoris = ({ storis }) => {
  const StoriItems = () => (
    values(storis).map((stori, i) => (
      <li key={stori.id}>
        <Link to={`storis/${stori.id}`}>
          <div>
            <h3>{i}</h3>
          </div>
          <div>
            <h3>{stori.title}</h3>
            <h5>{stori.author}</h5>
          </div>
        </Link>
      </li>
    ))
  );
  return (
    <ul className="stori-table">
      { StoriItems() }
    </ul>
  );
};


export default TopStoris;
