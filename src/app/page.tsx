'use client'
import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';


export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b from-transparent via-black to-black lg:h-[148vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle='Adicionados recentemente' />
        <MovieRow sectionTitle='Populares' />
        <MovieRow sectionTitle='Especiais' />
      </main>
    </div>
  );
}
