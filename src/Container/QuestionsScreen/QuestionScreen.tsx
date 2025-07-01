import React, { useState } from "react";
import { StyleSheet, Image, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";


type QuestionScreenRouteProp = RouteProp<{ params: { topicName: string } }, 'params'>;


const questions = [
    {
        id: 1,
        text: "What is the capital of France?",
        options: [
            { id: 'a', text: "Paris" },
            { id: 'b', text: "London" },
            { id: 'c', text: "Berlin" },
            { id: 'd', text: "Delhi" }
        ]
    },
    {
        id: 2,
        text: "Select prime numbers",
        options: [
            { id: 'a', text: "2" },
            { id: 'b', text: "4" },
            { id: 'c', text: "5" },
            { id: 'd', text: "8" }
        ]
    },
    {
        id: 3,
        text: "Capital of Bihar",
        options: [
            { id: 'a', text: "Patna" },
            { id: 'b', text: "New York" },
            { id: 'c', text: "Kolkata" },
            { id: 'd', text: "Bhagalpur" }
        ]
    }
];

const QuestionScreen = ({ route }: { route: QuestionScreenRouteProp }) => {
    const { topicName } = route.params
    const navigation = useNavigation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [questionId: number]: string[] }>({});


    const currentQuestion = questions[currentIndex];

    const toggleOption = (optionId: any) => {
  const questionId = currentQuestion.id;

  setAnswers(prev => ({
    ...prev,
    [questionId]: optionId 
  }));
};

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
                <Text style={styles.headerText}>{topicName}</Text>
            </View>

            <Text style={{ fontSize: 20 }}>{currentQuestion.text}</Text>

            {currentQuestion.options.map(option => (
                <View key={option.id} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8, paddingHorizontal: 16 }}>
                    <BouncyCheckbox
                        isChecked={answers[currentQuestion.id] === option.id}
                        onPress={() => toggleOption(option.id)}
                        fillColor="#565489"
                        width={20}
                    />
                    <Text style={{ marginLeft: 15, fontSize: 16 }}>{option.text}</Text>
                </View>
            ))}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                <Button
                    title="Previous"
                    onPress={() => setCurrentIndex(index => Math.max(index - 1, 0))}
                    disabled={currentIndex === 0}
                />
                <Button
                    title="Next"
                    onPress={() => setCurrentIndex(index => Math.min(index + 1, questions.length - 1))}
                    disabled={currentIndex === questions.length - 1}
                />
            </View>
        </View>
    )

}
export default QuestionScreen;
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
        marginBottom: 20,
    },
    imageStyle: {
        height: "100%",
        width: "100%",
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
    renderComponent: {
        height: 120,
        width: 120,
        borderWidth: 0.6,
        borderColor: "gray",
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    titleTextStyle: {
        textAlign: 'center'
    }
});