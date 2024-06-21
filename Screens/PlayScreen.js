import { StyleSheet, Text, View, Image } from "react-native"

const PlayScreen = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/offers-image.png')} />
        <Text style={{fontSize:18, fontWeight:'bold', color:'grey'}}>This is Play Screen</Text>
        </View>
    )
}

export default PlayScreen;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center'
    },
    image : {
        width:200,
        height:250
    }
})