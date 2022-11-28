const { propNames } = require("@chakra-ui/styled-system")
const excludedPropNames = propNames.concat(["as", "apply", "sx", "__css"])

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: ['../design/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    refs: {
        '@chakra-ui/react': {
            disable: true,
        },
    },
    addons: [
        '@storybook/addon-essentials',
        '@chakra-ui/storybook-addon',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            propFilter: (prop) => {
                const isStyledSystemProp = excludedPropNames.includes(prop.name);
                const isHTMLElementProp = prop.parent?.fileName.includes('node_modules') ?? false;
                return !(isStyledSystemProp || isHTMLElementProp);
            },
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            shouldExtractLiteralValuesFromEnum: true,
        }
    },
    staticDirs: ['../design/atoms/assets/'],
};
