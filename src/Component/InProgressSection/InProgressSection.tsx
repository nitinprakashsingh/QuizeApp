import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, FlatList,Image,Dimensions } from 'react-native';
import SubmitButton from '../Button/submitButton';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Style';


const InProgressSection: React.FC = () => {
    var dataArray = [{id: 1, subject: "Maths",marks: 90,FirstLetter: "M"},
        {id: 2, subject: "English",marks: 70,FirstLetter: "E"},
        {id: 3, subject: "Hindi",marks: 10,FirstLetter: "H"},
        {id: 4, subject: "Science",marks: 16,FirstLetter: "S"},
        {id: 5, subject: "Social Science",marks: 15,FirstLetter: "SS"},
        {id: 6, subject: "English",marks: 14,FirstLetter: "E"},
        {id: 7, subject: "Hindi",marks: 12,FirstLetter: "H"},
        {id: 8, subject: "Science",marks: 11,FirstLetter: "S"},
        {id: 9, subject: "Social Science",marks: 99,FirstLetter: "SS"},
    ]
    const handleCompleteChallenge = () => {
        console.log('Challenge Completed!');
    };
    type itemProps ={
        marks: number,
        FirstLetter: string,
    }
    
     useEffect(()=>{
    },[])

    const renderComponent = ({item}: {item: itemProps})=>(
        <View style={styles.renderComponent}>
            <Text style={styles.markStyle}>
                {item.marks}
            </Text>
             <View style={styles.drowLine}></View>
            <Text style={styles.styleFirstLetter}>{item.FirstLetter}</Text>
        </View>
    )
    return (
        <LinearGradient
        colors={['#C3A200', '#F8D420', '#C3A200', '#F8D420']}
        locations={[0, 0.34, 0.67, 1]}
        style={styles.container}
      >
            <View style={styles.topView}>
                <Text style={styles.challengeText}>Your Monthly Challenge</Text>
                <View style={styles.flatListContainer}>
                   <FlatList
                   showsHorizontalScrollIndicator={false}
                   horizontal={true}
                   data={dataArray}
                   renderItem={renderComponent}
                   keyExtractor={(item)=> item.id.toString()}
                   />
                </View>
            </View>
            <View style={styles.middleView}>
                <View style={styles.ImageContainer}>
                 <Image
                       source={require('../../Assets/Images/subject/calculator.png')}
                       style={styles.imageStyles}
                       resizeMode="contain"
                       />
                       </View>
                       <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Math</Text>
                        <Text>Long Text in tow lines i need to write more text so that it become more than one line</Text>
                       </View>
            </View>
            <SubmitButton
             title='Complete the Challenge'
             onPress={handleCompleteChallenge}
             style={styles.compteButton}
             textStyle={styles.completText}
            />
        </LinearGradient> 
    );
};


export default InProgressSection;