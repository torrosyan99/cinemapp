import clsx from "clsx";
import Image from "next/image";
import FilmErrorSvg from "@/shared/assets/icons/film-error.svg";
import { VoteAverage } from "@/shared/ui/VoteAverage";
import type { MovieListItem } from "../model/types";
import Link from "next/link";

interface MovieCardProps {
    movie: MovieListItem;
    className?: string;
}

export const MovieCard = ({ movie, className }: MovieCardProps) => {
    const title = movie.title || movie.original_title;
    const year = movie.release_date?.slice(0, 4);

    return (
        <Link
            className={clsx(
                "group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface shadow-lg shadow-black/10 transition-[border-color,box-shadow] duration-300 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 motion-reduce:transition-none",
                className,
            )}
            href={`/movie/${movie.id}`}
        >
            <div className="shrink-0 overflow-hidden border-b border-white/5 bg-card">
                {movie.poster_path ? (
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`Poster for ${title}`}
                        width={280}
                        height={400}
                        sizes="(max-width: 1023px) 16vw, 218px"
                        className="block h-auto w-full max-lg:h-65"
                    />
                ) : (
                    <div className="flex aspect-[2/3] flex-col items-center justify-center gap-3 px-4 text-center text-muted">
                        <FilmErrorSvg
                            aria-hidden="true"
                            className="size-12 text-muted/60"
                        />
                        <span className="text-xs">Poster unavailable</span>
                    </div>
                )}
            </div>

            <div className="flex  flex-1 flex-col bg-linear-to-br from-surface to-card/30 p-3">
                <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                    <VoteAverage
                       iconClass={'size-4'}
                        vote={movie.vote_average}
                        className="mr-auto font-semibold text-text"
                    />
                    {year ? (
                        <time dateTime={movie.release_date}>{year}</time>
                    ) : (
                        <span>Release TBA</span>
                    )}
                    {movie.adult && (
                        <span className="rounded-md border border-brand/20 bg-brand/10 px-1.5 py-0.5 text-xs font-semibold text-brand">
                            18+
                        </span>
                    )}
                    {movie.original_language && (
                        <span className="uppercase tracking-wider">
                            {movie.original_language}
                        </span>
                    )}
                </div>
                <h3
                    className="line-clamp-2 text-base
                    font-semibold text-text transition-colors
                    group-hover:text-primary max-sm:text-sm
                 ">
                    {title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted max-sm:line-clamp-1">
                    {movie.overview || "No synopsis available yet."}
                </p>
            </div>
        </Link>
    );
};
