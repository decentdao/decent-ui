module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: ['../design/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-docs',
        '@chakra-ui/storybook-addon',
        'storybook-addon-designs',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: '@storybook/react',
    staticDirs: ['../design/atoms/assets'],
};
