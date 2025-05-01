import React,{useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Splash =()=>{
const navigation = useNavigation<any>()
useEffect(()=>{
  setTimeout(() => {
    navigation.navigate('Home')
  }, 1000);
},[])

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/SplashScreen/splashImage.png')}
        style={styles.logo}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD400",
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: "100%",
    width: "100%",
  }

});

export default Splash;
