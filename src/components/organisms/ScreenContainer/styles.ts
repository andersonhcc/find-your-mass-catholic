import { ColorsType } from 'styled-components';
import styled from 'styled-components/native';

type PropsContainer = {
  backgroundColor?: ColorsType;
}

export const ContainerView = styled.SafeAreaView<PropsContainer>`
  flex: 1;
  background-color: ${({theme, backgroundColor}) => {
    return backgroundColor ? theme.colors[backgroundColor] : '#F7F7F7' ;
  }};
  padding: 0 5%;
`;

export const ContainerScroll = styled.ScrollView`
  flex: 1;
  background-color: #F7F7F7;
`;
