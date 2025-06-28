import React from 'react';
import {View} from 'react-native';
interface ISpacingProps {
  width?: number;
  height?: number;
}

export const Spacing: React.FC<ISpacingProps> = props => {
  const {width = 0, height = 0} = props;
  return <View style={{width: width, height: height}}></View>;
};
