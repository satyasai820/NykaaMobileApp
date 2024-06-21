import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const HomeFirstBanner = () => {


    return(
        <>
        <View style={styles.container}>
            <Image source={{uri:'https://images-static.nykaa.com/uploads/032f04d6-da47-4a7b-b7c4-3dbd2701f654.gif'}} style={styles.imageStyle}  />
        </View>
        </>
    )
}

export default HomeFirstBanner;

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container :{
        margin:10
    },
   imageStyle :{
    //  maxWidth:450,
    //  height:200,
    width : screenWidth < 400 ? 340 :  screenWidth <= 420 ? 392 : 405,
    height: screenWidth < 400 ? 170 : 200
   }
})