
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home =()=>{
    const navigation = useNavigation<any>()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Splash')}}>
              <Text>Go-Splash</Text>
             </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
     alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
