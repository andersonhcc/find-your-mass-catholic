import React from 'react';

import {Container} from './styles';
import {PropsCenter} from './types';

export const Row = ({children, center = false}: PropsCenter) => {
  return <Container center={center}>{children}</Container>;
};

