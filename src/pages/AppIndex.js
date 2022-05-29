import React from 'react';
import { CharactersListContainer } from '../components/characters/CharactersListContainer';
import { Footer } from '../components/footer/Footer';
import { NavBar } from '../components/navbar/NavBar';

import './index.scss';
export const AppIndex = () => {
  return (
    <div className="body">
      <div className="main">
        <CharactersListContainer />
      </div>
      <Footer />
    </div>
  );
};
