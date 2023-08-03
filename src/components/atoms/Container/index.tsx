import React from 'react';

import {Container as ContainerStyled} from './styles';
import {PropsContainer} from './types';

const Container = ({children, backgroundColor = "white"}: PropsContainer) => {
  return <ContainerStyled backgroundColor={backgroundColor}>{children}</ContainerStyled>;
};

export {Container};
