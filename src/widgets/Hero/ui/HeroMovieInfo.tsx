import type {Movie} from "@/entities/movie";
import {Heading} from "@/shared/ui/Heading";
import {Text} from "@/shared/ui/Text";
import {VoteAverage} from "@/shared/ui/VoteAverage";
import {Button} from "@/shared/ui/Button";
import PlaySvg from '@/shared/assets/icons/play.svg'
import {PATHS} from "@/shared/config/paths";
import {ToggleFavorite} from "@/features/ToggleFavorite";


export const HeroMovieInfo = (movie:Movie) => {
  const {original_title, overview, vote_average, release_date, genres}
    = movie
  return (
    <div className={'space-y-4'}>
      <Heading font={'heading'} className="uppercase  tracking-[0.15em]" as={'h1'}>
        {original_title}
      </Heading>
      <div className={'divide-x divide-white/40 flex items-center gap-4 max-md:gap-2 mt-2'}>
        <VoteAverage className={'pr-4 max-md:pr-2'} vote={vote_average} />
        <span className={'block pr-4 max-md:pr-2'}>{release_date.slice(0, 4)}</span>
        <span className={'block'}>{genres.map((genre) => genre.name).join(', ')}</span>
      </div>
      <Text className={'max-w-150'}>
        {overview}
      </Text>
      <div className={'flex gap-4'}>
        <Button href={PATHS.MOVIE(movie.id)}>
          <PlaySvg />
          <span>View</span>
        </Button>
        <ToggleFavorite movieId={movie.id} />
      </div>
    </div>
  );
};
