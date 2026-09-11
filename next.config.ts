import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: 'www.pega.com' },
      { protocol: 'https', hostname: 'www.myforreal.com' },
      { protocol: 'https', hostname: 'playvs.com' }
    ]
  }
};

export default nextConfig;
