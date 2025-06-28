import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Home from '../Screen/Home/Home';
import Orders from '../Screen/Orders/Orders';


export type StackParams = {
  CartScreen: undefined;
  Home: undefined;
  Orders:undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

export type StackProps<ScreenName extends keyof StackParams> =
  NativeStackScreenProps<StackParams, ScreenName>;

const Routes = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}

      >
                <Stack.Screen name="Home" component={Home} />
                

      </Stack.Navigator>
  );
};

export default Routes;
