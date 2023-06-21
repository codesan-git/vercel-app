/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['robohash.org']
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
