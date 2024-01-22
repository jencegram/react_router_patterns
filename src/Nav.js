// src/Nav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Nav = ({ dogs }) => {
  return (
    <nav>
      <ul>
        {dogs.map(dog => (
          <li key={dog.name}>
            <NavLink
              to={`/dogs/${dog.name.toLowerCase()}`}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              {dog.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
