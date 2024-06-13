import { View, Text, StyleSheet, Image } from "react-native";

const Wishlist = () => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Image style={{width:160, height:152}} source={require('../assets/wishlistimg.png')} />
                </View>
                <View>
                <Text style={{fontSize:16, marginTop:10}}>NO ITEMS IN THIS WISHLIST</Text>
                </View>
                <View>
                    <Text style={styles.buttomStyle}>GO SHOPPING</Text>
                </View>
            </View>
        </>
    )
}

export default Wishlist;

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttomStyle : {
        color:'white',
        backgroundColor:'#E80071',
        padding:10,
        fontWeight:'bold',
        fontSize:16,
        marginTop:80
    }
})