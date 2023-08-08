import styled from 'styled-components/native';

export const Header = styled.View`
  position: absolute;
  height: 153px;
  width: 100%;
  background-color: rgba(255, 209, 166, 0.75);
  z-index: 1;
  top: 0;
`;

export const HeaderContent = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const HeaderContentRow = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const InputRow = styled.View`
  flex: 1;
  flex-direction: row;
  border-radius: 10px;
`;
