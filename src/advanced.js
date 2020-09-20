// export

module.exports = [
  require('babel-plugin-preval'),
  require('../plugins/dotenv'),
  [
    require('babel-plugin-module-resolver'), {
      cwd: 'packagejson',
      root: process.cwd(),
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs'],
    },
  ],
];
