import { useState } from 'react';

export const useApi = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);

  ///////////////////////
  // GET ALL
  const getAllCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setCharacters(response.results.slice(0, 15));
        setInfo(response.info);
        setLoading(false);
      })
      .catch((err) => {
        throw new Error(`Error en la peticion getNextPage: ${err}`);
      });
  };
  ///////////////////////
  // GET NEXT
  const getNextPage = (url) => {
    getAllCharacters(url);
  };

  ///////////////////////
  // GET PREVIOUS
  const getPreviousPage = async (url) => {
    getAllCharacters(url);
  };
  //
  return {
    characters,
    loading,
    info,
    getAllCharacters,
    setLoading,
    getNextPage,
    getPreviousPage,
  };
};
