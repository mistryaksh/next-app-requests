/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {

    return [

      {
        source: "/",
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'ORIGIN',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'PUT, GET, HEAD, POST, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'include',
          },
          {
            key: 'Content-Type',
            value: 'application/json',
          },
          {
            key: 'origin',
            value: 'https://react-test-app-1.netlify.app/',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
