import { create } from '@storybook/theming';

const logo = require("./assets/logo.svg") as string;
const isLocalhost = globalThis.location?.toString().includes('localhost');

export const theme = create({
    base: 'dark',
    brandTitle: isLocalhost ? 'Fractal Local' : 'Fractal',
    brandImage: logo,
    brandUrl: '/',
    brandTarget: '_self',

    colorPrimary: '#07000D',
    colorSecondary: '#AC54FF',

    // UI
    appBorderRadius: 4,
    appContentBg: "gray"
});