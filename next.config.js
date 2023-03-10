/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// module.exports = () => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/randomQuote",
//         destination: "https://programming-quotesapi.vercel.app/api/random",
//       },
//     ];
//   };
//   return {
//     rewrites,
//   };
// };
