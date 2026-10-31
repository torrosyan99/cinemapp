import { Genre } from "../model/types";
import { api } from "@/shared/utils/api";
import { cacheLife } from "next/cache";

const getCachedMovieGenres = async () => {
  "use cache";

  cacheLife("weeks");

  return (await api<{ genres: Genre[] }>({
    endpoint: "genre/movie/list",
  })).genres;
};

export const getMovieGenres = async (cached: boolean = false) => {
  if (cached) return getCachedMovieGenres();

  return (await api<{ genres: Genre[] }>({
    endpoint: "genre/movie/list",
  })).genres;
};