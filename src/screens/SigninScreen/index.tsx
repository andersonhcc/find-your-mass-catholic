import React from 'react';
import { PixelRatio, SafeAreaView } from 'react-native';
import AvatarSignin from "../../assets/images/avatarsignin.svg"
import { Text, Separator, Center, Container, Button, Icon } from '../../components';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const SigninScreen: React.FC = () => {

  const handleGoogleButton = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const {user} = await GoogleSignin.signIn();
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const imageResponsiveInIOSandAndroid = {
    width: PixelRatio.getPixelSizeForLayoutSize(120),
    height: PixelRatio.getPixelSizeForLayoutSize(120),
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container backgroundColor='primary'>
        <Center>
         <Separator height={30} />
          <AvatarSignin
            width={imageResponsiveInIOSandAndroid.width}
            height={imageResponsiveInIOSandAndroid.height}
          />
          <Separator height={40} />
          <Text typography='h5'>Encontre sua missa!</Text>
          <Text typography='caption'>“Pois onde se reunirem dois ou{"\n"} três em meu nome, ali eu estou{"\n"} no meio deles". - Matheus 18:20</Text>
          <Separator height={50} />
          <Button
            borderColor="secondary"
            typography="body3"
            icon={<Icon icon="google" />}
            onPress={handleGoogleButton}
            mode="outlined"
            color='subtitle'
          >
            Entre com o Google
          </Button>
        </Center>
      </Container >
    </SafeAreaView>
  );
};

