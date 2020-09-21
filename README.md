# @sitearcade/babel-preset-arcade

Our browserslist config.

## Installation

1. `npm i -D @sitearcade/babel-preset-arcade`
2. Add to `package.json` or `babel.config.js`:

```json
{
  "babel": {
    "presets": [
      "module:@sitearcade/babel-preset"
    ]
  }
}
```

```js
module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['module:@sitearcade/babel-preset-arcade'],
  };
};
```

## Variants

This package also exports a slim version for use with NextJS: `@sitearcade/babel-preset-arcade/next`.
