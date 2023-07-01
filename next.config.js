/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'picsum.photos',
      'loremflickr.com',
      'cloudflare-ipfs.com',
      'miro.medium.com',
      'novu.co',
    ],
  },
};

module.exports = nextConfig;
