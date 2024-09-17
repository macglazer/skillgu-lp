/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
    mdxRs: true,
  },
}

const withMDX = createMDX({
  options: {
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
