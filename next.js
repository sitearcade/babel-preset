// import

const find = require('find-config');

// config

const packageJson = find.require('package.json') || {};
const inUse = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.devDependencies || {}),
];

// fns

const compact = (arr) => arr.filter(Boolean);
const packageUses = (pkg, req) => (
  inUse.includes(pkg) ? require(req) : []
);

// export

module.exports = (api) => {
  api.assertVersion(7);
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      'next/babel',
      [require('@babel/preset-flow'), {all: true}],
    ],

    plugins: compact([
      ...require('./src/advanced'),
      ...require('./src/proposals'),
      ...require('./src/libs'),
      ...packageUses('styled-components', './src/styled'),
      [require('babel-plugin-inline-react-svg'), {svgo: false}],
    ]),
  };
};
