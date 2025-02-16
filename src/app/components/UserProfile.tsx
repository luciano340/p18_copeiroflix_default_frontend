import Image from 'next/image';
import React from 'react';

export const UserProfile = () => (
    <div className='flex items-center space-x-2 md:space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Luciano</p>
        <Image
            src='/avatar.png'
            alt='avatar'
            className='cursor-pointer rounded-md'
            width={40}
            height={20} />
    </div>
);
