'use client';
import React from "react";

export default function Header() {

    return (
        <header
            className='fixed top-0 z-50 flex w-full justify-between items-center px-2 py-2 lg:px-10 lg:py-6 backdrop-blur-xs bg-black/75 transition-all'>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <img src='Logo-flix.png' alt='logflix' width={320} height={320}/>
                <ul className='hidden md:flex md:space-x-6'>
                    <li>Inicio</li>
                    <li>Videos</li>
                </ul>
            </div>
            <div className='flex items-center space-x-2 md:space-x-4'>
                <p className="hidden cursor-not-allowed lg:inline">Luciano</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' className='cursor-pointer rounded-md' width={40} height={20}/>
            </div>
        </header>
    )
}