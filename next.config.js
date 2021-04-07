/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const path = require('path');

    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    config.module.rules.push(
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [path.resolve('public/svgs')],
        use: ['file-loader?name=images/[name].[hash].[ext]'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader?name=fonts/[name].[hash].[ext]'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    );
    return config;
  },
};
