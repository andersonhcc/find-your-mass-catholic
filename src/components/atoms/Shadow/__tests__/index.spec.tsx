import { lightTheme } from '@constants/styles/themes/light';
import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { Shadow } from '..';

import 'jest-styled-components';

describe('<Shadow />', () => {
  it('should render correctly', () => {
    const { debug } = render(
      <Shadow theme={lightTheme}>
        <View />
      </Shadow>
    );
    debug();
  });
});
