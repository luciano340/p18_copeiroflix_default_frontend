import Link from 'next/link';
import React from 'react';

export const NaveLinks = () => (
  <nav>
    <ul className='hidden md:flex md:space-x-6'>
      <Link href='/'>Inicio</Link>
    </ul>
  </nav>
);
