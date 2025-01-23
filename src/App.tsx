import React, { useState } from "react";
import { useFetchMovies } from "./hooks/useFetchMovies";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import { WatchListProvider } from "./context/WatchListContext";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const { movies, loading, error, fetchMovies } = useFetchMovies();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <WatchListProvider>
      <div className="App">
        <h1>Movie Library</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <MovieList movies={movies} />
        <WatchList />
      </div>
    </WatchListProvider>
  );
};

export default App;
