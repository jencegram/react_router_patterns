import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <h2>Dog not found!</h2>;
  }

  return (
    <div className="dog-container">
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} className="dog-image" />
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
