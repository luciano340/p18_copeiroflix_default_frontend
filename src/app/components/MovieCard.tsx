import Image from 'next/image';
import { Movie } from '../types/movies';
import { MovieInfo } from './MovieInfo';

export const MovieCard = ({ movie }: {movie: Movie}) => (
    <div className="group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw]">
      <Image
        src={movie.bannerFileURL}
        alt={movie.title}
        className="rounded-md object-top transition"
        width={600}
        height={400}
      />
      <div className="absolute top-8 z-10 w-full min-w-[20vw] scale-0 opacity-0 transition delay-300 duration-200 group-hover:scale-110 group-hover:opacity-95 group-hover:-translate-y-[6vw]">
        <Image
          src={movie.bannerFileURL}
          alt={movie.title}
          className="h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition"
          width={600}
          height={400}
        />
        {MovieInfo(movie)}
      </div>
    </div>
    );

