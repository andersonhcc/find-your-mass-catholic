import React from 'react';
 import {View} from 'react-native';
 import { InputSearch } from '../../components/molecules/InputSearch';
 import { Container } from '../../components';
 import {Header, Main} from "./styles";
 import { ListFavorites } from './components/ListFavorites';

const  FavoriteScreen: React.FC = () => {

return (
   <Container backgroundColor='#F7F7F7'>
    <Header>
      <InputSearch />
    </Header>

    <Main>
      <ListFavorites />
    </Main>
   </Container>
);

};

export { FavoriteScreen };
