/* eslint-disable eqeqeq */
/* eslint-disable no-eq-null */

// import

const browsers = require('@sitearcade/browserslist-config');
const find = require('find-config');

// vars

const envOpts = {bugfixes: true};

// config

const packageJson = find.require('package.json') || {};
const inUse = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.devDependencies || {}),
];

// fns

const compact = (arr) => arr.filter(Boolean);
const ifUses = (pkg, req) => (
  inUse.includes(pkg) ? req : null
);

const getIsTest = (api) => {
  const isNodeEnvTest = process.env.NODE_ENV === 'test';
  const isCallDev = api.caller((caller) => caller?.isDev);

  return isCallDev == null && isNodeEnvTest;
};

const getIsDev = (api) => {
  const isNodeEnvDev = process.env.NODE_ENV === 'development';
  const isCallDev = api.caller((caller) => caller?.isDev);

  return isCallDev === true || (isCallDev == null && isNodeEnvDev);
};

const getTargets = (api) => {
  const isServer = api.caller((caller) => !!caller && caller.isServer);
  const isTest = getIsTest(api);

  return isServer || isTest ? {node: true} : browsers;
};

const getReactOpts = (api) => {
  const isTest = getIsTest(api);
  const isDev = getIsDev(api);

  return {
    development: isTest || isDev,
    runtime: 'automatic',
  };
};

// export

module.exports = {compact, ifUses, getTargets, getReactOpts, envOpts};
