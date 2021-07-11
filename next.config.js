const path = require("path");
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@svgr/webpack",
          options: {
            babel: false,
            icon: true,
          },
        },
      ],
    });

    config.resolve.alias["@components"] = path.join(__dirname, "components");
    config.resolve.alias["@public"] = path.join(__dirname, "public");
    config.resolve.alias["@lib"] = path.join(__dirname, "lib");

    return config;
  },
};
