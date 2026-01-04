import React from "react";
import "../css/Favourites.css"
import { useMovieContext } from "../MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
    const {favorites} = useMovieContext()
  return (
    <div className="favourites-page">
      <header className="favourites-header">
        <h1 className="favourites-title">Your favourites</h1>
        {favorites.length > 0 ? (
          <section className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </section>
        ) : (
        
        <p className="favourites-subtitle">
          All the movies you loved, curated in a gold-highlighted list.
        </p>)}
      </header>
    </div>
  );
}


export default Favourites