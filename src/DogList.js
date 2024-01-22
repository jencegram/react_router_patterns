import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  return (
    <div className="dog-list-container">
      <ul>
        {dogs.map(dog => (
          <li key={dog.name} className="dog-item">
            <h2>{dog.name}</h2>
            <img src={dog.src} alt={dog.name} className="dog-image" />
            <Link to={`/dogs/${dog.name.toLowerCase()}`} className="view-dog-link">View {dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;