/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/nc-portfolio/',
  basePath: '/nc-portfolio',
  trailingSlash: true,
}

module.exports = nextConfig 