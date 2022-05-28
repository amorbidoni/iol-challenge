import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';
export const NavBar = () => {
  const handleScroll = (e) => {
    console.log(e);
  };
  return (
    <nav id="nav-bar" className="nav-bar" onScroll={handleScroll}>
      <ul className="nav-bar__box">
        <li className="nav-bar__item">
          <Link to={'/'}>Inicio</Link>
        </li>
        <li className="nav-bar__item">
          <Link to={'/favourites'}>Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};
