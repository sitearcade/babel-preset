// import

const {compact, getReactOpts, envOpts} = require('./src/utils');

// export

module.exports = (api, {sourceMaps}) => {
  api.assertVersion(7);
  api.cache.using(() => process.env.NODE_ENV);

  return {
    sourceMaps: sourceMaps !== false,

    presets: [
      [require('@babel/preset-env'), envOpts],
      require('@babel/preset-typescript'),
      [require('@babel/preset-react'), getReactOpts(api)],
    ],

    plugins: compact([
      ...require('./src/plugins'),
      sourceMaps === false ? null : require('babel-plugin-source-map-support'),
    ]),
  };
};
