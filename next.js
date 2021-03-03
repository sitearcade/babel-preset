// import

const {envOpts} = require('./src/utils');

// export

module.exports = (api) => {
  api.assertVersion(7);
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [['next/babel', {'preset-env': envOpts}]],
    plugins: require('./src/plugins'),
  };
};
