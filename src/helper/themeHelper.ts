// File: helper/themeHelper.ts

import { Dimensions } from 'react-native';

export const Colors = {
  Primary: '#FF3B30',
  secondary: '#F4F4F4',
  success: '#2ECC71',
  danger: '#E74C3C',
  warning: '#F1C40F',
  info: '#3498DB',
  light: '#ECF0F1',
  dark: '#2C3E50',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  green:'#34C759'
};

export const Sizes = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  field: 44,
  padding: 12,
  Base: 6,
  radius: 25,
};
