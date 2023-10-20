/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        domains: ['cdn.imagin.studio']
    }
};
  
module.exports = nextConfig;