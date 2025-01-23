import React from "react";
import { Movie } from "../types/Movie";
import { useWatchList } from "../context/WatchListContext";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addMovie } = useWatchList();

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title} ({movie.Year})</h3>
      <button onClick={() => addMovie(movie)}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
