import Image from 'next/image';

type MovieRowProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => (
  <div
    key={index}
    className='sn:h-36 group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-black transition-transform duration-200 ease-in hover:z-50 hover:scale-110 md:h-40 md:min-w-[380px] lg:h-52 lg:min-w-[400px]'
  >
    <Image src={`/${index}.jpg`} fill={true} alt='teste' className='rounded' />
  </div>
);

export function MovieRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className='flex-col mb-4 md:mb-8 lg:mb-12'>
      <div className='flex-col mb-2 lg:mb-4'>
        <div className='flex'>
          <h2 className='-ml-1 inline-flex items-center text-2xl font-bold'>
            {sectionTitle}
          </h2>
        </div>
        <div className='-ml-6 flex space-x-8 overflow-x-scroll p-6 scrollbar-hide '>
          {[1, 2, 3, 4, 5].map((index) => (
            <MovieCard key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
