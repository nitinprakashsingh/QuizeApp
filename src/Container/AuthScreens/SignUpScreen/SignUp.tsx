
import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SignUp =()=>{
    const navigation = useNavigation<any>()
  return (
    <View style={styles.container}>
        <Image
                source={require('../../../Assets/SplashScreen/background.png')}
                style={styles.imageStye}
                resizeMode="cover"
              />
      <View style={styles.modelView}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD400"
  },
  imageStye: {
    width : "100%",
    height: "40%",
  },
  modelView: {
    height: "62%",
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: "40%",
  }
});

export default SignUp;
