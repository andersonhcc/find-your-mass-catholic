import React, { useEffect } from 'react';
import useAppearance from './global/hooks';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Routes } from './navigation';

function App(): JSX.Element {
  const { theme } = useAppearance();

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId: "1069741622235-ioodbco1nme5nvid54iuf2ak95rk3u1m.apps.googleusercontent.com",
    });
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
