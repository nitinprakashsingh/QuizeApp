import { StyleSheet,Dimensions} from "react-native";


const styles = StyleSheet.create({
    container: {
        borderWidth: 0.7,
        borderColor: "#C6A500",
        height: 200,
        marginTop: -60,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 15,
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
        },
        middleView:{
           flexDirection: 'row',
           marginLeft: 15,
           marginRight: 15,
           marginBottom: 15,
           width: Dimensions.get('window').width -60,
        },
        ImageContainer: {
            height: 50,
            width: 50,
            borderRadius: 30,
            backgroundColor: "white",
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageStyles:{
            height: 40,
            width: 40,
            alignSelf: 'center',
        },
        textContainer:{
            marginLeft: 15,
            width: "81%",
        },
        titleText: {
            fontSize: 13,
            lineHeight: 16,
            fontWeight: 600,
        },
        subText: {
            fontSize: 11,
            lineHeight: 14,
            width: "100%",
            borderWidth: 1
        }
});
export default styles;