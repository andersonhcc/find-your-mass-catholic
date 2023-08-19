import React from 'react';
import { ContainerScroll, ContainerView } from './styles'

type Props = {
  scroll?: boolean
  children: React.ReactNode;
  backgroundColor?: string
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
  else{


  return (
    <ContainerView backgroundColor={backgroundColor}>
      {children}
    </ContainerView>
  );
}

};

