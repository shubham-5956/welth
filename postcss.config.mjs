// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;

// postcss.config.js
// postcss.config.js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;


// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     tailwindcss: {},
//   },
// };

// export default config;

// postcss.config.js
// module.exports = {
//   plugins: {
//     'tailwindcss/nesting': {}, // optional, only if you're using nesting
//     '@tailwindcss/postcss': {}, // required for Turbopack
//     autoprefixer: {},
//   },
// };
