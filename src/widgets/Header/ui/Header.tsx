import Link from "next/link";

import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import {Navigation} from "./Navigation";
import {PATHS} from "@/shared/config/paths";
import {Menu} from "@/widgets/Header/ui/Menu";

export const Header = () => {

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
              <Navigation key={'navigation'} className={'max-md:hidden'} />
              <Menu />
            </Container>
        </header>
    );
};
