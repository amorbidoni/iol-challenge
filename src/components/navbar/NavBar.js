import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../assets/images';
import './navBar.scss';

export const NavBar = () => {
  const handleScroll = (e) => {
    console.log(e);
  };
  return (
    <nav id="nav-bar" className="nav-bar" onScroll={handleScroll}>
      <div className="nav-bar__logo">
        <NavLink to={'/'}>
          <img alt="Logo Rick and morty" src={img.logo} />
        </NavLink>
      </div>
      <ul className="nav-bar__box">
        <li className="nav-bar__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-bar__item--link active' : 'nav-bar__item--link'
            }
            to={'/'}
          >
            Inicio
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-bar__item--link active' : 'nav-bar__item--link'
            }
            to={'/favourites'}
          >
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
