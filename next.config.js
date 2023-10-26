/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    typedRoutes: true
  },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'loremflickr.com',
        },
      ],
    },
}
 
module.exports = nextConfig