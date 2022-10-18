import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
console.log("🚀 ~ file: theme.ts ~ line 2 ~ defaultTheme", defaultTheme)
import foundations from './foundations';
import breakpoints from './breakpoints';
import components from '../atoms/components/theme';
import styles from './styles';

const theme = extendTheme(
  {
    styles,
    breakpoints,
    ...foundations,
  },
  {
    ...defaultTheme,
    components: components,
    breakpoints: {},
    colors: {},
    fontWeights: {},
  }
);
export default theme;