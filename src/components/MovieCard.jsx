import React from "react";
import "../css/MovieCard.css"
import { useMovieContext } from "../MovieContext";

function MovieCard({ movie }) {

    const {
    addToFavorites,
    removeFromFavorites,
    isFavorite
  } = useMovieContext();
  function heartClick() {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <article className="movie-card">
      <div className="movie-header">
        <div>
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-year">{movie.release_date.split("-")[0]}</p>
        </div>
      </div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
      </div>
      <div className="movie-footer">
        <span className="movie-tag">Movie</span>
        <button className="heart-button" type="button" onClick={heartClick}>
          {isFavorite(movie.id) ? "❤️" : "🤍"}
        </button>
      </div>
    </article>
  );
}


export default MovieCard