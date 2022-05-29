import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { useApi } from '../../services/useApi';
import { Loader } from '../loader/Loader';
import { Pagination } from '../pagination/Pagination';
import { CharacterList } from './CharacterList';
import './characterListContainer.scss';
export const CharactersListContainer = () => {
  // dependencias
  const {
    characters,
    loading,
    info,
    getAllCharacters,
    setLoading,
    getNextPage,
    getPreviousPage,
  } = useApi();
  const [form, handleInputChange] = useForm({
    searchBar: '',
  });
  //

  const baseUrl = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    setLoading(true);
    getAllCharacters(baseUrl);
  }, []);
  //
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
      <div className="search-bar">
        <input
          className="search-bar__item"
          type="text"
          placeholder="Buscar..."
          onChange={handleInputChange}
          value={form.searchBar}
          name="searchBar"
        ></input>
      </div>
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        nextPage={info.next}
        previousPage={info.prev}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="item-list-container">
            <CharacterList
              characters={characters}
              searchText={form.searchBar.toLowerCase()}
            />
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
