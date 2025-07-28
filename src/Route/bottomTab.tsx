import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SelectSubject from '../Container/SelectSubject/SelectSubject';
import Profile from '../Container/Profile/Profile';
import Home from './HomeStack';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../Assets/Images/header/illustration.png')} style={{ width: 24, height: 24, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen 
        name="Subjects" 
        component={SelectSubject} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../Assets/Images/subject/science.png')} style={{ width: 24, height: 24, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../Assets/Images/header/stars.png')} style={{ width: 24, height: 24, tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs