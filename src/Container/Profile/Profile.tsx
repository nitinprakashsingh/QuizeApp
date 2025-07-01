
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../../Component/TextInput/Input';
import SubmitButton from '../../Component/Button/submitButton';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const SignUp = () => {
  const navigation = useNavigation<any>()
  const [name, setName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [gender, setGender] = useState("")
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [block, setBlock] = useState("")
  const [school, setSchool] = useState("")
  const [data, setData] = useState<any>([])



  const fetchData = async () => {
    var result = await fetch("https://dummyjson.com/todos").then((response) => response.json())
    console.log(result)
    setData(result.todos)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.flatlistView}>
      <Text style={styles.todoText}>{item.todo}</Text>
      <BouncyCheckbox 
      isChecked={item.completed}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
  },
  flatlistView: {
    marginVertical: 5,
    marginHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 0.6,
    borderRadius: 9,
    borderColor: 'gray',
    paddingLeft: 10,
  },
  todoText: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    width: "70%",
  },
  checkbox: {
    height: 20,
    width: 30,
  }
});
export default SignUp;
