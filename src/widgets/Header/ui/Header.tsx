import Link from "next/link";

import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import {HeaderNavigation} from "./HeaderNavigation";
import {PATHS} from "@/shared/config/paths";
import {HeaderMenu} from "@/widgets/Header/ui/HeaderMenu";
import {getMovieGenres} from "@/entities/movie/server";

export const Header = async () => {
  const genres = await getMovieGenres(true)

    return (
        <header className="h-20 max-md:h-16">
            <Container className="h-full flex items-center justify-between">
                <Link
                    href={PATHS.MAIN}
                    aria-label="CinemApp — на главную"
                    className="transition-opacity  hover:opacity-85"
                >
                    <Logo />
                </Link>
              <HeaderNavigation genres={genres} key={'navigation'} className={'max-md:hidden'} />
              <HeaderMenu genres={genres} />
            </Container>
        </header>
    );
};
