import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components/native';
import {CardMapProps} from './types';

import {Container, ContainerDescription, ImageLocal} from './styles';
import { Text } from '../../../../components';
import { Separator } from '../../../../components';


const CardMap = ({distance, image, title}: CardMapProps) => {
  const {bottom} = useSafeAreaInsets();
  const {spacing} = useTheme();

  return (
    <Container bottom={bottom}>
      <ImageLocal source={image} />
      <Separator width={spacing.sm} />
      <ContainerDescription>
        <Text typography="overline">{title}</Text>
        <Separator height={50} />
        <Text>{distance}</Text>
      </ContainerDescription>
    </Container>
  );
};

export default CardMap;
