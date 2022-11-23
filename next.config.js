require("dotenv").config();
const Dotenv = require("dotenv-webpack");
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withFonts = require("next-fonts");

module.exports = withBundleAnalyzer({
  webpack(config) {
    (config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ]),
      config.module.rules.push({
        test: /.svg$/,
        use: ["@svgr/webpack"],
      });
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    });
    return config;
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["loremflickr.com", "cdn.ayriaclub.ir"],
  },
  trailingSlash: true,
  optimizeFonts: false,
});
