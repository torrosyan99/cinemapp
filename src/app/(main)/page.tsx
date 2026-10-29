import type {Metadata} from "next";
import {Hero} from "@/widgets/Hero";
import {SearchMovie} from "@/features/SearchMovie";
import {MovieSection} from "@/widgets/MovieSection";
import {SurpriseMovie} from "@/widgets/SurpriseMovie";

export const metadata: Metadata = {
  title: "CinemApp — Discover Your Next Favorite Movie",
  description:
    "Explore popular movies, browse by genre, and save your favorites.",
}

export default function Home() {
  return <>
    <Hero/>
    <SearchMovie className={'max-w-2xl mt-10 mx-auto'}/>
    <MovieSection title={'Trending now'} category={'popular'}/>
    <MovieSection title="Now Playing" category="nowPlaying" />
    <MovieSection title={'Top rated'} category={'topRated'}/>
    <SurpriseMovie />
  </>;
}
