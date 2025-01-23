import { useState } from "react";
import axios from "axios";
import { Movie } from "../types/Movie";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "ca092016"; // Use only the actual API key value here.

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}?s=${query}&apikey=${API_KEY}`);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setError(response.data.Error); // Handle any error message from the API.
      }
    } catch (err) {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, fetchMovies };
};
