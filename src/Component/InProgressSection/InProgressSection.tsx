import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SubmitButton from '../Button/submitButton';
import LinearGradient from 'react-native-linear-gradient';


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
                   horizontal={true}
                   data={dataArray}
                   renderItem={renderComponent}
                   keyExtractor={(item)=> item.id.toString()}
                   />
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

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.7,
        borderColor: "#C6A500",
        height: 200,
        marginTop: -60,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
        //backgroundColor:"#EAD56C"
        },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    compteButton: {
        backgroundColor: '#00316B',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        height: 40,
        marginLeft: 15,
        marginRight: 15,
      },
      completText: {
        fontSize: 14,
        lineHeight: 18,
        color: "white",
        fontWeight:400,
        textAlign: 'center'
      },
      topView: {
        marginLeft: 7,
        marginRight: 7,
        borderColor: "green",
        justifyContent: 'space-between',
        padding: 8,
        flexDirection:'row',
        height: 70,
      },
      challengeText: {
        fontSize: 14,
        fontWeight: 600,
        width: "30%",
        },

        drowLine:{
            height: 0.9,
            width: "100%",
            backgroundColor: "gray",
            marginVertical: 2,
        },
        renderComponent:{
            marginVertical: 2,
            marginHorizontal: 5,
            paddingVertical: 2,
            borderRadius: 5,
            backgroundColor: "#C3A200"
        },
        flatListContainer:{
            width: "50%",
            alignItems: "flex-end"
        },
        styleFirstLetter:{
            fontSize: 12,
            lineHeight: 17,
            color: "black",
            textAlign: 'center',
            paddingHorizontal: 5,
            width: 30
        },
        markStyle:{
            fontSize: 13,
            lineHeight: 17,
            fontWeight: "600",
            padding:2,
            textAlign: 'center'
        }
});

export default InProgressSection;