/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.finda.co.kr',
                pathname: '/images/bank/app/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.finda.co.kr',
                pathname: '/images/bank/**',
            },
            {
                protocol: 'http',
                hostname: 'cdn.finda.co.kr',
                pathname: '/images/bank/app/**',
            },
            {
                protocol: 'http',
                hostname: 'cdn.finda.co.kr',
                pathname: '/images/bank/**',
            },
        ],
    },
    webpack(config) {
        config.node = {
            global: true,
            __filename: 'mock',
            __dirname: 'mock',
        };
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
