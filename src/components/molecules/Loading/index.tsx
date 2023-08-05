import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Container } from '../../atoms/Container';
import { PropsLoading } from './types';

export const Loading = ({ color, size }: PropsLoading) => {
  const { colors } = useTheme();

  return (
    <Container backgroundColor={colors.background}>
      <ActivityIndicator color={color ? color : colors.primary} size={size} />
    </Container>
  );
};
