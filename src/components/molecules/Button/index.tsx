import React, {useMemo} from 'react';
import {ButtonProps} from './types';
import {Container, Title, Loading, AbsoluteIcon} from './styles';
import { useTheme } from 'styled-components';

const Button = ({
  children,
  color = 'primary',
  typography = 'body2',
  loading,
  borderColor,
  icon,
  mode = 'contained',
  onPress,
  ...rest
}: ButtonProps) => {
  const {colors} = useTheme();
  const colorByMode = useMemo(() => {
    return mode === 'outlined' ? colors[color] : colors[color];
  }, [mode, color, colors]);

  return (
    <Container
      mode={mode}
      onPress={onPress}
      borderColor={colors[borderColor]}
      color={colors[color].main}
      {...rest}>
      {!!icon && <AbsoluteIcon>{icon}</AbsoluteIcon>}
      <Title typography={typography} color={colorByMode}>
        {children}
      </Title>
      {loading && <Loading size={15} color={colorByMode} />}
    </Container>
  );
};

export {Button};
