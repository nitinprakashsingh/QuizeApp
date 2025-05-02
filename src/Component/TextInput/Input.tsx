import React, { useState } from 'react';
import { View, TextInput,StyleSheet} from 'react-native';



const Input = (props: any) =>{
    return(
        <View>
            <TextInput style={styles.input}
               placeholder={props.placeholder}
               placeholderTextColor={"black"}
               onChangeText={props.onChangeText}
               value ={props.value}
               >
            </TextInput>
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
    input: {
        height: 45,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#DDDDDD",
        marginTop: 7,
        marginBottom: 7,
        paddingLeft: 10,  
      }
})
