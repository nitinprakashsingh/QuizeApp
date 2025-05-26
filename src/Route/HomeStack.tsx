import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubjectDetails from '../Container/SubjectDetails/SubjectDetails';
import Home from '../Container/HomeScreen/Home';


const Stack = createNativeStackNavigator<any>();

const HomeStack=()=>{
  return(
    <Stack.Navigator
     screenOptions={{headerShown: false}}
     >
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="SubjectDetails" component={SubjectDetails} />
     </Stack.Navigator>
  )
}
export default HomeStack