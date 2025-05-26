import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Container/SplashScreen/SplashScreen';
import SignUp from '../Container/AuthScreens/SignUpScreen/SignUp';
import MyTabs from './bottomTab';


const Stack = createNativeStackNavigator<any>();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="MainTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default RootStack;
