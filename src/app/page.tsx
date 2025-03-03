'use client'
import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';


export default function Home() {
  return (
    <div className='relative h-screen bg-gradient-to-b from-transparent via-[#0f0f0f] to-[#0f0f0f] lg:h-[148vh]'>
      <Header />
      <main className='relative p-8 pb-20 scrollbar-hide lg:px-16'>
        <Banner />
        <MovieRow sectionTitle='Adicionados recentemente' />
        <MovieRow sectionTitle='Populares' />
        <MovieRow sectionTitle='Especiais' />
        <MovieRow sectionTitle='Teste' />
      </main>
    </div>
  );
}
