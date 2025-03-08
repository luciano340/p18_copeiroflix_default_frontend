import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getFeatureMovieById, getMoviesByGenre } from './services/movie_service';


export default async function Home() {
  const featuredMovie = await getFeatureMovieById('104')
  const genres = ['Drama', 'Action', "Animation"]
  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );

  return (
    <div className='relative h-screen bg-gradient-to-b from-transparent via-[#0f0f0f] to-[#0f0f0f] lg:h-[148vh]'>
      <Header />
      <main className='relative p-8 pb-20 scrollbar-hide lg:px-16'>
        <Banner movie={featuredMovie}/>
        {movies.map((movie) => (
          <MovieRow 
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
            movies={movie.movies}
          />
        ))}
      </main>
    </div>
  );
}
