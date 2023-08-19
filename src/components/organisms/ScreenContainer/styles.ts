import styled from 'styled-components/native';

type PropsContainer = {
  backgroundColor?: string;
}

export const ContainerView = styled.SafeAreaView<PropsContainer>`
  flex: 1;
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : '#F7F7F7'};
  padding: 0 5%;
`;

export const ContainerScroll = styled.ScrollView`
  flex: 1;
  background-color: #F7F7F7;
`;
