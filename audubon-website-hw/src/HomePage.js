import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ listOfBirds }) => {
  return (
    <div className='homepage-container'>
      <h1>Birds</h1>
      <ul className='bird-container'>
        {listOfBirds.map((bird) => (
          <li key={bird.name}>
            <Link to={`/birds/${bird.id}`}>
              <img src={bird.image} alt={bird.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
