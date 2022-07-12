module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: ['../design/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    features: {
        emotionAlias: false,
    },
    framework: '@storybook/react',
    staticDirs: ['../design/atoms/assets'],
};
