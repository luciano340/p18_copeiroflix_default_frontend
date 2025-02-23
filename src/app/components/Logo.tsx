import Image from 'next/image';
import React from 'react';

export const Logo = () => (
  <Image
    src='/Logo-flix.png'
    alt='coperoflix'
    width={320}
    height={320}
    className='cursor-pointer'
  />
);
