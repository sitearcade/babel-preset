// import

const {compact, getReactOpts, envOpts, ifUses} = require('./src/utils');

// export

module.exports = (api, {sourceMaps = true}) => {
  api.assertVersion(7);
  api.cache.using(() => process.env.NODE_ENV);

  return {
    sourceMaps,

    presets: compact([
      [require('@babel/preset-env'), envOpts],
      ifUses('typescript', require('@babel/preset-typescript')),
      ifUses(
        'react',
        [require('@babel/preset-react'), getReactOpts(api)],
      ),
    ]),

    plugins: compact([
      ...require('./src/plugins'),
      sourceMaps && require('babel-plugin-source-map-support'),
    ]),
  };
};
