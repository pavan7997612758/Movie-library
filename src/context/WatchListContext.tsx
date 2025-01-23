import React, { createContext, useState, useContext, ReactNode } from "react";
import { Movie } from "../types/Movie";

interface WatchListContextProps {
  watchList: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (id: string) => void;
  updateRating: (id: string, rating: number) => void;
}

const WatchListContext = createContext<WatchListContextProps | undefined>(undefined);

export const WatchListProvider = ({ children }: { children: ReactNode }) => {
  const [watchList, setWatchList] = useState<Movie[]>([]);

  const addMovie = (movie: Movie) => {
    if (!watchList.some((m) => m.imdbID === movie.imdbID)) {
      setWatchList([...watchList, movie]);
    }
  };

  const removeMovie = (id: string) => {
    setWatchList(watchList.filter((movie) => movie.imdbID !== id));
  };

  const updateRating = (id: string, rating: number) => {
    setWatchList(
      watchList.map((movie) =>
        movie.imdbID === id ? { ...movie, Rating: rating } : movie
      )
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, addMovie, removeMovie, updateRating }}>
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchList = () => {
  const context = useContext(WatchListContext);
  if (!context) {
    throw new Error("useWatchList must be used within a WatchListProvider");
  }
  return context;
};
