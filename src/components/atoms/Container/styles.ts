import styled from 'styled-components/native';

type Props = {
  backgroundColor: string;
}

export const Container = styled.View<Props>`
  flex: 1;
  padding: 0 ${({theme}) => theme.spacing.md}px;
  background-color: ${({theme, backgroundColor}) => {
    return theme.colors[backgroundColor];
  }};
`;
