/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: false,
  },
  // Otimizações de build
  swcMinify: true,
  // Configurações de i18n (se necessário no futuro)
  // i18n: {
  //   locales: ['pt-BR'],
  //   defaultLocale: 'pt-BR',
  // },
}

module.exports = nextConfig
