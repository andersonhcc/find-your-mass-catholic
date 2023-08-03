import 'styled-components';

declare module 'styled-components' {
  export interface Spacing {
    ty: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  }
  export interface Border {
    radius: {
      xs: number;
      sm: number;
    };
  }

  export type ColorsType =
    | 'primary'
    | 'secondary'
    | 'background'
    | 'attention'
    | 'white'
    | 'gray'
    | 'black'
    | 'title'
    | 'subtitle';

  export interface TypographyProps {
    fontFamily: string;
    fontSize: number;
  }

  export interface Typography {
    h1: TypographyProps;
    h2: TypographyProps;
    h3: TypographyProps;
    h4: TypographyProps;
    h5: TypographyProps;
    h6: TypographyProps;
    h7: TypographyProps;
    h8: TypographyProps;
    h9: TypographyProps;
    subtitle1: TypographyProps;
    subtitle2: TypographyProps;
    body1: TypographyProps;
    body2: TypographyProps;
    body3: TypographyProps;
    body4: TypographyProps;
    body5: TypographyProps;
    caption: TypographyProps;
    overline: TypographyProps;
  }
  export interface PaletteType {
    primary: ColorType;
    secondary: ColorType;
    background: ColorType;
    attention: ColorType;
    white: ColorType;
    gray: ColorType;
    black: ColorType;
    title: ColorType;
    subtitle: ColorType;
  }

  export type TypographyType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'h9'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'caption'
    | 'overline';

  export interface DefaultTheme {
    colors: PaletteType;
    typography: Typography;
    spacing: Spacing;
    borders: Border;
  }
}
