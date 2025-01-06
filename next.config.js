/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig; // Use CommonJS syntax


module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  