import theme from '../design/tokens/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    chakra: {
        theme,
    },
    controls: {
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Design Language', 'Design Tokens'],
        },
    },
};
