import Link from "next/link";

import {PATHS} from "@/shared/config/paths";
import {Container} from "@/shared/ui/Container";
import {Logo} from "@/shared/ui/Logo";
import {getCurrentYear} from "@/shared/utils/getCurrentYear";

const links = [
  {label: "Discover", href: PATHS.MAIN},
  {label: "Favorites", href: PATHS.FAVORITES},
  {label: "About", href: PATHS.ABOUT},
];


export const Footer = async () => {
  const year = await  getCurrentYear();
  return <footer className="section-margin border-t border-white/10 bg-surface/30">
    <Container>
      <div
        className="flex items-center justify-between gap-12 py-12 max-md:flex-col max-md:items-start max-md:gap-6 max-md:py-8">
        <div className="max-w-sm">
          <Link
            href={PATHS.MAIN}
            aria-label="CinemApp home"
            className="inline-flex rounded-lg transition-opacity
                        hover:opacity-80"
          >
            <Logo/>
          </Link>
          <p className="mt-3 text-sm leading-7 text-muted">
            Great stories are worth finding.
            <br/>
            Discover your next favorite movie.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-8 gap-y-2"
        >
          {links.map(({label, href}) => (
            <Link key={href} href={href}
                  className={"inline-flex min-h-11 items-center rounded-lg text-sm text-muted transition-colors hover:text-brand"}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className="flex min-h-20 items-center justify-between gap-4 border-t border-white/10 py-4 max-sm:flex-col max-sm:items-start max-sm:gap-1">
        <p className="text-xs leading-6 text-muted">
          &copy; {year} CinemApp. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
};
