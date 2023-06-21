// module.exports = {
//     collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
//     testMatch: [".//src/**/__tests__/**/*.{js,jsx,mjs}", ".//src/**/?(*.)(spec|test).{js,jsx,mjs}"],
//     transform: {
//       "^.+\\.(js|jsx|mjs)$": "./jest/jest-transformer.js"
//     },
//     transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"]
//   };
const {resolve} = require('path');

module.exports = {
  preset: 'react-native',
  // this is specific to the Jest repo, not generally needed (the files we ignore will be in node_modules which is ignored by default)
  transformIgnorePatterns: [resolve(__dirname, '../../packages')],
};