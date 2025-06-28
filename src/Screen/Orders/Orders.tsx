import { View, Text } from 'react-native'
import React from 'react'
import { StackProps } from '../../Routes/routes';
type Props = StackProps<'Orders'>;

const Orders:React.FC<Props> = ({navigation,route}) => {
  return (
    <View>
      <Text>Orders</Text>
    </View>
  )
}

export default Orders