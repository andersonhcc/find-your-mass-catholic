import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../../components';
import {ButtonOption} from './styles';

export const CardComponent: React.FC = () => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
      }}>
        <ButtonOption><Text typography='subtitle2'>Sobre</Text></ButtonOption>
        <ButtonOption><Text typography='subtitle2'>Pregação</Text></ButtonOption>
        <ButtonOption><Text typography='subtitle2'>Media</Text></ButtonOption>
      </View>
    </View>
  );

};

