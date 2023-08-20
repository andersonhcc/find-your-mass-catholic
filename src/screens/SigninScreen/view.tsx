import React from 'react';
import AvatarSignin from "../../assets/images/avatarsignin.svg"
import { NumberProp } from 'react-native-svg';

import {
  Text,
  Separator,
  Center,
  ScreenContainer,
  Button,
  Icon
} from '../../components';

type Props = {
  handleLoginWithGoogle: () => void;

  objectWidthAndHeight: {
    width: NumberProp;
    height: NumberProp;
  }
}

 const SigninView: React.FC<Props> = ({ handleLoginWithGoogle, objectWidthAndHeight }: Props) => {
  return (
    <ScreenContainer backgroundColor='primary'>
      <Center>
        <Separator height={30} />
        <AvatarSignin
          width={objectWidthAndHeight.width}
          height={objectWidthAndHeight.height}
        />
        <Separator height={40} />
        <Text typography='h5'>Encontre sua missa!</Text>
        <Text typography='caption'>“Pois onde se reunirem dois ou{"\n"} três em meu nome, ali eu estou{"\n"} no meio deles". - Matheus 18:20</Text>
        <Separator height={50} />
        <Button
          borderColor="secondary"
          typography="body3"
          icon={<Icon icon="google" />}
          onPress={handleLoginWithGoogle}
          mode="outlined"
          color='subtitle'
        >
          Entre com o Google
        </Button>
      </Center>
    </ScreenContainer >
  );
};

export default SigninView;
