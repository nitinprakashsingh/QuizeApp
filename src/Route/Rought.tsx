import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Container/HomeScreen/Home';
import SplashScreen from '../Container/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
export default RootStack;