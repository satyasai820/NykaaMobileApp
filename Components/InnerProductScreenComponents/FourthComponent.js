import { StyleSheet, View, Text } from "react-native";
import CardSwiperComponent from "../HomeComponents/CardSwiperComponent";
import HomeHotListCardSwiperComponent from "../HomeComponents/HomeHotListCardSwiperComponent";

const FourthComponent = () => {
    const cardsData = [{img:''}]
    return(
        <>
        <View style={{backgroundColor:'#FFFFFF'}}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>More from Lakme</Text>
                </View>
                <View style={{marginLeft:'auto'}}>
                    <Text style={styles.sideText}>View All</Text>
                </View>
            </View>
            <HomeHotListCardSwiperComponent display='none' />
        </View>
        </>
    )
}

export default FourthComponent;

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:15,
        paddingVertical:10
    },
    text : {
        fontSize:16,
        fontWeight:'bold'
    },
    sideText : {
        fontSize:15,
        fontWeight:'bold',
        color:'#E80071'
    }
})