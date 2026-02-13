const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname),
    resolveAlias: {
      tailwindcss: path.resolve(__dirname, 'node_modules/tailwindcss'),
    },
  },
}

module.exports = nextConfig
