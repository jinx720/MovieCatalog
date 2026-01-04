import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export function useMovieContext() {
  return useContext(MovieContext);
}

export function MovieProvider(props) {
  const children = props.children;

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
  const storedFavs = localStorage.getItem("favorites");
  if (storedFavs) {
    setFavorites(JSON.parse(storedFavs));
  }
}, []);

useEffect(() => {
  if (favorites.length > 0) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}, [favorites]);


  function addToFavorites(movie) {
    setFavorites(function (prev) {
      return prev.concat(movie);
    });
  }

  function removeFromFavorites(movieId) {
    setFavorites(function (prev) {
      return prev.filter(function (movie) {
        return movie.id !== movieId;
      });
    });
  }

  function isFavorite(movieId) {
    return favorites.some(function (movie) {
      return movie.id === movieId;
    });
  }

  const value = {
    favorites: favorites,
    addToFavorites: addToFavorites,
    removeFromFavorites: removeFromFavorites,
    isFavorite: isFavorite
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
}
