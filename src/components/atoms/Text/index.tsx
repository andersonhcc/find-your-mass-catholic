import React from 'react';
import {Container} from './styles';
import { PropsText } from './types';

const Text = ({children, typography, color, ...rest}: PropsText) => {
  return (
    <Container
      color={color || 'title'}
      typography={typography || 'body1'}
      {...rest}>
      {children}
    </Container>
  );
};

export {Text};
