import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import igreja from "../../../../assets/images/igreja.png"
import igreja2 from "../../../../assets/images/igreja2.png";
import igreja3 from "../../../../assets/images/igreja3.png";
import { Text } from '../../../../components';
import Icon from '../../../../components/atoms/Icon';

export const ListFavorites: React.FC = () => {

  const mockChurch = [
    {
      name: "Good Shepherd Evangelical Church", location: "Serilingampalle HYD, 500019", image: igreja
    },
    {
      name: "Christ Gospel Church", location: "Gulmohar ParkHYD, 500041", image: igreja2
    },
    {
      name: "Good Shepherd Evangelical Church ", location: "SerilingampalleHYD, 500019", image: igreja3
    },
  ]

  //TODO:here

  return (
    <FlatList
      data={mockChurch}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      keyExtractor={data => data.name}
      renderItem={({ item }) => (
          <View style={[styles.heading, styles.shadow]}>
            <View style={{width: "100%"}}>
              <Image source={item.image} width={2000000} />
            </View>
            <View style={styles.row}>
              <View style={{ maxWidth: "50%" }}>
                <Text typography='body4'>{item.name}</Text>
              </View>
              <View style={{ maxWidth: "50%", flexDirection: "row" }}>
                <View style={{marginTop: 10, marginRight: 5}}>
                  <Icon icon='pin' size={15}/>
                </View>
                <Text typography='body1'>{item.location}</Text>
              </View>
            </View>
          </View>
      )}
    />
  );

};

const styles = StyleSheet.create({
  heading: {
    borderRadius: 12,
    minHeight: 210,
    marginBottom: 20,
  },
  shadow: {
    backgroundColor: "white",
    elevation: 5,
    shadowColor: '#000',
    borderRadius: 12,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
