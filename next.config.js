/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      reactRemoveProperties: true, 
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
      domains: ['m.media-amazon.com']
    }
  };
  
  module.exports = nextConfig;
  