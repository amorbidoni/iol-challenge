import React, { useEffect, useState } from 'react';
import './character.scss';
import img from '../../assets/images';
import { useFavContext } from '../../context/favProvider';
export const CharacterItem = ({ character }) => {
  const { addFav, deleteFav, favourites } = useFavContext();
  const [favouriteIcon, setFavouriteIcon] = useState(false);
  let isInFavourites = favourites.some((x) => x.id === character.id);
  useEffect(() => {
    if (isInFavourites) {
      setFavouriteIcon(true);
    }
  }, []);

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
      />
      <div className="character-item__data">
        <p className="character-item__data--name">{character.name}</p>
        <p className="character-item__data--loaction-name">
          ★ {character.location.name}
        </p>
        <p className="character-item__data--gender">★ {character.gender}</p>
        <div className="character-item__favourites">
          {!favouriteIcon ? (
            <img
              className="star star--empty"
              src={img.starEmpty}
              onClick={() => {
                toggleFavourite(character, 'add');
              }}
            ></img>
          ) : (
            <img
              className="star star--full"
              src={img.starFull}
              onClick={() => {
                toggleFavourite(character, 'delete');
              }}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
};
