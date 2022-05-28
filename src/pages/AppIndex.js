import React from 'react';
import { CharactersListContainer } from '../components/characters/CharactersListContainer';

import './index.scss';
export const AppIndex = () => {
  return (
    <div className="main">
      <CharactersListContainer />
    </div>
  );
};
