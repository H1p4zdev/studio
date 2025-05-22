
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextn' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/nextn' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
