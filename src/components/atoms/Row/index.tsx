import React from 'react';

import {Container} from './styles';
import {PropsCenter} from './types';

export const Row = ({children}: PropsCenter) => {
  return <Container>{children}</Container>;
};

