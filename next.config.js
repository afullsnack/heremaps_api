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

    return config;
  },
};
