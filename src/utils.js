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

const getTargets = (api) => {
  const isNodeEnvTest = process.env.NODE_ENV === 'test';
  const isServer = api.caller((caller) => !!caller && caller.isServer);
  const isCallDev = api.caller((caller) => caller?.isDev);
  const isTest = isCallDev == null && isNodeEnvTest;

  return isServer || isTest ? {node: true} : browsers;
};

const getReactOpts = (api) => {
  const isNodeEnvTest = process.env.NODE_ENV === 'test';
  const isNodeEnvDev = process.env.NODE_ENV === 'development';
  const isCallDev = api.caller((caller) => caller?.isDev);
  const isTest = isCallDev == null && isNodeEnvTest;
  const isDev = isCallDev === true || (isCallDev == null && isNodeEnvDev);

  return {
    development: isTest || isDev,
    runtime: 'automatic',
  };
};

// export

module.exports = {compact, ifUses, getTargets, getReactOpts, envOpts};
