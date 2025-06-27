import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Compontent/Home';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Screen/Profile';
import Routes from './routes';

const Tab = createBottomTabNavigator();

const MyTabs=()=> {
  return (
<NavigationContainer>
 <Tab.Navigator screenOptions={{headerShown:false,}}>
          <Tab.Screen options={{}} name="Home" component={Routes} />

            <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
</NavigationContainer>    
   
  );
}
export default MyTabs;