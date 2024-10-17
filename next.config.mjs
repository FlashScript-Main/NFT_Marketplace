import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable "eslint" & "typescript" rules if "i18n" type was NOT detected
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
};

export default withNextIntl(nextConfig);
