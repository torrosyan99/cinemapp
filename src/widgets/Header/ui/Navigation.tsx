"use client";

import clsx from "clsx";
import Link from "next/link";
import { PATHS } from "@/shared/config/paths";
import { ExpandableMenu } from "@/shared/ui/ExpandableMenu";

const genreLinks = [
    { value: "sadas", href: "#" },
    { value: "sadsas", href: "#" },
    { value: "sadeas", href: "#" },
];

const linkClassName =
    "flex min-h-10 items-center rounded-xl px-2 font-medium transition-colors" +
  " hover:bg-brand/10 hover:text-brand";

interface NavigationProps {
    className?: string;
    onNavigate?: () => void;
}

export const Navigation = ({ className, onNavigate }: NavigationProps) => (
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
        <ExpandableMenu label="Genres">
            {genreLinks.map(({ value, href }) => (
                <Link
                    className="flex min-h-10 items-center rounded-lg
                     px-2 text-sm text-muted transition-colors hover:bg-brand/10 hover:text-brand"
                    key={value}
                    href={href}
                >
                    {value}
                </Link>
            ))}
        </ExpandableMenu>
        <Link className={linkClassName} href={PATHS.ABOUT}>
            About
        </Link>
    </nav>
);
