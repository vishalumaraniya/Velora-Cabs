import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
];

const nextConfig: NextConfig = {
  // Domain canonical & routing consistency (Section 2.3)
  trailingSlash: false,
  compress: true,

  // Image optimization (Section 3.1)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/cab-service/:city',
        destination: '/taxi-service/:city',
        permanent: true,
      },
      {
        source: '/cab-service',
        destination: '/#cities',
        permanent: true,
      },
      {
        source: '/taxi/:slug',
        destination: '/routes/:slug',
        permanent: true,
      },
      {
        source: '/taxi',
        destination: '/#routes',
        permanent: true,
      },
      {
        source: '/outstation-taxi',
        destination: '/services/outstation-taxi',
        permanent: true,
      },
      {
        source: '/airport-taxi',
        destination: '/services/airport-taxi-transfer',
        permanent: true,
      },
      {
        source: '/local-city-rides',
        destination: '/services/local-city-cab',
        permanent: true,
      },
      {
        source: '/taxi-24x7',
        destination: '/services/24x7-cab-service',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/services/outstation-taxi',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/services/outstation-taxi',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
