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
    fontBase: 'TT Firs Neue Variable',

    // UI
    appBorderRadius: 4,
    appContentBg: '#999'
});

export const docsTheme = create({
    "base": "dark",
    "appContentBg": "#f8f4fc29",
    "fontBase": "\"Nunito Sans\", -apple-system, \".SFNSText-Regular\", \"San Francisco\", BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "fontCode": "ui-monospace, Menlo, Monaco, \"Roboto Mono\", \"Oxygen Mono\", \"Ubuntu Monospace\", \"Source Code Pro\", \"Droid Sans Mono\", \"Courier New\", monospace",
    "textColor": "#FFFFFF",
})