import React from 'react';
import { ContainerScroll, ContainerView } from './styles'
import { ColorsType } from 'styled-components';

type Props = {
  scroll?: boolean
  children: React.ReactNode;
  backgroundColor?: ColorsType
}

export const ScreenContainer = ({ scroll = false, children, backgroundColor }: Props) => {
  if (scroll) {
    return (
      <ContainerScroll
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ContainerScroll>

    )
  }
  return (
    <ContainerView backgroundColor={backgroundColor}>
      {children}
    </ContainerView>
  );
}

