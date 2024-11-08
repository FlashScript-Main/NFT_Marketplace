import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,

    // Disable "eslint" & "typescript" rules if "i18n" type was NOT detected
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ipfs.io",
            },
            {
                protocol: "https",
                hostname: "images.wrappedpunks.com",
            },
            {
                protocol: "https",
                hostname: "clonex-assets.rtfkt.com",
            },
            {
                protocol: "https",
                hostname: "www.larvalabs.com",
            },
            {
                protocol: "https",
                hostname: "assets.otherside.xyz",
            },
            {
                protocol: "https",
                hostname: "raw.seadn.io",
            },
            {
                protocol: "https",
                hostname: "metadata.degods.com",
            },
            {
                protocol: "https",
                hostname: "files.meebits.app",
            },
            {
                protocol: "https",
                hostname: "miladymaker.net",
            },
            {
                protocol: "https",
                hostname: "captainz-api.memeland.com",
            },
            {
                protocol: "https",
                hostname: "metadata.ens.domains",
            },
            {
                protocol: "https",
                hostname: "nftmedia.parallelnft.com",
            },
            {
                protocol: "https",
                hostname: "cdn.veefriends.com",
            },
            {
                protocol: "https",
                hostname: "api.memeland.com",
            },
        ]
    }
};

export default isProduction ? withNextIntl(withPWA({
    dest: 'public',
})(nextConfig)) : withNextIntl(nextConfig);
