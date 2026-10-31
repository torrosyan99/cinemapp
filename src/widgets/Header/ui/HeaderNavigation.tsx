"use client";

import clsx from "clsx";
import Link from "next/link";
import { PATHS } from "@/shared/config/paths";
import {HeaderGenres} from "./HeaderGenres";
import {Genre} from "@/entities/movie";


const linkClassName =
    "flex min-h-10 items-center rounded-xl px-2 font-medium transition-colors" +
  " hover:bg-brand/10 hover:text-brand";

interface HeaderNavigationProps {
    className?: string;
    onNavigate?: () => void;
    genres:Genre[]
}

export const HeaderNavigation =  ({ className, onNavigate, genres }: HeaderNavigationProps) => {
    return (
      <nav
        aria-label="Main navigation"
        className={clsx(
          "flex gap-2 max-md:flex-col md:items-center md:gap-3",
          className,
        )}
        onClick={(event) => {
            if (event.target instanceof Element &&
              event.target.closest("a[href]")) {
                onNavigate?.();
            }
        }}
      >
          <Link className={linkClassName} href={PATHS.FAVORITES}>
              Favorites
          </Link>
          <HeaderGenres genres={genres} />
          <Link className={linkClassName} href={PATHS.ABOUT}>
              About
          </Link>
      </nav>
    );
}
