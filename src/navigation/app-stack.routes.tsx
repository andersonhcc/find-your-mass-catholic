import { CustomBar } from '../components/organisms/CustomBar';
import { Home } from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTheme } from 'styled-components';
import Icon from '../components/atoms/Icon';
import { FavoriteScreen } from '../screens/FavoriteScreen';
const Tab = createBottomTabNavigator();

export const AppRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Início"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: false,
        tabBarActiveTintColor: `${colors.white}`,
        tabBarInactiveTintColor: '#121212',
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.white,
        },
      }}
      tabBar={(props) => <CustomBar {...props} />}>

      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon icon='cross' activeColor="gray" size={20} />;
          },
        }}
      />


    <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon icon='favorite' activeColor="gray" size={20} />;
          },
        }}
      />

    </Tab.Navigator>
  );
};
