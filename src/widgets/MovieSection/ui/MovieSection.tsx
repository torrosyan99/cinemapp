import { MovieCard, type MovieCategories } from "@/entities/movie";
import { getMoviesByCategory } from "@/entities/movie/server";
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { MovieSlider } from "./MovieSlider";

interface MovieSectionProps {
    title: string;
    category: MovieCategories;
}

export const MovieSection = async ({ title, category }: MovieSectionProps) => {
    const movies = await getMoviesByCategory(
        category,
        {
            limit: 6,
        },
        true,
    );
    const cards = movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
    ));


    return (
        <section className={"section-padding"}>
            <Container>
                <Heading as={"h2"}>{title}</Heading>
                <div className="mt-8 max-sm:mt-5">
                    <div className="grid grid-cols-6 gap-5 max-lg:hidden">
                        {cards}
                    </div>
                    <MovieSlider label={title}>{cards}</MovieSlider>
                </div>
            </Container>
        </section>
    );
};
