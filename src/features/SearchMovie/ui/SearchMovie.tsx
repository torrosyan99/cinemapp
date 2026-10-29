'use client'

import {Search} from "@/shared/ui/Search";
import {redirect} from "next/navigation";

interface SearchMovieProps {
  className?: string;
}

export const SearchMovie = ({className}:SearchMovieProps) => {
const onSubmit = (value:string) => {
  redirect("/movies?q=" + value);
}
  return ( <Search
     onSubmit={onSubmit}
    placeholder={'Search for movies, series, or actors...'}
                   aria-label="Search for movies, series, or actors..."
                   className={className} />);
};
