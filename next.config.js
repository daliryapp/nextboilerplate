const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withFonts = require("next-fonts");

module.exports = withBundleAnalyzer({
  webpack(config) {
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
    domains: ["devcdn.gardenoflove.ir", "loremflickr.com"],
  },
  trailingSlash: true,
  optimizeFonts: false,
});
