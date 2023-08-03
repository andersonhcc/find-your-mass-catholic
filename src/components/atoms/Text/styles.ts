import styled from 'styled-components/native';

import {PropsText} from './types';

type ContainerProps = Required<Pick<PropsText, 'color' | 'typography'>>;

export const Container = styled.Text<ContainerProps>`
  color: ${({theme, color}) => {
    return theme.colors[color];
  }};
  font-size: ${({theme, typography}) => {
    return theme.typography[typography].fontSize;
  }}px;
  font-family: ${({theme, typography}) => {
    return theme.typography[typography].fontFamily;
  }};
`;
