'use client';
import React from 'react';
import { UserProfile } from './UserProfile';
import { NaveLinks } from './NaveLinks';
import { Logo } from './Logo';

export default function Header() {
  return (
    <header className='backdrop-blur-xs fixed top-0 z-50 flex w-full items-center justify-between bg-black/75 px-4 py-4 transition-all lg:px-8 lg:py-4'>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NaveLinks />
      </div>
      <UserProfile />
    </header>
  );
}
