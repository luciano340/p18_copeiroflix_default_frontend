import Image from 'next/image';
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/solid';
import { Movie } from '../types/movies';
import Link from 'next/link';


export function Banner({movie}: { movie: Movie }) {
    return (
      <div className='mb-10 md:mb-12 lg:mb-18'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-[#0f0f0f]'>
            <video
              autoPlay
              loop
              muted
              className='z-20 hidden h-full w-full object-cover opacity-50 transition duration-1000 ease-in-out lg:block'
              poster={movie.bannerFileURL}
              src={movie.videoFileURL}
            />
            <Image
              src={movie.bannerFileURL}
              alt={movie.title}
              fill={true}
              className='object-cover object-top opacity-30 filter lg:hidden'
            />
          </div>
  
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            {movie.title}
          </h1>
  
          <p className='text-shadow-md max-w-xs flex-col text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            {movie.description}
          </p>
        </div>
        <div className='flex space-x-3'>
          <Link href={`/watch/${movie.id}`}>
            <button className='flex min-w-fit cursor-pointer items-center gap-2 rounded-md bg-white px-4 py-1.5 font-bold text-black transition hover:opacity-70 md:w-32 md:px-8 md:py-2.5 md:text-xl lg:w-40'>
            <PlayIcon className='h-6' />
            Assistir
            </button>
          </Link>
          
  
          <button className='flex min-w-fit cursor-pointer items-center gap-2 rounded-md bg-gray-600 px-4 py-1.5 font-bold text-black transition hover:opacity-70 md:w-32 md:px-8 md:py-2.5 md:text-xl lg:w-40'>
            <InformationCircleIcon className='h-6'/>
            Mais informações
          </button>
        </div>
      </div>
    )
  };