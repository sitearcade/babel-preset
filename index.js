// export

module.exports = (api) => {
  api.assertVersion(7);
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      [require('@babel/preset-env'), {targets: {node: true}}],
      [require('@babel/preset-react'), {}],
      [require('@babel/preset-flow'), {all: true}],
    ],

    plugins: [
      ...require('./src/advanced'),
      ...require('./src/proposals'),
      ...require('./src/libs'),
    ],

    env: {
      development: {
        sourceMaps: true,
        plugins: [require('babel-plugin-source-map-support')],
      },
    },
  };
};
