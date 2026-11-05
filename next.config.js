/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: true,
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
