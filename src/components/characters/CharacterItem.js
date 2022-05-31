import React, { memo, useEffect, useState } from 'react';
import './character.scss';
import img from '../../assets/images';
import { useFavContext } from '../../context/favProvider';

//
export const CharacterItem = memo(({ character }) => {
  const { addFav, deleteFav, favourites } = useFavContext();
  const [favouriteIcon, setFavouriteIcon] = useState(false);
  let isInFavourites = favourites.some((x) => x.id === character.id);
  useEffect(() => {
    if (isInFavourites) {
      setFavouriteIcon(true);
    }
  }, [isInFavourites]);

  const toggleFavourite = (char, action) => {
    setFavouriteIcon(!favouriteIcon);

    switch (action) {
      case 'add':
        addFav(char);
        break;
      case 'delete':
        deleteFav(char.id);
        break;
      default:
        break;
    }
  };
  return (
    <div className="character-item">
      <img
        className={
          isInFavourites ? 'character-item__img fav' : 'character-item__img'
        }
        src={character.image}
        alt={character.name}
      />
      <div className="character-item__data">
        <p className="character-item__data--name">{character.name}</p>
        <p className="character-item__data--loaction-name">
          <span>✰</span> Location: {character.location.name}
        </p>
        <p className="character-item__data--gender">
          <span>✰</span> Origin: {character.origin.name}
        </p>
        <p className="character-item__data--gender">
          <span>✰</span> Status: {character.status}
        </p>
        <p className="character-item__data--gender">
          <span>✰</span> Species: {character.species}
        </p>
        <div className="character-item__favourites">
          {!favouriteIcon ? (
            <img
              className="star star--empty"
              src={img.starEmpty}
              onClick={() => {
                toggleFavourite(character, 'add');
              }}
              alt="agregar a favoritos"
            />
          ) : (
            <img
              className="star star--full"
              src={img.starFull}
              onClick={() => {
                toggleFavourite(character, 'delete');
              }}
              alt="eliminar de favoritos"
            />
          )}
        </div>
      </div>
    </div>
  );
});
