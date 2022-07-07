const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = async ({ config }) => {
  config.plugins.push(
      new CopyWebpackPlugin({
          patterns: [
              {
                  from: path.resolve(__dirname, '../design/atoms/assets/fonts'),
                  to: 'static/fonts',
              },
          ],
      })
  );

  return config;
};