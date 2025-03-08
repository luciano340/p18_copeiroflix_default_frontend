'use client';
import React, { ChangeEvent, FormEvent, JSX, useState } from 'react';
import { UserProfile } from './UserProfile';
import { NaveLinks } from './NaveLinks';
import { Logo } from './Logo';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';


interface ISearchFormProps {
  searchTerm: string;
  onSearch: (event: FormEvent<HTMLFormElement>) => void;
  onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchForm({
  searchTerm,
  onSearch,
  onSearchTermChange,
}: ISearchFormProps): JSX.Element {
  return (
    <form onSubmit={onSearch} className='flex items-center space-x-2'>
      <button type='submit'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
      </button>
      <input
        type='search'
        id='search'
        name='search'
        placeholder='Buscar'
        value={searchTerm}
        onChange={onSearchTermChange}
        className='bg-transparent text-white placeholder-white outline-none'
      />
    </form>
  );
}

export default function Header() {
  const router = useRouter();
  const params = useSearchParams();
  const initialSearchTerm = params.get('title') || '';
  const [SearchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  const OnSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newParams = new URLSearchParams(params.toString());
    newParams.set('title', SearchTerm);
    router.push(`/search?${newParams.toString()}`);
  };

  return (
    <header className='backdrop-blur-xs fixed top-0 z-50 flex w-full items-center justify-between bg-black/75 px-4 py-4 transition-all lg:px-8 lg:py-4'>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NaveLinks />
      </div>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <SearchForm
            onSearch={onSearch}
            searchTerm={SearchTerm}
            onSearchTermChange={OnSearchTermChange}
        />
        <UserProfile />
      </div>
      
    </header>
  );
}
