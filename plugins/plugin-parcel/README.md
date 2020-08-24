# @hisystems/snowpack-plugin-parcel

> NOTE: This plugin only works on Snowpack v2.6 or earlier. For bundling with the latest version of Snowpack, we recommend [@hisystems/snowpack-plugin-webpack](../plugin-webpack/) for a smaller build.

Use Parcel to bundle your application for production. Uses Parcel v1.

```
npm install --save-dev @hisystems/snowpack-plugin-parcel
```

```js
// snowpack.config.json
{
  "plugins": ["@hisystems/snowpack-plugin-parcel"]
}
```

⚠️ **NOTE:** Parcel v1.x does not support Snowpack's usage of `import.meta`. This means that `@hisystems/snowpack-plugin-parcel` won't work for Snowpack applications that make use of HMR (`import.meta.hot`) or custom environment variables (`import.meta.env`). If you need to use either, check out [@hisystems/snowpack-plugin-webpack](/packages/plugin-webpack) instead.

#### Default Build Script

```js
{
  "scripts": {"bundle:*": "@hisystems/snowpack-plugin-parcel"}
}
```

#### Plugin Options

None
