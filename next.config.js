/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
