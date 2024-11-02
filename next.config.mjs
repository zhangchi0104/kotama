/**
 * @format
 * @type {import('next').NextConfig}
 */

import createNextIntlPlugin from 'next-intl/plugin';
import createBundleAnalyzer from '@next/bundle-analyzer';
const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
