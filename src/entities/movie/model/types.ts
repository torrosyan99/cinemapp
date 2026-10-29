export type MovieId = number
export type GenreId = number

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: {
    id: GenreId;
    name: string;
  }[];
  id: MovieId;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  softcore: boolean;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieListItem extends Pick<Movie,
  | "adult"
  | "backdrop_path"
  | "id"
  | "original_language"
  | "original_title"
  | "overview"
  | "poster_path"
  | "release_date"
  | "softcore"
  | "title"
  | "video"
  | "vote_average"
  | "vote_count"
> {
  popularity: number;
}


export interface Genre {
  id: GenreId,
  name: string;
}
