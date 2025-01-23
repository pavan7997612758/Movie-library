import React from "react";
import { useWatchList } from "../context/WatchListContext";

const WatchList: React.FC = () => {
  const { watchList, removeMovie, updateRating } = useWatchList();

  return (
    <div className="watch-list">
      <h2>My Watchlist</h2>
      {watchList.map((movie) => (
        <div key={movie.imdbID} className="watchlist-item">
          <h3>{movie.Title} ({movie.Year})</h3>
          <button onClick={() => removeMovie(movie.imdbID)}>Remove</button>
          <input
            type="number"
            min="1"
            max="10"
            placeholder="Rate"
            onChange={(e) => updateRating(movie.imdbID, Number(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
};

export default WatchList;
