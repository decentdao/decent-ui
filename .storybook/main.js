const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    stories: ['../design/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-docs',
        '@chakra-ui/storybook-addon',
        'storybook-addon-designs',
        'storybook-dark-mode',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    webpackFinal: async (config, { configType }) => {
        config.plugins.push(
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, '../src/fonts'),
                        to: 'static/fonts',
                    },
                ],
            })
        );

        return config;
    },
    framework: '@storybook/react',
    staticDirs: ['../design/atoms/assets'],
};
