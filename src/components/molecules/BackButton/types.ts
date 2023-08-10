import {PressableProps} from 'react-native/types';
import { NameIconType } from '../../../utils/icons';
import { ColorsType } from 'styled-components';
export interface Props extends PressableProps {
  icon: NameIconType;
  color?: ColorsType
}
