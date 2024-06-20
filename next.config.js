const withAnalyzer = require('@next/bundle-analyzer');
const { withContentlayer } = require('next-contentlayer');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: getRemotePatterns(),
  },
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

module.exports = withAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(withContentlayer(nextConfig));

function getRemotePatterns() {
  const remotePatterns = [
    {
      protocol: 'https',
      hostname: 'imgur.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'i.imgur.com',
      pathname: '/**',
    },
  ];

  return IS_PRODUCTION
    ? remotePatterns
    : [
        ...remotePatterns,
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          pathname: '/**',
        },
      ];
}
