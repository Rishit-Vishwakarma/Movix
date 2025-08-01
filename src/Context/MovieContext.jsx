import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFaves = localStorage.getItem("favorites");
    if (storedFaves) setFavorites(JSON.parse(storedFaves));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorites = (movieId) => {
    setFavorites((prev) =>
      prev.filter((movie) => movie.imdbID !== movieId)
    );
  };

  const isFavorites = (movieId) => {
    return favorites.some((movie) => movie.imdbID === movieId);
  };

  const value = {
    favorites,
    addFavorites,
    removeFavorites,
    isFavorites,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
