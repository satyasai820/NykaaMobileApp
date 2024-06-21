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
        margin:10,
        width:'100%',
    },
   imageStyle :{
    //  maxWidth:450,
    //  height:200,
    width : screenWidth < 380 ? 340 :  screenWidth <= 410 ? 375 : screenWidth <= 420 ? 392 : 405,
    height: screenWidth < 380 ? 170 : screenWidth <= 410 ? 190 : screenWidth <= 420 ? 190 : 200
   }
})