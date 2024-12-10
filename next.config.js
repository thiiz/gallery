/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXT_PUBLIC_GOOGLE_DEVELOPER_KEY: process.env.GOOGLE_DEVELOPER_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.usercontent.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
