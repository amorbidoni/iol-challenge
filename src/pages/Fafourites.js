import React from 'react';
import { FavouritesCharactersContainer } from '../components/characters/FavouritesCharactersContainer';
import { Footer } from '../components/footer/Footer';
import './favourites.scss';
export const Fafourites = () => {
  return (
    <div className="favourites">
      <div className="favourites__main">
        <FavouritesCharactersContainer />
      </div>
      <Footer />
    </div>
  );
};
