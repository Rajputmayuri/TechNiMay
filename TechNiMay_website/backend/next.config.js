/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow dev origins for local testing and cross-origin dev tooling
  allowedDevOrigins: [
    'localhost:3000',
    'localhost:3001',
    'localhost:5173',
    '127.0.0.1:3000',
    '127.0.0.1:3001',
    '127.0.0.1:5173',
    '10.159.177.206:3000',
    '10.159.177.206:3001',
    '10.159.177.206:5173',
  ],
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ALLOWED_ORIGIN || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ];
  }
};

module.exports = nextConfig;
