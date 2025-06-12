import './src/lib/env/env.mjs';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          }
        ]
      },
      {
        source: '/:path*', // All routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate' // Allow pages to be cached by service worker
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff' // Prevent MIME-type sniffing
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY' // Prevent clickjacking
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin' // Control referrer information
          }
        ]
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'https',
        hostname: '**.chuccamau.com'
      }
    ]
  }
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  }
});

export default withMDX(nextConfig);
