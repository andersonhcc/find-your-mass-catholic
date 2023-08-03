import React, {useEffect} from 'react';
import { SigninScreen } from './src/screens/SigninScreen';
import useAppearance from './src/global/hooks';
import {ThemeProvider} from 'styled-components/native';
import { StatusBar } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEBCLIENTID } from '@env';

function App(): JSX.Element {
  const { theme } = useAppearance();

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId: WEBCLIENTID,
    });
  },[])

  return (
      <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
        <SigninScreen />
      </ThemeProvider>
  );
}

export default App;
