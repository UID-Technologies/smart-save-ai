/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Required for Docker: Next.js must listen on 0.0.0.0 to accept external connections
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

