import Link from "next/link";
import {ExpandableMenu} from "@/shared/ui/ExpandableMenu";
import {getMovieGenres} from "@/entities/movie/api/getMovieGenres";
import {Genre} from "@/entities/movie";

interface HeaderGenresProps {
  genres:Genre[]
}

export const HeaderGenres =  ({genres}:HeaderGenresProps) => {

return (
    <ExpandableMenu label="Genres">
      {genres.map(({name, id}) => (
        <Link
          className="flex min-h-10 items-center rounded-lg
                     px-2 text-sm text-muted transition-colors hover:bg-brand/10 hover:text-brand"
          key={id}
          href={name}
        >
          {name}
        </Link>
      ))}
    </ExpandableMenu>
  );
};
