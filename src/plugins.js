// import

const {compact, ifUses} = require('./utils');

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
  [require('babel-plugin-module-resolver'), moduleOpts],

  // advanced
  require('babel-plugin-preval'),

  // proposals
  require('@babel/plugin-proposal-throw-expressions'),

  // libs
  ifUses('ramda', require('babel-plugin-ramda')),
  ifUses('lodash', require('babel-plugin-lodash')),
  ifUses('date-fns', require('babel-plugin-date-fns')),

  // react
  [require('babel-plugin-inline-react-svg'), {svgo: false}],

  // styles
  ifUses('polished', require('babel-plugin-polished')),
  ifUses('styled-components', [require('babel-plugin-styled-components'), styledOpts]),
]);
