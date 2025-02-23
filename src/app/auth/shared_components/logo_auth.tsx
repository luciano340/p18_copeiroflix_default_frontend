import Image from "next/image";
import React from "react";

export function LogoAuth() {
    return <Image
        src='/logo-neon.webp'
        alt='banner'
        width={250}
        height={250}
        className='hidden sm:block mb-15'
        priority />;
}
