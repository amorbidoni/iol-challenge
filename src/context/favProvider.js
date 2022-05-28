import React, { useContext, useState, createContext, useEffect } from 'react';

export const FavContext = createContext();

export const useFavContext = () => {
  return useContext(FavContext);
};

export const FavProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem('favourites')) || []
  );
  //
  //  Loacale storage
  //
  //
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addFav = (fav) => {
    setFavourites([...favourites, fav]);
  };

  const deleteFav = (id) => {
    let fav = favourites.filter((x) => x.id !== id);

    setFavourites([...fav]);
  };

  return (
    <FavContext.Provider value={{ addFav, deleteFav, favourites }}>
      {children}
    </FavContext.Provider>
  );
};
