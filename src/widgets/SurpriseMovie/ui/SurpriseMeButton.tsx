"use client";

import { Button } from "@/shared/ui/Button";
import ShuffleSvg from "@/shared/assets/icons/shuffle.svg";
import {useRouter} from "next/navigation";
import {PATHS} from "@/shared/config/paths";

interface SurpriseMeButtonProps {
  movieIds: number[];
}

export const SurpriseMeButton = ({ movieIds }: SurpriseMeButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    if (movieIds.length === 0) return;

    const movieId = movieIds[Math.floor(Math.random() * movieIds.length)];
    router.push(PATHS.MOVIE(movieId));
  };

  return (
    <Button
      type="button"
      size="lg"
      onClick={handleClick}
      disabled={movieIds.length === 0}
      className="mt-6 min-w-52 rounded-full bg-brand shadow-lg shadow-brand/20 hover:bg-brand/90"
    >
      <ShuffleSvg className="size-5" />
      Surprise Me
    </Button>
  );
};
