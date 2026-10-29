import "server-only";

const baseUrl = 'https://api.themoviedb.org/3'

interface ApiParams {
  endpoint: string;
  options?: RequestInit,
  params?: Record<string, string | number | boolean>
}

export const api = async <T>({
                               endpoint,
                               options, params = {}
                             }: ApiParams): Promise<T> => {

  const url = new URL(`${baseUrl}/${endpoint}`);


  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  })
  console.log(url.toString())

  const headers = new Headers(options?.headers);

  headers.set('Authorization', `Bearer ${process.env.MOVIE_API || ''}`)
  const response = await fetch(url, {
    ...options,
    headers
  });

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`TMDB API Error: ${response.status}`);
  }


  return  response.json();
}


export const getImgUrl = (endpoint: string) => {
  return `https://image.tmdb.org/t/p/original${endpoint}`;
}