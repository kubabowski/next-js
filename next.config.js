/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  basePath: '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rurituals.pl',
        port: '',
        pathname: '/images/**',
      },
    ],
  }
}

module.exports = nextConfig
