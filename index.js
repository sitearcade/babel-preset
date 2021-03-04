// import

const {getReactOpts, envOpts} = require('./src/utils');

// export

module.exports = (api, {sourceMaps = true}) => {
  api.assertVersion(7);
  api.cache.using(() => process.env.NODE_ENV);

  return {
    // FIXME: [BABEL] .targets is not allowed in preset options
    // targets: getTargets(api),

    presets: [
      [require('@babel/preset-env'), envOpts],
      require('@babel/preset-typescript'),
      [require('@babel/preset-react'), getReactOpts(api)],
    ],

    plugins: require('./src/plugins'),

    overrides: [
      {
        exclude: '**/*.test.js',
        sourceMaps,
        plugins: [sourceMaps && require('babel-plugin-source-map-support')],
      },
    ],
  };
};
