/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://nlca.nlcyber.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
