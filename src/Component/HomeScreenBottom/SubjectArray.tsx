import React from "react";
import {View, Text, StyleSheet,FlatList,Image, TouchableOpacity} from "react-native"


const childComponent =()=>{
    const subjectArray = [
        {id: 1, subject: "Math"},
        {id: 2, subject: "English",},
        {id: 3, subject: "Hindi",},
        {id: 4, subject: "Science",},
        {id: 5, subject: "Social Science",}
    ]
    const colorArray = ["#00316B","#5C75FA","#DF631B","#F1CE5B","#DC697B","#E8C92F","#E9A226"]
    const recommendedQuiz = [
        {id: 1, header: "Lorem Ipsum dolo", subText: "Lorem Ipsum dolor sit amet consectetur,",imageUrl: require('../../Assets/Images/quizzess/first.png')},
        {id: 2, header: "Lorem Ipsum dolor sit amet consectetur,",subText: "Lorem Ipsum dolor sit amet consectetur,",imageUrl: require('../../Assets/Images/quizzess/second.png')},
        {id: 3, header: "Lorem Ipsum dolo",subText: "Lorem Ipsum dolor sit amet consectetur,",imageUrl: require('../../Assets/Images/quizzess/third.png')},
        {id: 4, header: "Lorem Ipsum dolo",subText: "Lorem Ipsum dolor sit amet consectetur,",imageUrl: require('../../Assets/Images/quizzess/first.png')},
        {id: 5, header: "Lorem Ipsum dolo",subText: "Lorem Ipsum dolor sit amet consectetur,",imageUrl: require('../../Assets/Images/quizzess/second.png')}
    ]
    type itemProps ={
        subject: string,
        id: number,
    }
    type QuizItemProps = {
        id: number,
        header: string,
        subText: string,
        imageUrl: any
    }
    
    const subjectRenderComponnent = ({item, index}: {item: itemProps, index: number}) =>{
        const backgroundColor = colorArray[index % colorArray.length];
        return(
        <View style={[styles.subjectView, { backgroundColor }]}>
             <Image
                       source={require('../../Assets/Images/subject/science.png')}
                       style={styles.imageStyles}
                       resizeMode="cover"
                       />
            <Text style={styles.textStyle}>{item.subject}</Text>
        </View>
        )
}

const quizRenderComponent = ({item}: {item: QuizItemProps}) =>{
    return(
        <View style={styles.quizeFlatList}>
            <Image
                       source={item.imageUrl}
                       style={styles.quizeImage}
                       resizeMode="contain"
                       />
            <Text style={styles.quizHeaderText}>{item.header}</Text>
            <Text style={styles.subHeaderText}>{item.subText}</Text>
        </View>
    )
}
 
    return(
        <View style={styles.container}>
            <FlatList
             showsHorizontalScrollIndicator={false}
             horizontal={true}
             data={subjectArray}
             keyExtractor={(item)=> item.id.toString()}
             renderItem={subjectRenderComponnent}
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Recommended Quizzes</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>View all</Text>
                </TouchableOpacity>
            </View>
                <FlatList
                 showsHorizontalScrollIndicator ={false}
                    horizontal={true}
                    data={recommendedQuiz}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={quizRenderComponent}
                    />
        </View>
    )

}
export default childComponent;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 15,
        marginTop: 20,
    },
    subjectView:{
        height: 120,
        width: 100,
        borderRadius: 15,
        borderWidth: 3,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "gray"
    },
    imageStyles:{
        height: 35,
        width: 35,
    },
    textStyle: {
        fontSize: 18,
        lineHeight: 24,
        color: "white",
        fontWeight: 700,
        textAlign: 'center'
    },
    headerContainer:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        fontSize: 16,
        fontWeight: 600,
        color: "black",
        lineHeight: 20,
    },
    buttonText: {
        color: "#00316B",
        fontSize: 12,
        lineHeight: 17,
    },
    quizeFlatList:{
        width: 160,
        borderRadius: 10,
        margin: 5,
    },
    quizHeaderText:{
        fontSize: 10,
        fontWeight: 600,
        lineHeight: 14,
        marginTop: 5,
        color: "black"
    },
    subHeaderText:{
        fontSize: 10,
        color: "gray",
        lineHeight: 15,
        marginTop: 2
    },
    quizeImage:{
        height: 100,
        width: 160,
        borderRadius: 10,
    }

})