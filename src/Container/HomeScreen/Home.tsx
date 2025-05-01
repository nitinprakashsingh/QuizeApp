
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Home(): React.JSX.Element {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate('SplashScreen')}}>
              <Text>Go-Home</Text>
             </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow"
  }
});

export default Home;
