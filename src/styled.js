// export

module.exports = [
  require('babel-plugin-polished'),
  [
    require('babel-plugin-styled-components'), {
      ssr: true,
      fileName: false,
      pure: true,
    },
  ],
];
