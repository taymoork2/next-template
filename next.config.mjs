/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbotrace: {
      logLevel: 'error',
    },
  },
};

export default nextConfig;
