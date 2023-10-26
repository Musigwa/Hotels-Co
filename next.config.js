/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    typedRoutes: true
  },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cloudflare-ipfs.com',
        },
      ],
    },
}
 
module.exports = nextConfig