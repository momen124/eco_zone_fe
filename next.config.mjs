import i18Config from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: i18Config.i18n,
};

export default nextConfig;
