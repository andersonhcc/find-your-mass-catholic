import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import { PropsShadow } from './types';
import { Platform } from 'react-native';

const Shadow = ({ children, ...rest }: PropsShadow) => {
  return (
    <View style={Platform.OS === "ios" ? styles.shadowIOS : styles.shadowANDROID}>
      {children}
    </View>
  );
};

export { Shadow };
