import React, { useEffect } from 'react';

import { CharacterItem } from './CharacterItem';
import './characterList.scss';
export const CharacterList = ({ characters, searchText }) => {
  const filteredData = characters.filter((el) => {
    if (searchText === '') {
      return el;
    } else {
      return el.location.name.toLowerCase().includes(searchText);
    }
  });

  return (
    <div className="item-list">
      {filteredData.length !== 0 ? (
        filteredData.map((c) => (
          <CharacterItem character={c} key={`${c.name}-${c.id}`} />
        ))
      ) : (
        <div>
          <p className="alert-msg">Sin resultados en esta página...</p>
        </div>
      )}
    </div>
  );
};
