import {DefaultTheme} from 'styled-components';
import {typographyCommon} from './common';
import {borders, spacing} from './common';
import * as Colors from './colors';

export const lightTheme: DefaultTheme = {
  colors: {
    background: Colors.background_light,
    primary: Colors.primary,
    secondary: Colors.secondary,
    gray: Colors.gray,
    white: Colors.white,
    black: Colors.black,
    attention: Colors.attention,
    title: Colors.title,
    subtitle: Colors.subtitle,
  },
  typography: typographyCommon,
  spacing,
  borders,
};
