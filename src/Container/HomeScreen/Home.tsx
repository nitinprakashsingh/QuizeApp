
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home =()=>{
    const navigation = useNavigation<any>()
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image
       source={require('../../Assets/Images/header/illustration.png')}
       style={styles.imageStyle}
       resizeMode="cover"
       />
      <Image
       source={require('../../Assets/Images/header/stars.png')}
       style={styles.secondImage}
       resizeMode="contain"
       />
       <Text style={styles.headerText}>The Teacher Quiz</Text>
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: 160,
    backgroundColor: "#565489",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageStyle: {
    height: "100%",
    width:"100%",
  },
  secondImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerText: {
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 24,
    marginBottom: 10,
    position: 'absolute',
    top: 30,
    left: 15,
    color: 'white'
  },
});

export default Home;
