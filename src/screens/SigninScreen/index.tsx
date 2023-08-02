import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import AvatarSignin from "../../assets/images/avatarsignin.svg"


const SigninScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <AvatarSignin />
      <Text style={{
        fontSize: 40,
      }}>
        oi
      </Text>
    </SafeAreaView>
  );

};

export { SigninScreen };
