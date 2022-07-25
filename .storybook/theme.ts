import { create } from '@storybook/theming';
import logo from './assets/logo.svg';

const isLocalhost = globalThis.location?.toString().includes('localhost');

export const theme = create({
  base: 'dark',
  brandTitle: isLocalhost ? 'Fractal Local' : 'Fractal',
  brandImage: logo,
  brandUrl: '/',

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "navy",
  appBorderRadius: 4,

  // Text colors
  textColor: "navy",
  textInverseColor: "white",
  textMutedColor: "gray",

  // Toolbar default and active colors
  barTextColor: "gray",
  barSelectedColor: "navy",
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "navy",
  inputTextColor: "navy",
  inputBorderRadius: 2,
});
