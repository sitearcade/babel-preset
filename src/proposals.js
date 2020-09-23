// export

module.exports = [
  [
    require('@babel/plugin-proposal-pipeline-operator'), {
      proposal: 'smart',
    },
  ],
  require('@babel/plugin-proposal-export-default-from'),
  require('@babel/plugin-proposal-logical-assignment-operators'),
  require('@babel/plugin-proposal-nullish-coalescing-operator'),
  require('@babel/plugin-proposal-optional-chaining'),
  require('@babel/plugin-proposal-partial-application'),
  require('@babel/plugin-proposal-throw-expressions'),
  require('@babel/plugin-proposal-class-properties'),
  require('@babel/plugin-proposal-private-methods'),
  require('@babel/plugin-syntax-top-level-await'),
];
