import { ChakraProvider } from '@chakra-ui/react';
import { addDecorator } from '@storybook/react';
import theme from '../design/tokens/theme';

const providerFn = (story) => {
    return <ChakraProvider theme={theme}>{story()}</ChakraProvider>;
};

addDecorator(providerFn);


export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
