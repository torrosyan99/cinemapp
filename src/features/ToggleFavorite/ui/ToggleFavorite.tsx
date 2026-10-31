"use client";

import {useSyncExternalStore} from "react";
import type {MovieId} from "@/entities/movie";
import {toggleFavorite} from "@/entities/movie";
import HeartSvg from "@/shared/assets/icons/heart.svg";
import {Button} from "@/shared/ui/Button";

interface ToggleFavoriteProps {
  movieId: MovieId;
}

const subscribe = (notify: () => void) => {
  window.addEventListener("storage", notify);
  window.addEventListener("favorites-changed", notify);

  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener("favorites-changed", notify);
  };
};

export const ToggleFavorite = ({movieId}: ToggleFavoriteProps) => {
  const isFavorite = useSyncExternalStore(subscribe, () => {
    try {
      const favorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
      return favorites.includes(movieId);
    } catch {
      return false;
    }
  }, () => false);

  const handleClick = () => {
    toggleFavorite(movieId);
    window.dispatchEvent(new Event("favorites-changed"));
  };

  const label = isFavorite ? "Remove from Favorites" : "Add to Favorites";

  return (
    <Button
      type="button"
      className="group max-md:size-11"
      mode="outline"
      onClick={handleClick}
      aria-label={label}
      aria-pressed={isFavorite}
    >
      <HeartSvg className={isFavorite ? "fill-brand text-brand" :
        "group-hover:fill-brand group-hover:text-brand"} />
      <span className="max-md:hidden">{label}</span>
    </Button>
  );
};
