export const  PATHS = {
  MAIN: '/',
  FAVORITES: '/favorites',
  ABOUT: '/about',
  MOVIE: (id:number) => `/movie/${id}`
} as const;