import Image from 'next/image';
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/solid';


export function Banner() {
    return (
      <div className='mb-10 md:mb-12 lg:mb-18'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-[#0f0f0f]'>
            <Image
              src='/banner.jpg'
              alt='banner'
              fill={true}
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
            />
          </div>
  
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            DUDA GARBI #63
          </h1>
  
          <p className='text-shadow-md max-w-xs flex-col text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Duda Garbi no Papo Copero! Vem curtir essa live com a gente! Vamos
            falar sobre o Grêmio e a carreira de um dos maiores comunicadores do
            Rio Grande do Sul!
          </p>
        </div>
        <div className='flex space-x-3'>
          <button className='flex min-w-fit cursor-pointer items-center gap-2 rounded-md bg-white px-4 py-1.5 font-bold text-black transition hover:opacity-70 md:w-32 md:px-8 md:py-2.5 md:text-xl lg:w-40'>
            <PlayIcon className='h-6' />
            Assistir
          </button>
  
          <button className='flex min-w-fit cursor-pointer items-center gap-2 rounded-md bg-gray-600 px-4 py-1.5 font-bold text-black transition hover:opacity-70 md:w-32 md:px-8 md:py-2.5 md:text-xl lg:w-40'>
            <InformationCircleIcon className='h-6'/>
            Mais informações
          </button>
        </div>
      </div>
    )
  };