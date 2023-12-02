import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ShowPage.css'

const ShowBirdPage = ({ listOfBirds }) => {
  const { id } = useParams();
  const [birdDetails, setBirdDetails] = useState(null);

  useEffect(() => {
    const fetchBirdDetails = async () => {
      const bird = listOfBirds.find((bird) => bird.id === Number(id)); 
      setBirdDetails(bird);
    };

    fetchBirdDetails();
  }, [id, listOfBirds]);

  return (
    <div className='show-bird-page-container'>
      {birdDetails ? (
        <>
          <img className='show-bird-image' src={birdDetails.image} alt={birdDetails.name} />
          <div className='bird-details-copy'>
            <div className='bird-details-header'>
              <h1>{birdDetails.name}</h1>
              <p className='genus'>({birdDetails.genus})</p>
            </div>
            <div className='section'>
              <p className='section-header'>CONSERVATION STATUS</p>
              <p>{birdDetails.conservationStatus}</p>
            </div>
            <a href={birdDetails.homepage}>
              <button>Read More</button>
            </a>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ShowBirdPage;

