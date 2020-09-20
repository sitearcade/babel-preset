// export

module.exports = [
  [
    require('babel-plugin-module-resolver'), {
      cwd: 'packagejson',
      root: process.cwd(),
    },
  ],
];
