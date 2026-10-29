import {getMovieById} from "@/entities/movie/server";
import {Container} from "@/shared/ui/Container";
import Image from "next/image";
import {getImgUrl} from "@/shared/utils/api";
import {HeroMovieInfo} from "@/widgets/Hero/ui/HeroMovieInfo";

export const Hero = async () => {
  const movie = await getMovieById(414906, true);

  return (
    <section className={'pt-5'}>
      <Container>
        <div className={'relative isolate pt-20 px-10 pb-10 rounded-2xl overflow-hidden max-md:px-5 max-md:pb-6'}>
          <Image
            src={getImgUrl(movie.backdrop_path)}
            alt=""
            loading="eager"
            fill
            className="object-cover absolute inset-0 -z-5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 -z-4 w-[70%]
            bg-gradient-to-r from-black to-transparent"
          />
         <HeroMovieInfo {...movie} />
        </div>
      </Container>
    </section>
  );
};
