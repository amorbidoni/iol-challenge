import React, { useEffect } from 'react';
import { useApi } from '../../services/useApi';
import { Pagination } from '../pagination/Pagination';
import { CharacterList } from './CharacterList';
import './characterListContainer.scss';
export const CharactersListContainer = () => {
  const baseUrl = 'https://rickandmortyapi.com/api/character';
  const {
    characters,
    loading,
    info,
    getAllCharacters,
    setLoading,
    getNextPage,
    getPreviousPage,
  } = useApi();

  useEffect(() => {
    setLoading(true);
    getAllCharacters(baseUrl);
  }, []);

  const handleNextPage = () => {
    setLoading(true);
    getNextPage(info.next);
  };
  const handlePreviousPage = () => {
    setLoading(true);
    getPreviousPage(info.prev);
  };

  return (
    <div>
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        nextPage={info.next}
        previousPage={info.prev}
      />
      {loading ? (
        <p>cargando.. </p>
      ) : (
        <>
          <section className="item-list-container">
            <CharacterList characters={characters} />
          </section>
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            nextPage={info.next}
            previousPage={info.prev}
          />
        </>
      )}
    </div>
  );
};
