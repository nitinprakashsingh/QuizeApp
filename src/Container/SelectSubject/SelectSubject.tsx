
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../../Component/TextInput/Input';
import SubmitButton from '../../Component/Button/submitButton';


const SignUp = () => {
  const navigation = useNavigation<any>()
  const [name, setName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [gender, setGender] = useState("")
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [block, setBlock] = useState("")
  const [school, setSchool] = useState("")

  const submitButtonClicked = () => {
   if(name && mobileNumber && gender && state && district && block && school !== " "){
      console.log("remove the text")
   }else{
      navigation.navigate("Home")
   }
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/SplashScreen/background.png')}
        style={styles.imageStye}
        resizeMode="cover"
      >
      </Image>
      <Text style={styles.appText}>The Teachers Quiz</Text>
      <View style={styles.modelView}>
        <Text style={styles.headerText}>Create your account</Text>
        <ScrollView>
          <Input
            placeholder="Name"
            placeholderTextColor={"black"}
            onChangeText={(Text: string) => setName(Text)}
            value={name}
          />
          <Input
            placeholder="Mobile Number"
            placeholderTextColor={"black"}
            onChangeText={(text: string) => setMobileNumber(text)}
            value={mobileNumber}
          />
          <Input
            placeholder="Gender"
            placeholderTextColor={"black"}
            onChangeText={(Text: string) => setGender(Text)}
            value={gender}
          />
          <Input
            placeholder="State"
            placeholderTextColor={"black"}
            onChangeText={(Text: string)=>setState(Text)}
            value={state}
          />
          <Input
            placeholder="District"
            placeholderTextColor={"black"}
            onChangeText = {(Text: string)=>setDistrict(Text)}
            value={district}
          />
          <Input
            placeholder="Block"
            placeholderTextColor={"black"}
            onChangeText={(Text: string)=>setBlock(Text)}
            value={block}
          />
          <Input
            placeholder="School"
            placeholderTextColor={"black"}
            onChangeText={(Text: string)=>setSchool(Text)}
            value={school}
          />
          <SubmitButton
            onPress={() => submitButtonClicked()}
            title='Submit'
            style={styles.submitButton}
            textStyle={styles.submiText}
          />
        </ScrollView>
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
    width: "100%",
    height: "30%",
  },
  modelView: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "70%"
  },
  headerText: {
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 24,
    marginBottom: 10,
  },
  appText: {
    position: 'absolute',
    top: "15%",
    left: "24%",
    color: '#00316B',
    fontWeight: 800,
    fontSize: 25,
    lineHeight: 32,
  },
  submitButton: {
    backgroundColor: '#00316B',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    height: 45,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 15
  },
  submiText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  }
});
export default SignUp;
