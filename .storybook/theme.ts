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

    // Typography
    fontBase: 'IBM Plex Sans',
    fontCode: 'IBM Plex Mono, monospace',

    // UI
    appBorderRadius: 4,
    appContentBg: '#999'
});

export const docsTheme = create({
    "base": "dark",
    "appContentBg": "linear-gradient(180deg, #272520 0%, #1B1A18 100%)",
    "fontBase": "\"Nunito Sans\", -apple-system, \".SFNSText-Regular\", \"San Francisco\", BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "fontCode": "ui-monospace, Menlo, Monaco, \"Roboto Mono\", \"Oxygen Mono\", \"Ubuntu Monospace\", \"Source Code Pro\", \"Droid Sans Mono\", \"Courier New\", monospace",
    "textColor": "#FFFFFF",
})