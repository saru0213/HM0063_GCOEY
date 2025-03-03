// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export", // Enables static export mode for Vercel
//   };
  
//   export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // Ensures the use of the new App Router
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
      };
      return config;
    },
  };
  
  export default nextConfig;
  
  