import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Screen/Profile';
import Routes from './routes';
import React from 'react';
import Orders from '../Screen/Orders/Orders';
import Home from '../Screen/Home/Home';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Notificntions from '../Screen/Notifictions/Notificntions';
import { View } from 'react-native';
import { Colors } from '../helper/themeHelper';
import Icon from '../Components/Icon';


export type StackParams = {
  Home: undefined;
  Orders:undefined;
  Notificntions:undefined;
  Profile:undefined;
};

const Tab = createBottomTabNavigator<StackParams>();

export type StackProps<ScreenName extends keyof StackParams> =
  NativeStackScreenProps<StackParams, ScreenName>;

const MyTabs=()=> {
  return (
<NavigationContainer>
 <Tab.Navigator screenOptions={{headerShown:false,  tabBarActiveTintColor: Colors.Primary, // active tab label color
    tabBarInactiveTintColor: Colors.black, }}>
          <Tab.Screen 
          
          options={{
          tabBarIcon: ({color, focused, size}) => (
            <View style={{alignItems: 'center',paddingBottom:3}}>
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 70,
                    backgroundColor: focused?Colors.Primary:Colors.black,
                    marginTop: -10,
                    marginBottom: 5,
                  }}
                />
              )}
              <Icon
               name='home' size={25} type='FontAwesome' color={focused?Colors.Primary:Colors.black}
              />
          
            </View>
          ),
        }} name="Home" component={Home} />
          <Tab.Screen     options={{
          tabBarIcon: ({color, focused, size}) => (
            <View style={{alignItems: 'center',paddingBottom:3}}>
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 70,
                    backgroundColor: focused?Colors.Primary:Colors.black,
                    marginTop: -10,
                    marginBottom: 5,
                  }}
                />
              )}
             
              <Icon name='truck' type='MaterialCommunityIcons' color={focused?Colors.Primary:Colors.black}/>
            </View>
          ),
        }} name='Orders' component={Orders}/>
          <Tab.Screen      options={{
          tabBarIcon: ({color, focused, size}) => (
            <View style={{alignItems: 'center',paddingBottom:3}}>
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 70,
                    backgroundColor: focused?Colors.Primary:Colors.black,
                    marginTop: -10,
                    marginBottom: 5,
                  }}
                />
              )}
            
              <Icon name='notifications' type='Ionicons' color={focused?Colors.Primary:Colors.black}/>
            </View>
          ),
        }} name='Notificntions' component={Notificntions}/>
          <Tab.Screen     options={{
          tabBarIcon: ({color, focused, size}) => (
            <View style={{alignItems: 'center',paddingBottom:3}}>
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 70,
                    backgroundColor: focused?Colors.Primary:Colors.black,
                    marginTop: -10,
                    marginBottom: 5,
                  }}
                />
              )}
             
           
              <Icon  name='user' type='EvilIcons' color={focused?Colors.Primary:Colors.black}/>
            </View>
          ),
        }} name='Profile' component={Profile}/>


    </Tab.Navigator>
</NavigationContainer>    
   
  );
}
export default MyTabs;