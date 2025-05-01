import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';


const Splash =()=>{
const navigation = useNavigation()

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
        <Text>Go-Home</Text>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  }
});

export default Splash;
