import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SelectSubject from '../Container/SelectSubject/SelectSubject';
import Profile from '../Container/Profile/Profile';
import Home from './HomeStack';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    >
     <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Subjects" component={SelectSubject} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default MyTabs