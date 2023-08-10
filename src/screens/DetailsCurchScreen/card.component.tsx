import React from 'react';
import { View } from 'react-native';
import { Row } from '../../components/atoms/Row';
import { Text } from '../../components';

export const CardComponent: React.FC = () => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
      }}>
        <Text typography='subtitle2'>Sobre</Text>
        <Text typography='subtitle2'>Pregação</Text>
        <Text typography='subtitle2'>Media</Text>
      </View>
    </View>
  );

};

