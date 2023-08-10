import React from 'react';
import Icon from '../../atoms/Icon';

import {Container} from './styles';
import {Props} from './types';

const BackButton = ({icon, color, ...rest}: Props) => {
  return (
    <Container {...rest}>
      <Icon icon={icon} activeColor={color} size={15} />
    </Container>
  );
};

export {BackButton};
