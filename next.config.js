/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' ? {
    assetPrefix: '/nc-portfolio/',
    basePath: '/nc-portfolio',
    trailingSlash: true,
  } : {
    basePath: '',
  }),
}

module.exports = nextConfig 