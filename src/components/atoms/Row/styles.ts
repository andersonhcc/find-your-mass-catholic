import styled, {css} from 'styled-components/native';

type Props = {
  center?: boolean
}

export const Container = styled.View<Props>`
flex-direction: row;
${({center}) => center && css`align-items: center`}
`;
