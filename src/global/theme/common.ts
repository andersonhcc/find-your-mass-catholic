import {Typography, Spacing, Border} from 'styled-components';

import {Fonts} from './fonts';

export const typographyCommon: Typography = {
  h1: {
    fontSize: 96,
    fontFamily: Fonts.regular,
  },
  h2: {
    fontSize: 48,
    fontFamily: Fonts.bold,
  },
  h3: {
    fontSize: 32,
    fontFamily: Fonts.bold,
  },
  h4: {
    fontSize: 32,
    fontFamily: Fonts.medium,
  },
  h5: {
    fontSize: 24,
    fontFamily: Fonts.bold,
  },
  h6: {
    fontSize: 24,
    fontFamily: Fonts.regular,
  },
  h7: {
    fontSize: 24,
    fontFamily: Fonts.medium,
  },
  h8: {
    fontSize: 20,
    fontFamily: Fonts.medium,
  },
  h9: {
    fontSize: 20,
    fontFamily: Fonts.regular,
  },
  subtitle1: {
    fontSize: 18,
    fontFamily: Fonts.regular,
  },
  subtitle2: {
    fontSize: 18,
    fontFamily: Fonts.medium,
  },
  body1: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  body2: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  body3: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  body4: {
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
  body5: {
    fontSize: 12,
    fontFamily: Fonts.medium,
  },
  caption: {
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  overline: {
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
};
export const spacing: Spacing = {
  ty: 4,
  xs: 5,
  sm: 10,
  md: 20,
  lg: 25,
  xl: 38,
  xxl: 45,
  xxxl: 100,
};

export const borders: Border = {
  radius: {
    xs: 4,
    sm: 10,
  },
};
