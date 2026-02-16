/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.velory.systems' }],
        destination: 'https://velory.systems/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
