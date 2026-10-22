import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Content-Security-Policy',
    value:
      "frame-ancestors 'none'",
  },
];

const nextConfig: NextConfig = {
  // PHASE 1: Domain canonical
  // Redirect rule note: bare-domain and .com redirects should be set at
  // the DNS/hosting level (Vercel Domain Settings or Netlify _redirects).
  // Doing 301s inside Next.js for the apex domain can cause redirect loops
  // if the host is already pointing to the same Next.js app.
  //
  // Manual steps for Vercel:
  //   1. Add domain veloracabs.in, www.veloracabs.in, veloracabs.com,
  //      www.veloracabs.com in Vercel Project → Settings → Domains.
  //   2. Set www.veloracabs.in as the primary. Vercel auto-301s the rest.
  //
  // HTTPS is enforced by Vercel/Netlify automatically.

  // PHASE 9: Image optimisation
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
    ];
  },
};

export default nextConfig;
