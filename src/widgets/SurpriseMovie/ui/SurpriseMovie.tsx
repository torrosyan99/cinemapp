import Image from "next/image";
import { getMoviesByCategory } from "@/entities/movie/server";
import HeadphonesSvg from "@/shared/assets/icons/headphones.svg";
import { Container } from "@/shared/ui/Container";
import { SurpriseMeButton } from "./SurpriseMeButton";

export const SurpriseMovie = async () => {
  const movies = await getMoviesByCategory("topRated", { limit: 20 }, true);

  return (
    <section aria-labelledby="surprise-movie-heading" className="section-padding">
      <Container>
        <div className="relative isolate flex min-h-95 items-center overflow-hidden rounded-2xl border border-white/10 bg-[#081321] px-20 py-12 shadow-2xl shadow-black/20 max-lg:px-10 max-md:min-h-105 max-md:items-start max-md:px-6 max-md:py-10">
          <Image
            src="/images/surprise-movie-collage.png"
            alt=""
            fill
            sizes="(max-width: 1520px) 100vw, 1520px"
            className="-z-20 object-cover object-center max-md:object-[60%_center]"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-[#07111f] via-[#07111f]/95 to-[#07111f]/10 max-md:bg-linear-to-b max-md:from-[#07111f] max-md:via-[#07111f]/90 max-md:to-[#07111f]/15" />

          <div className="max-w-xl">
            <p className="mb-5 flex items-center gap-2 text-sm font-bold tracking-wide text-brand uppercase">
              <HeadphonesSvg className="size-6" />
              Your next movie awaits
            </p>
            <h2 id="surprise-movie-heading" className="text-6xl leading-[1.04] font-bold tracking-tight text-text max-lg:text-5xl max-sm:text-4xl">
              Can’t Decide<br />What to <span className="text-brand">Watch?</span>
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted max-sm:text-base">
              Discover something unexpected. Let us pick your next favorite movie.
            </p>
            <SurpriseMeButton movieIds={movies.map((movie) => movie.id)} />
          </div>
        </div>
      </Container>
    </section>
  );
};
