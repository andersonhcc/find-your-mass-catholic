import { ActivityIndicatorProps } from 'react-native';
import { ColorsType, useTheme } from 'styled-components';

export interface PropsLoading extends ActivityIndicatorProps {
  color?: string;
}
