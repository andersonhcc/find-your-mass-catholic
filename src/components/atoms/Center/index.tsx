import React from 'react';

import {Container} from './styles';
import {PropsCenter} from './types';

const Center = ({children}: PropsCenter) => {
  return <Container>{children}</Container>;
};

export {Center};
