import {ImageProps} from 'react-native/types';
import {NameIconType} from '../../../utils/icons';

export interface IconOptionProps {
  icon: NameIconType;
  size?: number;
  activeColor?: string;
}

export interface IconProps extends ImageProps, IconOptionProps {}
