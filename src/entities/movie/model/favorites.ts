import {MovieId} from "./types";

export const toggleFavorite = (movieId: MovieId) => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const updated = favorites.includes(movieId)
    ? favorites.filter((id) => id !== movieId)
    : [...favorites, movieId];

  localStorage.setItem("favorites", JSON.stringify(updated));

  return updated.includes(movieId);
};