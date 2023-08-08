import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Header, HeaderContent, HeaderContentRow, InputRow } from "./styles";
import { InputSearch } from '../../components/molecules/InputSearch';
import CardMap from './componentes/Card';

export const Home: React.FC = () => {
  const [selected, setSelected] = useState(false);
  return (
    <View style={styles.container}>
      <Header>
        <HeaderContent>
          <HeaderContentRow>
            <InputRow>
              <InputSearch />
            </InputRow>
          </HeaderContentRow>

        </HeaderContent>
      </Header>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      <Marker
        onPress={e => setSelected(old => !old)}
        coordinate={{
          latitude: 37.7885,
          longitude: -122.4324,
        }}
      />
      </MapView>
      {!!selected && (
        <CardMap
          distance='1.5km'
          image={require("../../assets/images/igreja.png")}
          title='Igreja'
        />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

