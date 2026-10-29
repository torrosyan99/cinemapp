import {MovieListItem} from "../model/types";
import {api} from "@/shared/utils/api";
import {cacheLife} from "next/cache";

const categories = {
  popular: 'movie/popular',
  topRated: 'movie/top_rated',
  nowPlaying: 'movie/now_playing',
  upcoming: 'movie/upcoming',
  trendingToday: 'trending/movie/day',
  trendingWeek: 'trending/movie/week',
};

export type MovieCategories = keyof typeof categories

interface Params {
  limit: number
}

const getCachedMoviesByCategory = async (category: MovieCategories, {
  limit = 20
}: Params): Promise<MovieListItem[]> => {
  'use cache';

  cacheLife('days')


  const movies = await api<{
    results: MovieListItem[]
  }>({
    endpoint: categories[category],
    params: {
      limit
    }
  })

  return movies.results.slice(0, limit);
}

export const getMoviesByCategory = async (category: MovieCategories, {
  limit = 20
}: Params, cached: boolean = false): Promise<MovieListItem[]> => {

  if (cached) return getCachedMoviesByCategory(category, {limit});

  const movies = await api<{
    results: MovieListItem[]
  }>({
    endpoint: categories[category],
    params: {
      limit
    }
  })

  return movies.results.slice(0, limit);
}
