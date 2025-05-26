import React from "react";
import { StyleSheet, Image, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";


const SubjectDetails = () => {
  const navigation = useNavigation();
  var topics = [
    { id: 1, name: "Algebrea" },
    { id: 2, name: "Geometry" },
    { id: 3, name: "Trigonometry" },
    { id: 4, name: "Calculus" },
    { id: 5, name: "Statistics" },
    { id: 6, name: "Probability" },
    { id: 7, name: "Linear Algebra" },
    { id: 8, name: "Differential Equations" },
    { id: 9, name: "Number Theory" },
    { id: 10, name: "Discrete Mathematics" },
    { id: 11, name: "Combinatorics" },
    { id: 12, name: "Graph Theory" },
    { id: 13, name: "Complex Analysis" },
    { id: 14, name: "Real Analysis" },
    { id: 15, name: "Abstract Algebra" },
    { id: 16, name: "Topology" },
    { id: 17, name: "Mathematical Logic" },
    { id: 18, name: "Set Theory" },
    { id: 19, name: "Functional Analysis" },
    { id: 20, name: "Numerical Analysis" },
    { id: 21, name: "Mathematical Statistics" },
    { id: 22, name: "Mathematical Physics" },
    { id: 23, name: "Mathematical Biology" },
    { id: 24, name: "Mathematical Finance" },
    { id: 25, name: "Mathematical Economics" },
    { id: 26, name: "Mathematical Cryptography" },
    { id: 27, name: "Mathematical Game Theory" },
    { id: 28, name: "Mathematical Optimization" },
    { id: 29, name: "Mathematical Control Theory" },
    { id: 30, name: "Mathematical Operations Research" },
  ]
  type itemProps ={
        id: number,
        name: string,
    }
  const renderComponent = ({ item }: { item: itemProps}) => {
    return(
    <View style={styles.renderComponent}>
      <Text style={styles.titleTextStyle}>{item.name}</Text>
    </View>
    )

  }

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
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderComponent}
        numColumns={3}
      />
    </View>
  )

}
export default SubjectDetails;
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