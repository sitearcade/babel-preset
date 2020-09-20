// import

const {packageUses, compact} = require('@arc/lofi');

// fns

const packageUsesArr = (pkg, req) => (
  packageUses(pkg) ? require(req) : []
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
      ...packageUsesArr('styled-components', './src/styled'),
    ]),
  };
};
