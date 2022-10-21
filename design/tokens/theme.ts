import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
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
    fonts: {}
  }
);
export default theme;