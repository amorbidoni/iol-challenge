import React from 'react';
import { useFavContext } from '../../context/favProvider';
import { CharacterList } from './CharacterList';

export const FavouritesCharactersContainer = () => {
  const { favourites } = useFavContext();
  return (
    <div>
      <section className="item-list-container">
        <CharacterList characters={favourites} searchText={''} />
      </section>
    </div>
  );
};
