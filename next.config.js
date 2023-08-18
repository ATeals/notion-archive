/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    async rewrites() {
        return [
            {
                source: "/sitemap-0.xml",
                destination: "/api/sitemap",
            },
        ];
    },
};

module.exports = nextConfig;
