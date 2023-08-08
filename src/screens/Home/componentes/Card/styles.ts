import styled from 'styled-components/native';

export const Container = styled.View<{bottom: number}>`
  padding: 24px 13px;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  position: absolute;
  width: 89%;
  bottom: ${({bottom, theme}) => bottom + 80}px;
`;

export const ImageLocal = styled.Image`
  height: 90px;
  width: 120px;
  border-radius: 10px;
`;

export const ContainerDescription = styled.View`
  justify-content: space-between;
  max-width: 70%;
`;
