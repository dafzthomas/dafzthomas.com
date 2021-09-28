/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
    extension: /\.mdx$/,
});

module.exports = withMDX({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    async redirects() {
        return [
            {
                source: '/cryptocurrency-to-look-out-for-kin',
                destination: '/blog/cryptocurrency-to-look-out-for-kin',
                permanent: true,
            },
            {
                source: '/cypress-testing',
                destination: '/blog/cypress-testing',
                permanent: true,
            },
            {
                source: '/react-function-component-in-typescript',
                destination: '/blog/react-function-component-in-typescript',
                permanent: true,
            },
            {
                source: '/route-loading-custom-hook-nextjs',
                destination: '/blog/route-loading-custom-hook-nextjs',
                permanent: true,
            },
        ];
    },
});
