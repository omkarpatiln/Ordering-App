import { View, Text } from 'react-native'
import React from 'react'
import { StackProps } from '../../Routes/BottomTabs';
type Props = StackProps<'Notificntions'>;

const Notificntions:React.FC<Props> = ({navigation,route}) => {
  return (
    <View>
      <Text>Notificntions</Text>
    </View>
  )
}

export default Notificntions