import {ColorsType, TypographyType} from 'styled-components';
import {ReactNode} from 'react';
import {TextProps} from 'react-native';
import {DefaultTheme} from 'styled-components/native';

export interface PropsText extends TextProps {
  children: ReactNode;
  color?: ColorsType;
  typography?: TypographyType;
  theme?: DefaultTheme;
}
