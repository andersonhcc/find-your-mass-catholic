import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SigninScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerLeft: undefined, gestureEnabled: false }}>

      <Stack.Screen name="SignIn" component={SignIn} />

    </Stack.Navigator>
  );
}
