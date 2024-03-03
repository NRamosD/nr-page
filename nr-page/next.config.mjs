/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  i18n: {
    locales: ['en', 'es'], // Add the locales you want to support
    defaultLocale: 'en', // Set the default locale
  },
  
};

export default nextConfig;
