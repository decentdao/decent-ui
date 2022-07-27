import { create } from '@storybook/theming';

const logo = require("./assets/logo.svg") as string;
const isLocalhost = globalThis.location?.toString().includes('localhost');

export const theme = create({
    base: 'dark',
    brandTitle: isLocalhost ? 'Fractal Local' : 'Fractal',
    brandImage: logo,
    brandUrl: '/',
    brandTarget: '_self',

    colorPrimary: '#1B1A1A',
    colorSecondary: '#FABD2E',

    // UI
    appBorderRadius: 4,
    appContentBg: '#999'
});