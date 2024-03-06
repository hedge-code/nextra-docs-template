const { name } = require("./package.json");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? `/${name}` : "";

module.exports = withNextra({
  images: { unoptimized: true },
  assetPrefix,
  output: 'export'
});
