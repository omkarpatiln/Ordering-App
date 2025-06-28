import { View, Text } from 'react-native'
import React from 'react'
import { StackProps } from '../../Routes/BottomTabs';
type Props = StackProps<'Orders'>;

const Profile:React.FC<Props> = ({navigation,route}) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile