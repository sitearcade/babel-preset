// export

module.exports = [
  require('babel-plugin-preval'),
  require('@sitearcade/dotenv/babel'),
  [
    require('babel-plugin-module-resolver'), {
      cwd: 'packagejson',
      root: process.cwd(),
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs'],
    },
  ],
];
