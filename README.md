# @sitearcade/babel-preset

Our browserslist config.

## Installation

1. `npm i -D @sitearcade/babel-preset`
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
    presets: ['module:@sitearcade/babel-preset'],
  };
};
```

## Variants

This package also exports a slim version for use with NextJS: `@sitearcade/babel-preset/next`.
