// import

const {compact, getTargets, getReactOpts, envOpts} = require('./src/utils');

// export

module.exports = (api, {sourceMaps = true}) => {
  api.assertVersion(7);
  api.cache.using(() => process.env.NODE_ENV);

  return {
    sourceMaps,
    // FIXME: [BABEL] .targets is not allowed in preset options
    // targets: getTargets(api),

    presets: [
      [require('@babel/preset-env'), envOpts],
      require('@babel/preset-typescript'),
      [require('@babel/preset-react'), getReactOpts(api)],
    ],

    plugins: compact([
      ...require('./src/plugins'),
      sourceMaps && require('babel-plugin-source-map-support'),
    ]),
  };
};
