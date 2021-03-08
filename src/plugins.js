// import

const {compact, uses} = require('./utils');

// vars

const moduleOpts = {
  cwd: 'packagejson',
  root: ['./'],
  extensions: ['.js', '.ts', '.jsx', '.tsx', '.es', '.es6', '.mjs'],
};
const styledOpts = {ssr: true, fileName: false, pure: true};

// export

module.exports = compact([
  // core
  require('@sitearcade/dotenv/babel'),

  !uses('next') &&
  [require('babel-plugin-module-resolver'), moduleOpts],

  // advanced
  require('babel-plugin-preval'),

  // proposals
  require('@babel/plugin-proposal-throw-expressions'),

  // libs
  uses('ramda') && require('babel-plugin-ramda'),
  uses('lodash') && require('babel-plugin-lodash'),
  uses('date-fns') && require('babel-plugin-date-fns'),
  uses('polished') && require('babel-plugin-polished'),

  // react
  uses('react') &&
  [require('babel-plugin-inline-react-svg'), {svgo: false}],

  uses('styled-components') &&
  [require('babel-plugin-styled-components'), styledOpts],
]);
