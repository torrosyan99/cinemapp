import {Movie, MovieId} from "../model/types";
import {api} from "@/shared/utils/api";
import {cacheLife} from "next/cache";

const getCachedMovieById = async (id: MovieId) => {
  "use cache";

  cacheLife("weeks");

  return api<Movie>({
    endpoint: `movie/${id}`,
  });
};

export const  getMovieById =  async  (id: MovieId, cached: boolean = false)  => {
if(cached) return getCachedMovieById(id);

  return  await api<Movie>({
    endpoint: `movie/${id}`
  })
}