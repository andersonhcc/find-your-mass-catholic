import React from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { InputSearch } from '../../components/molecules/InputSearch';
import { Icon, Separator } from '../../components';
import { Header, WrapperTitle } from "./styles";
import igreja from "../../assets/images/igreja.png"
import igreja2 from "../../assets/images/igreja2.png";
import igreja3 from "../../assets/images/igreja3.png";
import { Text } from '../../components';
import { Row } from '../../components/atoms/Row';
import { Image } from 'react-native';
import useAppNavigation from '../../global/hooks/useAppNavigation';
import { ScreenContainer } from '../../components/organisms/ScreenContainer';

export const FavoriteScreen: React.FC = () => {
  const {navigate} = useAppNavigation();

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

  return (
    <ScreenContainer>
      <Separator height={50} />
      <FlatList
        data={mockChurch}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Header>
              <InputSearch />
            </Header>
            <Separator height={40} />
          </>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={data => data.name}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate("DetailsCurchScreen", {data: item})} style={[styles.heading, styles.shadow]}>
            <Image source={item.image}/>
            <Separator height={10} />
            <Row>

              <WrapperTitle>
                <Text typography='body4'>{item.name}</Text>
              </WrapperTitle>

              <Separator width={8} />

              <WrapperTitle>
                <Text typography='body1'>
                  <Icon icon='pin' size={15} />
                  {" "}{item.location}
                </Text>
              </WrapperTitle>

            </Row>
          </Pressable>
        )}
      />
    </ScreenContainer>
  );

};


const styles = StyleSheet.create({
  heading: {
    borderRadius: 12,
    minHeight: 210,
    marginBottom: 20,
    alignItems: "center"
  },
  shadow: {
    backgroundColor: "white",
    elevation: 5,
    shadowColor: '#000',
    borderRadius: 12,
  },
})
