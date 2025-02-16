'use client';
import React from 'react';
import { UserProfile } from './UserProfile';
import { NaveLinks } from './NaveLinks';
import { Logo } from './Logo';


export default function Header() {
  return (
    <header className='backdrop-blur-xs fixed top-0 z-50 flex w-full items-center justify-between bg-black/75 px-2 py-2 transition-all lg:px-10 lg:py-6'>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NaveLinks />
      </div>
      <UserProfile />
    </header>
  );
}
