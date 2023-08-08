import React from 'react';
import { Shadow } from '../../atoms/Shadow';
import { Container, Input } from "./styles";
import Icon from '../../atoms/Icon';
import { StyleSheet, View } from 'react-native';

export const InputSearch: React.FC = () => {

  return (
      <View style={[styles.heading, styles.elevation]}>
        <Icon icon='search' size={25} />
        <Input placeholder='Pesquise aqui...'/>
      </View>
  );

};

const styles = StyleSheet.create({
  heading: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical:2,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#000',
  },
});
