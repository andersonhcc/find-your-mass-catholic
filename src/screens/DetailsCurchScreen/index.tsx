import React from 'react';
import { Container, Text } from '../../components';
import { BackButton } from '../../components/molecules/BackButton';
import { Row } from '../../components/atoms/Row';
import { Separator } from '../../components';
import useAppNavigation from '../../global/hooks/useAppNavigation';
import { useRoute } from '@react-navigation/native';
import { ImageBackground, View } from 'react-native';
import { CardComponent } from './card.component';


export const DetailsCurchScreen: React.FC = () => {
  const { goBack } = useAppNavigation();
  const { params } = useRoute();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ width: "100%", height: 200 }}>
        <ImageBackground source={params?.data.image} resizeMode="cover" style={{ flex: 1 }}>
          <Separator height={30} />
          <Row center>
            <BackButton icon='back' color='white' onPress={() => goBack()} />
            <Text typography='body5' color='white'>Voltar</Text>
          </Row>
        </ImageBackground>
      </View>
      <Container backgroundColor='#F7F7F7'>
        <Separator height={10} />
        <Text typography='caption'>{params?.data.name}</Text>
        <Text typography='body5'>{params?.data.location}</Text>

        <Separator height={20} />
        <CardComponent />

      </Container>
    </View>
  );

};

