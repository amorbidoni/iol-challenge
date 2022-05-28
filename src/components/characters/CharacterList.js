import React from 'react';
import { CharacterItem } from './CharacterItem';
import './characterList.scss';
export const CharacterList = ({ characters }) => {
  return (
    <div className="item-list">
      {characters.map((c) => (
        <CharacterItem character={c} key={`${c.name}-${c.id}`} />
      ))}
    </div>
  );
};
