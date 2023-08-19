import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { ScreenContainer } from '../../organisms/ScreenContainer';
import { PropsLoading } from './types';

export const Loading = ({ color, size }: PropsLoading) => {
  const { colors } = useTheme();

  return (
    <ScreenContainer backgroundColor={colors.background}>
      <ActivityIndicator color={color ? color : colors.primary} size={size} />
    </ScreenContainer>
  );
};
